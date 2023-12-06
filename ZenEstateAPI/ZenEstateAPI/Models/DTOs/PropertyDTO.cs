using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace ZenEstateAPI.Models.DTOs
{
    public class PropertyDTO
    {
        public int OwnerId { get; set; }
        public string Name { get; set; }
        public string City { get; set; }
        public string Address { get; set; }
        public int Bedrooms { get; set; }
        public int Bathrooms { get; set; }
        public Type Type { get; set; }
        public int Area { get; set; }
        public double Price { get; set; }
        public string Description { get; set; }
        public int ConstructionYear { get; set; }
        public string ImageName { get; set; }
        public IFormFile ImageFile { get; set; }
    }
}