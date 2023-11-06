using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using streamapi.Models;
using streamapi.services;
using streamapif.Models;
using streamapif.services;

namespace streamapif.Controllers
{
    [ApiController]
    [Route("api/user")]
    public class UserController : ControllerBase
    {
        private readonly IUserService userService;

        public UserController(IUserService userService)
        {
            this.userService = userService;
        }

        [HttpGet]
        public ActionResult<List<User>> GET()
        {
            return userService.Get();
        }

        [HttpGet("{id}")]
        public ActionResult<User> Get(string id)
        {
            var user = userService.Get(id);
            if (user == null)
            {
                return NotFound($"User with Id = {id} not found");
            }
            return user;
        }

        [HttpPost]
        public ActionResult<User> Post([FromBody] User user)
        {
            userService.Create(user);
            return CreatedAtAction(nameof(Get), new { id = user.Id }, user);
        }

        [HttpPut("{id}")]
        public ActionResult Put(string id, [FromBody] User user)
        {
            var existingUser = userService.Get(id);
            if (existingUser == null)
            {
                return NotFound($"User with Id = {id} not found");
            }
            userService.Update(id, user);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public ActionResult Delete(string id)
        {
            var user = userService.Get(id);
            if (user == null)
            {
                return NotFound($"User with Id = {id} not found");
            }
            userService.Remove(user.Id);
            return Ok($"User with Id = {id} deleted");
        }
    }
}
