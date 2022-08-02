using Microsoft.Extensions.Configuration;
using Castle.MicroKernel.Registration;
using Abp.Events.Bus;
using Abp.Modules;
using Abp.Reflection.Extensions;
using BaseAbpBoilerplateProject.Configuration;
using BaseAbpBoilerplateProject.EntityFrameworkCore;
using BaseAbpBoilerplateProject.Migrator.DependencyInjection;

namespace BaseAbpBoilerplateProject.Migrator
{
    [DependsOn(typeof(BaseAbpBoilerplateProjectEntityFrameworkModule))]
    public class BaseAbpBoilerplateProjectMigratorModule : AbpModule
    {
        private readonly IConfigurationRoot _appConfiguration;

        public BaseAbpBoilerplateProjectMigratorModule(BaseAbpBoilerplateProjectEntityFrameworkModule abpProjectNameEntityFrameworkModule)
        {
            abpProjectNameEntityFrameworkModule.SkipDbSeed = true;

            _appConfiguration = AppConfigurations.Get(
                typeof(BaseAbpBoilerplateProjectMigratorModule).GetAssembly().GetDirectoryPathOrNull()
            );
        }

        public override void PreInitialize()
        {
            Configuration.DefaultNameOrConnectionString = _appConfiguration.GetConnectionString(
                BaseAbpBoilerplateProjectConsts.ConnectionStringName
            );

            Configuration.BackgroundJobs.IsJobExecutionEnabled = false;
            Configuration.ReplaceService(
                typeof(IEventBus), 
                () => IocManager.IocContainer.Register(
                    Component.For<IEventBus>().Instance(NullEventBus.Instance)
                )
            );
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(BaseAbpBoilerplateProjectMigratorModule).GetAssembly());
            ServiceCollectionRegistrar.Register(IocManager);
        }
    }
}
