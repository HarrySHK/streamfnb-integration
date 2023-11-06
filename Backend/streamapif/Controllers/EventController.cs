using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using streamapi.Models;
using streamapi.services;
using streamapif.Models;
using streamapif.services;

namespace streamapif.Controllers
{
    [ApiController]
    [Route("api/event")]
    public class EventController : ControllerBase
    {
        private readonly IEventService eventService;

        public EventController(IEventService eventService)
        {
            this.eventService = eventService;
        }

        [HttpGet]
        public ActionResult<List<Event>> GET()
        {
            return eventService.Get();
        }

        [HttpGet("{id}")]
        public ActionResult<Event> Get(string id)
        {
            var ev = eventService.Get(id);
            if (ev == null)
            {
                return NotFound($"Event with Id = {id} not found");
            }
            return ev;
        }

        [HttpPost]
        public ActionResult<Event> Post([FromBody] Event ev)
        {
            eventService.Create(ev);
            return CreatedAtAction(nameof(Get), new { id = ev.Id }, ev);
        }

        [HttpPut("{id}")]
        public ActionResult Put(string id, [FromBody] Event ev)
        {
            var existingEvent = eventService.Get(id);
            if (existingEvent == null)
            {
                return NotFound($"Event with Id = {id} not found");
            }
            eventService.Update(id, ev);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public ActionResult Delete(string id)
        {
            var ev = eventService.Get(id);
            if (ev == null)
            {
                return NotFound($"Event with Id = {id} not found");
            }
            eventService.Remove(ev.Id);
            return Ok($"Event with Id = {id} deleted");
        }
    }
}
