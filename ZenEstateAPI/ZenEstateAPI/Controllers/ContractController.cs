using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ZenEstateAPI.Models.DTOs;
using ZenEstateAPI.Services;
using ZenEstateAPI.Services.Interfaces;

namespace ZenEstateAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContractController : ControllerBase
    {

        public readonly IContractService _contractService;
        public readonly IUserService _userService;

        public ContractController(IContractService contractService, IUserService userService)
        {
            _contractService = contractService;
            _userService = userService;
        }

        [HttpGet("{id}")]
        public ActionResult GetContractById(int id)
        {
            var contract = _contractService.GetContract(id);
            if (contract == null)
            {
                return NotFound();
            }
            return Ok(contract);
        }

        [HttpPost("CreateContract")]
        public async Task<IActionResult> CreateContract([FromForm] PropertyDTO request)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var user = _userService.GetUser(request.OwnerId);
            await _contractService.CreateContract(request, user);
            return Ok();
        }

        [HttpGet("GetAllContracts")]
        public ActionResult GetAllContracts()
        {
            var contracts = _contractService.GetAllContracts();
            if (contracts == null)
            {
                return NotFound();
            }
            return Ok(contracts);
        }
    }
}