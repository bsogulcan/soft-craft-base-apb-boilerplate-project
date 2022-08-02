using Abp.AspNetCore;
using Abp.AspNetCore.TestBase;
using Abp.Modules;
using Abp.Reflection.Extensions;
using BaseAbpBoilerplateProject.EntityFrameworkCore;
using BaseAbpBoilerplateProject.Web.Startup;
using Microsoft.AspNetCore.Mvc.ApplicationParts;

namespace BaseAbpBoilerplateProject.Web.Tests
{
    [DependsOn(
        typeof(BaseAbpBoilerplateProjectWebMvcModule),
        typeof(AbpAspNetCoreTestBaseModule)
    )]
    public class BaseAbpBoilerplateProjectWebTestModule : AbpModule
    {
        public BaseAbpBoilerplateProjectWebTestModule(BaseAbpBoilerplateProjectEntityFrameworkModule abpProjectNameEntityFrameworkModule)
        {
            abpProjectNameEntityFrameworkModule.SkipDbContextRegistration = true;
        } 
        
        public override void PreInitialize()
        {
            Configuration.UnitOfWork.IsTransactional = false; //EF Core InMemory DB does not support transactions.
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(BaseAbpBoilerplateProjectWebTestModule).GetAssembly());
        }
        
        public override void PostInitialize()
        {
            IocManager.Resolve<ApplicationPartManager>()
                .AddApplicationPartsIfNotAddedBefore(typeof(BaseAbpBoilerplateProjectWebMvcModule).Assembly);
        }
    }
}