using ZenEstateAPI.Data;
using ZenEstateAPI.Models;
using ZenEstateAPI.Models.DTOs;
using ZenEstateAPI.Services.Interfaces;

namespace ZenEstateAPI.Services
{
    public class ContractService : IContractService
    {
        private readonly AppDbContext _context;

        public ContractService(AppDbContext context)
        {
            _context = context;
        }

        public async Task CreateContract(PropertyDTO request, User owner)
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
                ImageName = request.ImageName,

            };
            _context.Properties.Add(property);
            await _context.SaveChangesAsync();
            var contract = new Contract
            {
                Owner = owner,
                OwnerId = request.OwnerId,
                Property = property,
                PropertyId = property.Id 
            };
            _context.Contracts.Add(contract);
            await _context.SaveChangesAsync();
            property.PropertyContractId = contract.Id;
            await _context.SaveChangesAsync();
        }

        public List<Contract> GetAllContracts()
        {
            return _context.Contracts.ToList();
        }

        public Contract? GetContract(int id)
        {
            return _context.Contracts.ToList().Find(p => p.Id == id);
        }

        
    }
}