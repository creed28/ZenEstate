using Microsoft.AspNetCore.Mvc;
using ZenEstateAPI.Services.Interfaces;

namespace ZenEstateAPI.Controllers
{
        [Route("api/[controller]")]
        [ApiController]
        public class ContractListController : ControllerBase
        {

            public readonly IContractListService _contractListService;

            public ContractListController(IContractListService contractListService)
            {
                _contractListService = contractListService;
            }

            [HttpGet("{id}")]
            public ActionResult GetContractById(int id)
            {
                var contractList = _contractListService.GetContractList(id);
                if (contractList == null)
                {
                    return NotFound();
                }
                return Ok(contractList);
            }
        }
}