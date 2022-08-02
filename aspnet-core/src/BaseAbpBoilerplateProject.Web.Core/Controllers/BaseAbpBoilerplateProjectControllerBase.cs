using Abp.AspNetCore.Mvc.Controllers;
using Abp.IdentityFramework;
using Microsoft.AspNetCore.Identity;

namespace BaseAbpBoilerplateProject.Controllers
{
    public abstract class BaseAbpBoilerplateProjectControllerBase: AbpController
    {
        protected BaseAbpBoilerplateProjectControllerBase()
        {
            LocalizationSourceName = BaseAbpBoilerplateProjectConsts.LocalizationSourceName;
        }

        protected void CheckErrors(IdentityResult identityResult)
        {
            identityResult.CheckErrors(LocalizationManager);
        }
    }
}
