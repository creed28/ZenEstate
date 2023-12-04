using ZenEstateAPI.Models;

namespace ZenEstateAPI.Services.Interfaces
{
    public interface IAuthService
    {
        public string CreateToken(User user);
    }
}