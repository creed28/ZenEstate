namespace ZenEstateAPI.Models
{
    public class Contract
    {
        public int Id { get; set; }
        public User Owner { get; set; }
        public int OwnerId { get; set; }
        public Property Property { get; set; }
        public int PropertyId { get; set; }
    }
}