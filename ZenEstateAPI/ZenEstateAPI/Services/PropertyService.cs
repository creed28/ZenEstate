using ZenEstateAPI.Data;
using ZenEstateAPI.Models.DTOs;
using ZenEstateAPI.Models;
using ZenEstateAPI.Services.Interfaces;

namespace ZenEstateAPI.Services
{
    public class PropertyService : IPropertyService
    {
        private readonly AppDbContext _context;

        public PropertyService(AppDbContext context)
        {
            _context = context;
        }

        public async Task CreateProperty(PropertyDTO request)
        {
            string filePath = "";

            if (request.ImageFile != null && request.ImageFile.Length > 0)
            {
                var fileName = Guid.NewGuid().ToString() + Path.GetExtension(request.ImageFile.FileName);

                filePath = Path.Combine(Environment.CurrentDirectory + "/Images", fileName);

                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    await request.ImageFile.CopyToAsync(stream);
                }
            }

            var property = new Property
            {
                Name = request.Name,
                Description = request.Description,
                City = request.City,
                Address = request.Address,
                Price = request.Price,
                Bathrooms = request.Bathrooms,
                Bedrooms = request.Bedrooms,
                Area = request.Area,
                ConstructionYear = request.ConstructionYear,
                Type = request.Type,
                ImageName = filePath,

            };
            _context.Properties.Add(property);
            await _context.SaveChangesAsync();
        }

        public List<Property> GetAllProperties()
        {
            return _context.Properties.ToList();
        }

        public Property? GetProperty(int id)
        {
            return  _context.Properties.ToList().Find(p => p.Id == id);
        }
    }
}