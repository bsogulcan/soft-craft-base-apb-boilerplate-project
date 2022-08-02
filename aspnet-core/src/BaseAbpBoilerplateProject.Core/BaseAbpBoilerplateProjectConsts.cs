using BaseAbpBoilerplateProject.Debugging;

namespace BaseAbpBoilerplateProject
{
    public class BaseAbpBoilerplateProjectConsts
    {
        public const string LocalizationSourceName = "BaseAbpBoilerplateProject";

        public const string ConnectionStringName = "Default";

        public const bool MultiTenancyEnabled = true;


        /// <summary>
        /// Default pass phrase for SimpleStringCipher decrypt/encrypt operations
        /// </summary>
        public static readonly string DefaultPassPhrase =
            DebugHelper.IsDebug ? "gsKxGZ012HLL3MI5" : "6f6364118844409195f8f5b2bb5c9cae";
    }
}
