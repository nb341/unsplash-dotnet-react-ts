using Microsoft.EntityFrameworkCore;
using unsplash_dotnet.Models;

namespace unsplash_dotnet.Data;
public class DataContext : DbContext{
    public DataContext(DbContextOptions<DataContext> options) : base(options) 
     { 
        this.PhotoItems = this.Set<PhotoItem>();
     }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.UseSerialColumns();
        }

    public DbSet<PhotoItem> PhotoItems{get; set;}
}