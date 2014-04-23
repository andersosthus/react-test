using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(React_Test.Startup))]
namespace React_Test
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
