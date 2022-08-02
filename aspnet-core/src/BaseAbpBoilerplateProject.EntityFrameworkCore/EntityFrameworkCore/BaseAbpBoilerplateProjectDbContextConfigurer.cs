using System.Data.Common;
using Microsoft.EntityFrameworkCore;

namespace BaseAbpBoilerplateProject.EntityFrameworkCore
{
    public static class BaseAbpBoilerplateProjectDbContextConfigurer
    {
        public static void Configure(DbContextOptionsBuilder<BaseAbpBoilerplateProjectDbContext> builder, string connectionString)
        {
            builder.UseSqlServer(connectionString);
        }

        public static void Configure(DbContextOptionsBuilder<BaseAbpBoilerplateProjectDbContext> builder, DbConnection connection)
        {
            builder.UseSqlServer(connection);
        }
    }
}
