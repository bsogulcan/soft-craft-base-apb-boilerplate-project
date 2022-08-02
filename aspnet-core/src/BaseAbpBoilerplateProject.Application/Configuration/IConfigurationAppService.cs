using System.Threading.Tasks;
using BaseAbpBoilerplateProject.Configuration.Dto;

namespace BaseAbpBoilerplateProject.Configuration
{
    public interface IConfigurationAppService
    {
        Task ChangeUiTheme(ChangeUiThemeInput input);
    }
}
