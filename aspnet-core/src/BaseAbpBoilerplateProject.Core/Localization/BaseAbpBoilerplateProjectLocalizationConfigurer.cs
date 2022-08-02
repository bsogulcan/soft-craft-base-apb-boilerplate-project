using Abp.Configuration.Startup;
using Abp.Localization.Dictionaries;
using Abp.Localization.Dictionaries.Xml;
using Abp.Reflection.Extensions;

namespace BaseAbpBoilerplateProject.Localization
{
    public static class BaseAbpBoilerplateProjectLocalizationConfigurer
    {
        public static void Configure(ILocalizationConfiguration localizationConfiguration)
        {
            localizationConfiguration.Sources.Add(
                new DictionaryBasedLocalizationSource(BaseAbpBoilerplateProjectConsts.LocalizationSourceName,
                    new XmlEmbeddedFileLocalizationDictionaryProvider(
                        typeof(BaseAbpBoilerplateProjectLocalizationConfigurer).GetAssembly(),
                        "BaseAbpBoilerplateProject.Localization.SourceFiles"
                    )
                )
            );
        }
    }
}
