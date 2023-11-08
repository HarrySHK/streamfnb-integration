using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using streamapi.Models;
using streamapi.services;
using streamapif.services;

namespace streamapif.Controllers
{
    [ApiController]
    [Route("api/celebs")]
    public class CelebsController : ControllerBase
    {
        private readonly ICelebsService celebsService;

        public CelebsController(ICelebsService celebsService)
        {
            this.celebsService = celebsService;
        }

        [HttpGet]
        public ActionResult<List<Celebs>> GET()
        {
            return celebsService.Get();
        }

        [HttpGet("{id}")]
        public ActionResult<Celebs> Get(string id)
        {
            var celeb = celebsService.Get(id);
            if (celeb == null)
            {
                return NotFound($"Celeb with Id = {id} not found");
            }
            return celeb;
        }

        [HttpPost]
        public ActionResult<Celebs> Post([FromBody] Celebs celeb)
        {
            celebsService.Create(celeb);
            return CreatedAtAction(nameof(Get), new { id = celeb.Id }, celeb);
        }

        [HttpPut("{id}")]
        public ActionResult Put(string id, [FromBody] Celebs celeb)
        {
            var existingCeleb = celebsService.Get(id);
            if (existingCeleb == null)
            {
                return NotFound($"Celeb with Id = {id} not found");
            }
            celebsService.Update(id, celeb);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public ActionResult Delete(string id)
        {
            var celeb = celebsService.Get(id);
            if (celeb == null)
            {
                return NotFound($"Celeb with Id = {id} not found");
            }
            celebsService.Remove(celeb.Id);
            return Ok($"Celeb with Id = {id} deleted");
        }
    }
}
