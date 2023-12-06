namespace ZenEstateAPI.Models
{
    public class ContractList
    {
        public int Id { get; set; }
        public Contract Contract { get; set; }
        public int ContractId { get; set; }
        public int UserId { get; set; }
        public User Customer { get; set; }
    }
}