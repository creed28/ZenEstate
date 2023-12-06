using ZenEstateAPI.Data;
using ZenEstateAPI.Models;
using ZenEstateAPI.Services.Interfaces;

namespace ZenEstateAPI.Services
{
    public class ContractListService : IContractListService
    {
        private readonly AppDbContext _context;

        public ContractListService(AppDbContext context)
        {
            _context = context;
        }

        public ContractList? GetContractList(int id)
        {
            return _context.ContractsList.ToList().Find(p => p.Id == id);
        }
    }
}