using ZenEstateAPI.Data;
using ZenEstateAPI.Models;
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

        public Contract? GetContract(int id)
        {
            return _context.Contracts.ToList().Find(p => p.Id == id);
        }
    }
}