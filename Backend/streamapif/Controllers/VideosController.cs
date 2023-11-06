using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using streamapi.Models;
using streamapi.services;

namespace streamapi.Controllers
{
    [ApiController]
    [Route("api/trending")]
    public class VideosController : ControllerBase
    {
        private readonly IVideosService videosService;

        public VideosController(IVideosService videosService)
{
            this.videosService = videosService;
        }

        // GET: api
        [HttpGet]
        public ActionResult<List<Videos>> GET(){
            return videosService.Get();
        }

        // GET: api by id
        [HttpGet("{id}")]
public ActionResult<Videos> Get(string id){
var videos = videosService.Get(id);
if (videos == null){
    return NotFound($"Video with Id = {id} not found");
}

    return videos;
}

// POST api
[HttpPost]
public ActionResult<Videos> Post([FromBody] Videos videos){
    videosService.Create(videos);
    return CreatedAtAction(nameof(Get),new {id = videos.Id},videos);
}

// UPDATE api
[HttpPut("{id}")]
public ActionResult Put(string id, [FromBody] Videos videos){
    var existingVideos = videosService.Get(id);
    if(existingVideos == null){
        return NotFound($"Video with Id = {id} not found");
    }
    videosService.Update(id,videos);
    return NoContent();
}

// DELETE api
[HttpDelete("{id}")]
public ActionResult Delete(string id){
    var video = videosService.Get(id);
    if(video == null){
        return NotFound($"Video with Id = {id} not found");
    }
    videosService.Remove(video.Id);
    return Ok($"Video with Id = {id} deleted");
}

    }
}