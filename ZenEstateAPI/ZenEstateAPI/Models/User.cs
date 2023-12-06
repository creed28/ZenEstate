using System.ComponentModel.DataAnnotations;

namespace ZenEstateAPI.Models
{

    public enum Role
    {
        Admin, 
        Customer
    }

    public class User
    {
        public int Id { get; set; }
        [StringLength(16)]
        public string Name { get; set; }
        [StringLength(255)]
        public string Email { get; set; }
        [StringLength(10)]
        public string Phone { get; set; }
        public string Password { get; set; }
        public Role Role { get; set; }
        public ContractList ContractList { get; set; }
    }
}