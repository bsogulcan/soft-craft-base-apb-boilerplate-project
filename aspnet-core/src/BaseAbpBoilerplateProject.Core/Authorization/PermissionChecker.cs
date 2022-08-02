using Abp.Authorization;
using BaseAbpBoilerplateProject.Authorization.Roles;
using BaseAbpBoilerplateProject.Authorization.Users;

namespace BaseAbpBoilerplateProject.Authorization
{
    public class PermissionChecker : PermissionChecker<Role, User>
    {
        public PermissionChecker(UserManager userManager)
            : base(userManager)
        {
        }
    }
}
