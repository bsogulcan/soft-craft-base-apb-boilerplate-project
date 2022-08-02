using System.ComponentModel.DataAnnotations;

namespace BaseAbpBoilerplateProject.Users.Dto
{
    public class ChangeUserLanguageDto
    {
        [Required]
        public string LanguageName { get; set; }
    }
}