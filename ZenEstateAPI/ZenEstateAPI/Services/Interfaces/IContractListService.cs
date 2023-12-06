using ZenEstateAPI.Models;

namespace ZenEstateAPI.Services.Interfaces
{
    public interface IContractListService
    {
        public ContractList? GetContractList(int id);
    }
}