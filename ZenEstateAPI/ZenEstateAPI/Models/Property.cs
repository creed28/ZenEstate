using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ZenEstateAPI.Models
{
    public enum Type
    {
        House,
        Apartment
    }

    public class Property
    {
        public int Id { get; set; }
        [StringLength(255)]
        public string Name { get; set; }
        [StringLength(30)]
        public string City { get; set; }
        [StringLength(255)]
        public string Address { get; set; }
        public Type Type { get; set; }
        public int Bedrooms { get; set; }
        public int Bathrooms { get; set; }
        public int Area { get; set; }
        public double Price { get; set; }
        public string Description {  get; set; }
        public int ConstructionYear { get; set; }
        [StringLength(255)]
        public string ImageName { get; set; }
        [NotMapped]
        public IFormFile ImageFile { get; set; }
        public int PropertyContractId { get; set; }
    }
}