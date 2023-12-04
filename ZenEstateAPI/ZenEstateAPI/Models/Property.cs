namespace ZenEstateAPI.Models
{
    public class Property
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string City { get; set; }
        public string Address { get; set; }
        public string Type { get; set; }
        public int Bedrooms { get; set; }
        public int Bathrooms { get; set; }
        public int Area { get; set; }
        public double Price { get; set; }
        public string Description {  get; set; }
        public string ConstructionYear { get; set; }
    }
}