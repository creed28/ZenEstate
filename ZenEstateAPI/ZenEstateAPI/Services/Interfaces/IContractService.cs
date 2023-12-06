using ZenEstateAPI.Models;

namespace ZenEstateAPI.Services.Interfaces
{
    public interface IContractService
    {
        public Contract GetContract(int id);
    }
}