using System.Collections.Generic;

namespace BaseAbpBoilerplateProject.Authentication.External
{
    public interface IExternalAuthConfiguration
    {
        List<ExternalLoginProviderInfo> Providers { get; }
    }
}
