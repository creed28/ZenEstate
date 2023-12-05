﻿using ZenEstateAPI.Models;
using ZenEstateAPI.Models.DTOs;

namespace ZenEstateAPI.Services.Interfaces
{
    public interface IUserService
    {
        public Task RegisterUser(UserDTO request);
        public User? GetUser(UserDTO request);

    }
}