using Microsoft.EntityFrameworkCore;
using Utiliserve.API.Models;

namespace Utiliserve.API.Data
{
    public class DataContext: DbContext 
    {
        public DataContext(DbContextOptions<DataContext> options) :base (options){}

        public DbSet<Value> Values { get; set; }
        public DbSet<User> Users {get; set; }
        public DbSet<Photo> Photos { get; set; }
        public DbSet<Form> Forms { get; set; }
        public DbSet<FormField> FormFields { get; set; }
    }
}