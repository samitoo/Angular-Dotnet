
using System.Threading.Tasks;
using Utiliserve.API.Models;

namespace Utiliserve.API.Data

{
    public interface IAuthRepository
    {
         Task<User> Register (User user, string password);
         
         Task<User> Login (string username, string password);
         Task<bool> UserExists (string username);

    }
}