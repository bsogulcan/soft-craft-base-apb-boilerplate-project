using Abp.Application.Services;
using BaseAbpBoilerplateProject.MultiTenancy.Dto;

namespace BaseAbpBoilerplateProject.MultiTenancy
{
    public interface ITenantAppService : IAsyncCrudAppService<TenantDto, int, PagedTenantResultRequestDto, CreateTenantDto, TenantDto>
    {
    }
}

