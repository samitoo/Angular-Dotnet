using System.Collections.Generic;
using System.Threading.Tasks;
using Utiliserve.API.Models;

namespace Utiliserve.API.Data
{
    public interface IDatingRepository
    {
        // Saves typing, generic has to be a class, works for users and photos
         void Add<T>(T entity) where T: class;
         void Delete<T>(T entity) where T: class;
         Task<bool> SaveAll();
         Task<IEnumerable<User>> GetUsers();
         Task<User> GetUser(int id);
         //Forms
         Task<IEnumerable<Form>> GetForms();
         Task<Form> GetForm(int id);

        
         
    }
}