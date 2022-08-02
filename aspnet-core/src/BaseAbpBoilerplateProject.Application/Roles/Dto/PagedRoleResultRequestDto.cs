using Abp.Application.Services.Dto;

namespace BaseAbpBoilerplateProject.Roles.Dto
{
    public class PagedRoleResultRequestDto : PagedResultRequestDto
    {
        public string Keyword { get; set; }
    }
}

