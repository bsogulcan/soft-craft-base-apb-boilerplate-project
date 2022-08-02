using System.Threading.Tasks;
using BaseAbpBoilerplateProject.Models.TokenAuth;
using BaseAbpBoilerplateProject.Web.Controllers;
using Shouldly;
using Xunit;

namespace BaseAbpBoilerplateProject.Web.Tests.Controllers
{
    public class HomeController_Tests: BaseAbpBoilerplateProjectWebTestBase
    {
        [Fact]
        public async Task Index_Test()
        {
            await AuthenticateAsync(null, new AuthenticateModel
            {
                UserNameOrEmailAddress = "admin",
                Password = "123qwe"
            });

            //Act
            var response = await GetResponseAsStringAsync(
                GetUrl<HomeController>(nameof(HomeController.Index))
            );

            //Assert
            response.ShouldNotBeNullOrEmpty();
        }
    }
}