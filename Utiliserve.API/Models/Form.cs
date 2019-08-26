using System;
using System.Collections.Generic;

namespace Utiliserve.API.Models
{
    public class Form
    {
        public int Id { get; set; }
        public string Formname { get; set; }
        public DateTime Created { get; set; }
        
        public ICollection<FormField> FormFields {get; set;}
    }
}