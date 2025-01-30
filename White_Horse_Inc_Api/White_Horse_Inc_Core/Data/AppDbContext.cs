﻿
using Microsoft.EntityFrameworkCore;

namespace White_Horse_Inc_Api.Data
{
    public class AppDbContext(DbContextOptions<AppDbContext> options) : DbContext(options)
    {
        public DbSet<T> GetDbSet<T>() where T : class => Set<T>();

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Este código obtém todas as classes de modelo criadas no namespace "API.Models" para que o Entity Framework possa mapeá-las corretamente durante as consultas.
            // Isso evita colocar todas as classes de modelo no método "OnModelCreating" manualmente.
            var entityTypes = AppDomain.CurrentDomain.GetAssemblies()
                .SelectMany(a => a.GetTypes())
                .Where(t =>
                    t.IsClass &&
                    !t.IsAbstract &&
                    t.IsPublic &&
                    t.Namespace == "White_Horse_Inc_Core.Models");

            foreach (var type in entityTypes)
            {
                modelBuilder.Entity(type);
            }
        }
    }
}
