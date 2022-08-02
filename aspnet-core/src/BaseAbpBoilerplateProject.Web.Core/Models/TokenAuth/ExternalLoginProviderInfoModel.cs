using Abp.AutoMapper;
using BaseAbpBoilerplateProject.Authentication.External;

namespace BaseAbpBoilerplateProject.Models.TokenAuth
{
    [AutoMapFrom(typeof(ExternalLoginProviderInfo))]
    public class ExternalLoginProviderInfoModel
    {
        public string Name { get; set; }

        public string ClientId { get; set; }
    }
}
