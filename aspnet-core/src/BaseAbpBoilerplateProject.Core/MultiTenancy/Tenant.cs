using Abp.MultiTenancy;
using BaseAbpBoilerplateProject.Authorization.Users;

namespace BaseAbpBoilerplateProject.MultiTenancy
{
    public class Tenant : AbpTenant<User>
    {
        public Tenant()
        {            
        }

        public Tenant(string tenancyName, string name)
            : base(tenancyName, name)
        {
        }
    }
}
