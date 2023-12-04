namespace ZenEstateAPI.Models
{
    public class Contract
    {
        public int Id { get; set; }
        public User Owner { get; set; }
        public Property Property { get; set; }
        public DateTime CreationDate { get; set; }
    }
}