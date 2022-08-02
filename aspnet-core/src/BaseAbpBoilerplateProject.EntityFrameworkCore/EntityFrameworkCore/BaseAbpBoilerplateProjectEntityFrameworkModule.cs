using Abp.EntityFrameworkCore.Configuration;
using Abp.Modules;
using Abp.Reflection.Extensions;
using Abp.Zero.EntityFrameworkCore;
using BaseAbpBoilerplateProject.EntityFrameworkCore.Seed;
using Microsoft.EntityFrameworkCore;

namespace BaseAbpBoilerplateProject.EntityFrameworkCore
{
    [DependsOn(
        typeof(BaseAbpBoilerplateProjectCoreModule), 
        typeof(AbpZeroCoreEntityFrameworkCoreModule))]
    public class BaseAbpBoilerplateProjectEntityFrameworkModule : AbpModule
    {
        /* Used it tests to skip dbcontext registration, in order to use in-memory database of EF Core */
        public bool SkipDbContextRegistration { get; set; }

        public bool SkipDbSeed { get; set; }

        public override void PreInitialize()
        {
            if (!SkipDbContextRegistration)
            {
                Configuration.Modules.AbpEfCore().AddDbContext<BaseAbpBoilerplateProjectDbContext>(options =>
                {
                    options.DbContextOptions.UseLazyLoadingProxies();
                    if (options.ExistingConnection != null)
                    {
                        BaseAbpBoilerplateProjectDbContextConfigurer.Configure(options.DbContextOptions, options.ExistingConnection);
                    }
                    else
                    {
                        BaseAbpBoilerplateProjectDbContextConfigurer.Configure(options.DbContextOptions, options.ConnectionString);
                    }
                });
            }
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(BaseAbpBoilerplateProjectEntityFrameworkModule).GetAssembly());
        }

        public override void PostInitialize()
        {
            if (!SkipDbSeed)
            {
                SeedHelper.SeedHostDb(IocManager);
            }
        }
    }
}
