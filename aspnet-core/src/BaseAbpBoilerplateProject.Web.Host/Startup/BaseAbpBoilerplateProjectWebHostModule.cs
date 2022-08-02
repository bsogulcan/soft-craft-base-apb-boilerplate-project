using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Abp.Modules;
using Abp.Reflection.Extensions;
using BaseAbpBoilerplateProject.Configuration;

namespace BaseAbpBoilerplateProject.Web.Host.Startup
{
    [DependsOn(
       typeof(BaseAbpBoilerplateProjectWebCoreModule))]
    public class BaseAbpBoilerplateProjectWebHostModule: AbpModule
    {
        private readonly IWebHostEnvironment _env;
        private readonly IConfigurationRoot _appConfiguration;

        public BaseAbpBoilerplateProjectWebHostModule(IWebHostEnvironment env)
        {
            _env = env;
            _appConfiguration = env.GetAppConfiguration();
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(BaseAbpBoilerplateProjectWebHostModule).GetAssembly());
        }
    }
}
