using Abp.Localization;
using Abp.Modules;
using Abp.Reflection.Extensions;
using Abp.Runtime.Security;
using Abp.Timing;
using Abp.Zero;
using Abp.Zero.Configuration;
using BaseAbpBoilerplateProject.Authorization.Roles;
using BaseAbpBoilerplateProject.Authorization.Users;
using BaseAbpBoilerplateProject.Configuration;
using BaseAbpBoilerplateProject.Localization;
using BaseAbpBoilerplateProject.MultiTenancy;
using BaseAbpBoilerplateProject.Timing;

namespace BaseAbpBoilerplateProject
{
    [DependsOn(typeof(AbpZeroCoreModule))]
    public class BaseAbpBoilerplateProjectCoreModule : AbpModule
    {
        public override void PreInitialize()
        {
            Configuration.Auditing.IsEnabledForAnonymousUsers = true;

            // Declare entity types
            Configuration.Modules.Zero().EntityTypes.Tenant = typeof(Tenant);
            Configuration.Modules.Zero().EntityTypes.Role = typeof(Role);
            Configuration.Modules.Zero().EntityTypes.User = typeof(User);

            BaseAbpBoilerplateProjectLocalizationConfigurer.Configure(Configuration.Localization);

            // Enable this line to create a multi-tenant application.
            Configuration.MultiTenancy.IsEnabled = BaseAbpBoilerplateProjectConsts.MultiTenancyEnabled;

            // Configure roles
            AppRoleConfig.Configure(Configuration.Modules.Zero().RoleManagement);

            Configuration.Settings.Providers.Add<AppSettingProvider>();
            
            Configuration.Localization.Languages.Add(new LanguageInfo("fa", "فارسی", "famfamfam-flags ir"));
            
            Configuration.Settings.SettingEncryptionConfiguration.DefaultPassPhrase = BaseAbpBoilerplateProjectConsts.DefaultPassPhrase;
            SimpleStringCipher.DefaultPassPhrase = BaseAbpBoilerplateProjectConsts.DefaultPassPhrase;
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(BaseAbpBoilerplateProjectCoreModule).GetAssembly());
        }

        public override void PostInitialize()
        {
            IocManager.Resolve<AppTimes>().StartupTime = Clock.Now;
        }
    }
}
