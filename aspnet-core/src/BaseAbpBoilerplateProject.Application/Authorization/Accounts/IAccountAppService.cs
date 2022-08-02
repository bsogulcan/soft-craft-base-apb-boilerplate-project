using System.Threading.Tasks;
using Abp.Application.Services;
using BaseAbpBoilerplateProject.Authorization.Accounts.Dto;

namespace BaseAbpBoilerplateProject.Authorization.Accounts
{
    public interface IAccountAppService : IApplicationService
    {
        Task<IsTenantAvailableOutput> IsTenantAvailable(IsTenantAvailableInput input);

        Task<RegisterOutput> Register(RegisterInput input);
    }
}
