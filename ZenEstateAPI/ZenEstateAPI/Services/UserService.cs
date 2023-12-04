using ZenEstateAPI.Data;
using ZenEstateAPI.Models;
using ZenEstateAPI.Models.DTOs;
using ZenEstateAPI.Services.Interfaces;

namespace ZenEstateAPI.Services
{
    public class UserService : IUserService
    {
        private readonly AppDbContext _context;

        public UserService(AppDbContext context)
        {
            _context = context;
        }

        public User? GetUser(UserDTO request)
        {
            var user = _context.Users.FirstOrDefault(user => user.Email == request.Email);

            if (user == null)
            {
                return null;
            }

            var correctPassword = BCrypt.Net.BCrypt.EnhancedVerify(request.Password, user.Password);

            if (!correctPassword)
            {
                return null;
            }

            return user;
        }

        public async Task RegisterUser(UserDTO request)
        {
            string hashedPassword = BCrypt.Net.BCrypt.EnhancedHashPassword(request.Password);
            var user = new User
            {
                Name = request.Name,
                Email = request.Email,
                Password = hashedPassword,
                Phone = request.Phone,

            };
            _context.Users.Add(user);
            await _context.SaveChangesAsync();
        }
    }
}