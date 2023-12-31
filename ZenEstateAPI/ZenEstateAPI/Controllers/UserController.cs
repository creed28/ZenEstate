﻿using Microsoft.AspNetCore.Mvc;
using ZenEstateAPI.Models.DTOs;
using ZenEstateAPI.Services;
using ZenEstateAPI.Services.Interfaces;

namespace ZenEstateAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;
        private readonly IAuthService _authService;

        public UserController(IUserService userService, IAuthService authService)
        {
            _userService = userService;
            _authService = authService;

        }

        [HttpPost("Register")]
        public async Task<IActionResult> Register(UserDTO request)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            await _userService.RegisterUser(request);
            return Ok();
        }

        [HttpPost("Login")]
        public ActionResult Login(UserDTO request)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var user = _userService.GetUser(request);

            if (user is null)
            {
                return BadRequest();
            }

            string token = _authService.CreateToken(user);

            string userName = user.Name;
            int userId = user.Id;

            return Ok(new { token, userName,  userId});
        }

        [HttpGet("GetAllUsers")]
        public ActionResult GetAllUsers()
        {
            return Ok(_userService.GetAllUsers());
        }

        [HttpGet("{id}")]
        public ActionResult GetUsertById(int id)
        {
            var user = _userService.GetUser(id);
            if (user == null)
            {
                return NotFound();
            }
            return Ok(user);
        }

    }  
}