using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using streamapi.Models;
using streamapi.services;
using streamapi1.Models;
using streamapi1.services;

namespace streamapi.Controllers
{
    [ApiController]
    [Route("api/recommended")]
    public class CategoriesController : ControllerBase
    {
        private readonly ICategoriesService categoriesService;

        public CategoriesController(ICategoriesService categoriesService)
        {
            this.categoriesService = categoriesService;
        }

        [HttpGet]
        public ActionResult<List<Categories>> GET()
        {
            return categoriesService.Get();
        }

        [HttpGet("{id}")]
        public ActionResult<Categories> Get(string id)
        {
            var category = categoriesService.Get(id);
            if (category == null)
            {
                return NotFound($"Category with Id = {id} not found");
            }
            return category;
        }

        [HttpPost]
        public ActionResult<Categories> Post([FromBody] Categories category)
        {
            categoriesService.Create(category);
            return CreatedAtAction(nameof(Get), new { id = category.Id }, category);
        }

        [HttpPut("{id}")]
        public ActionResult Put(string id, [FromBody] Categories category)
        {
            var existingCategory = categoriesService.Get(id);
            if (existingCategory == null)
            {
                return NotFound($"Category with Id = {id} not found");
            }
            categoriesService.Update(id, category);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public ActionResult Delete(string id)
        {
            var category = categoriesService.Get(id);
            if (category == null)
            {
                return NotFound($"Category with Id = {id} not found");
            }
            categoriesService.Remove(category.Id);
            return Ok($"Category with Id = {id} deleted");
        }
    }
}
