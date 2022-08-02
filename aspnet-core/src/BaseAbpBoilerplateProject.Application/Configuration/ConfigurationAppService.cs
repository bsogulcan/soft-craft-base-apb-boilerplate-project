using System.Threading.Tasks;
using Abp.Authorization;
using Abp.Runtime.Session;
using BaseAbpBoilerplateProject.Configuration.Dto;

namespace BaseAbpBoilerplateProject.Configuration
{
    [AbpAuthorize]
    public class ConfigurationAppService : BaseAbpBoilerplateProjectAppServiceBase, IConfigurationAppService
    {
        public async Task ChangeUiTheme(ChangeUiThemeInput input)
        {
            await SettingManager.ChangeSettingForUserAsync(AbpSession.ToUserIdentifier(), AppSettingNames.UiTheme, input.Theme);
        }
    }
}
