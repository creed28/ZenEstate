using Microsoft.EntityFrameworkCore;
using ZenEstateAPI.Models;

namespace ZenEstateAPI.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions options) : base(options)
        { 
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Property> Properties { get; set; }
        public DbSet<Contract> Contracts { get; set; }
        public DbSet<ContractList> ContractsList { get; set; }
    }
}