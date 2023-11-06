using Microsoft.AspNetCore.Mvc;
using streamapif.Models;
using streamapif.Services;
using System;
using System.Collections.Generic;

namespace streamapif.Controllers
{
    [ApiController]
    [Route("api/content")]
    public class ContentController : ControllerBase
    {
        private readonly IContentService contentService;

        public ContentController(IContentService contentService)
        {
            this.contentService = contentService;
        }

        [HttpGet]
        public ActionResult<List<Content>> Get()
        {
            try
            {
                var contentList = contentService.Get();
                return Ok(contentList);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal Server Error: {ex.Message}");
            }
        }

        [HttpGet("{id}")]
        public ActionResult<Content> Get(string id)
        {
            try
            {
                var content = contentService.Get(id);
                if (content == null)
                {
                    return NotFound($"Content with Id = {id} not found");
                }
                return Ok(content);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal Server Error: {ex.Message}");
            }
        }

        [HttpPost]
        public ActionResult<Content> Post([FromBody] Content content)
        {
            try
            {
                var createdContent = contentService.Create(content);
                return CreatedAtAction(nameof(Get), new { id = createdContent.Id }, createdContent);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal Server Error: {ex.Message}");
            }
        }

        [HttpPut("{id}")]
        public ActionResult Put(string id, [FromBody] Content content)
        {
            try
            {
                var existingContent = contentService.Get(id);
                if (existingContent == null)
                {
                    return NotFound($"Content with Id = {id} not found");
                }
                contentService.Update(id, content);
                return NoContent();
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal Server Error: {ex.Message}");
            }
        }

        [HttpDelete("{id}")]
        public ActionResult Delete(string id)
        {
            try
            {
                var content = contentService.Get(id);
                if (content == null)
                {
                    return NotFound($"Content with Id = {id} not found");
                }
                contentService.Remove(content.Id);
                return Ok($"Content with Id = {id} deleted");
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal Server Error: {ex.Message}");
            }
        }
    }
}
