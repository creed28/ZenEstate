using ZenEstateAPI.Models;
using ZenEstateAPI.Models.DTOs;

namespace ZenEstateAPI.Services.Interfaces
{
    public interface IContractService
    {
        public Contract GetContract(int id);
        public Task CreateContract(PropertyDTO request, User owner);
        public List<Contract> GetAllContracts();
    }
}