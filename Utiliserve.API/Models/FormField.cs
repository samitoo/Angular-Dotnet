namespace Utiliserve.API.Models
{
    public class FormField
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Value { get; set; }
        public Form Form { get; set; }
        public int FormId { get; set; }
        public FieldTypes FieldType { get; set; }


        public enum FieldTypes{
            button,
            checkbox,
            date,
            password,
            radio,
            submit,
            telephone,
            text, 
            url
        }
    }
}