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
    [Route("api/producer")]
    public class ProducerController : ControllerBase
    {
        private readonly IProducerService producerService;

        public ProducerController(IProducerService producerService)
        {
            this.producerService = producerService;
        }

        [HttpGet]
        public ActionResult<List<Producer>> GET()
        {
            return producerService.Get();
        }

        [HttpGet("{id}")]
        public ActionResult<Producer> Get(string id)
        {
            var producer = producerService.Get(id);
            if (producer == null)
            {
                return NotFound($"Producer with Id = {id} not found");
            }
            return producer;
        }

        [HttpPost]
        public ActionResult<Producer> Post([FromBody] Producer producer)
        {
            producerService.Create(producer);
            return CreatedAtAction(nameof(Get), new { id = producer.Id }, producer);
        }

        [HttpPut("{id}")]
        public ActionResult Put(string id, [FromBody] Producer producer)
        {
            var existingProducer = producerService.Get(id);
            if (existingProducer == null)
            {
                return NotFound($"Producer with Id = {id} not found");
            }
            producerService.Update(id, producer);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public ActionResult Delete(string id)
        {
            var producer = producerService.Get(id);
            if (producer == null)
            {
                return NotFound($"Producer with Id = {id} not found");
            }
            producerService.Remove(producer.Id);
            return Ok($"Producer with Id = {id} deleted");
        }
    }
}
