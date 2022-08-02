using Microsoft.EntityFrameworkCore;
using Abp.Zero.EntityFrameworkCore;
using BaseAbpBoilerplateProject.Authorization.Roles;
using BaseAbpBoilerplateProject.Authorization.Users;
using BaseAbpBoilerplateProject.MultiTenancy;

namespace BaseAbpBoilerplateProject.EntityFrameworkCore
{
    public class BaseAbpBoilerplateProjectDbContext : AbpZeroDbContext<Tenant, Role, User, BaseAbpBoilerplateProjectDbContext>
    {
        /* Define a DbSet for each entity of the application */
        
        public BaseAbpBoilerplateProjectDbContext(DbContextOptions<BaseAbpBoilerplateProjectDbContext> options)
            : base(options)
        {
        }
    }
}
