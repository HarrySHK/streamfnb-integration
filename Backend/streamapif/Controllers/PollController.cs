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
    [Route("api/poll")]
    public class PollController : ControllerBase
    {
        private readonly IPollService pollService;

        public PollController(IPollService pollService)
        {
            this.pollService = pollService;
        }

        [HttpGet]
        public ActionResult<List<Poll>> GET()
        {
            return pollService.Get();
        }

        [HttpGet("{id}")]
        public ActionResult<Poll> Get(string id)
        {
            var poll = pollService.Get(id);
            if (poll == null)
            {
                return NotFound($"Poll with Id = {id} not found");
            }
            return poll;
        }

        [HttpPost]
        public ActionResult<Poll> Post([FromBody] Poll poll)
        {
            pollService.Create(poll);
            return CreatedAtAction(nameof(Get), new { id = poll.Id }, poll);
        }

        [HttpPut("{id}")]
        public ActionResult Put(string id, [FromBody] Poll poll)
        {
            var existingPoll = pollService.Get(id);
            if (existingPoll == null)
            {
                return NotFound($"Poll with Id = {id} not found");
            }
            pollService.Update(id, poll);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public ActionResult Delete(string id)
        {
            var poll = pollService.Get(id);
            if (poll == null)
            {
                return NotFound($"Poll with Id = {id} not found");
            }
            pollService.Remove(poll.Id);
            return Ok($"Poll with Id = {id} deleted");
        }
    }
}
