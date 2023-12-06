using ZenEstateAPI.Models;
using ZenEstateAPI.Models.DTOs;

namespace ZenEstateAPI.Services.Interfaces
{
    public interface IPropertyService
    {
        public Task CreateProperty(PropertyDTO property);
        public List<Property> GetAllProperties();
        public Property GetProperty(int id);
    }
}