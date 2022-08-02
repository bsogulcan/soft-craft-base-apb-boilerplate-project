using Abp.AutoMapper;
using Abp.Modules;
using Abp.Reflection.Extensions;
using BaseAbpBoilerplateProject.Authorization;

namespace BaseAbpBoilerplateProject
{
    [DependsOn(
        typeof(BaseAbpBoilerplateProjectCoreModule), 
        typeof(AbpAutoMapperModule))]
    public class BaseAbpBoilerplateProjectApplicationModule : AbpModule
    {
        public override void PreInitialize()
        {
            Configuration.Authorization.Providers.Add<BaseAbpBoilerplateProjectAuthorizationProvider>();
        }

        public override void Initialize()
        {
            var thisAssembly = typeof(BaseAbpBoilerplateProjectApplicationModule).GetAssembly();

            IocManager.RegisterAssemblyByConvention(thisAssembly);

            Configuration.Modules.AbpAutoMapper().Configurators.Add(
                // Scan the assembly for classes which inherit from AutoMapper.Profile
                cfg => cfg.AddMaps(thisAssembly)
            );
        }
    }
}
