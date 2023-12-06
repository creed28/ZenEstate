using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ZenEstateAPI.Models.DTOs;
using ZenEstateAPI.Services;
using ZenEstateAPI.Services.Interfaces;

namespace ZenEstateAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PropertyController : ControllerBase
    {
        public readonly IPropertyService _propertyService;

        public PropertyController(IPropertyService propertyService)
        {
            _propertyService = propertyService;
        }

        [HttpPost("CreateProperty")]
        public async Task<IActionResult> CreateProperty([FromForm] PropertyDTO request)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            await _propertyService.CreateProperty(request);
            return Ok();
        }

        [HttpGet("GetAllProperties")]
        public ActionResult GetAllProperties()
        {
            return Ok(_propertyService.GetAllProperties());
        }

        [HttpGet("{id}")]
        public ActionResult GetPropertyById(int id)
        {
            var property = _propertyService.GetProperty(id);
            if (property == null)
            {
                return NotFound();
            }

            /*var imagePath = @property.ImageName;

            if (System.IO.File.Exists(imagePath))
            {
                var imageData = System.IO.File.ReadAllBytes(imagePath);
                return Ok(new { property, imageData });
            }*/

            return Ok(property);
        }
    }
}