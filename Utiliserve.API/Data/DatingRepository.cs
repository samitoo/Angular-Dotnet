using System.Collections.Generic;
using System.Threading.Tasks;
using Utiliserve.API.Models;
using Microsoft.EntityFrameworkCore;

namespace Utiliserve.API.Data
{
    public class DatingRepository : IDatingRepository
    {
        private readonly DataContext _context;
        public DatingRepository(DataContext context)
        {
            _context = context;

        }

        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }

        public async Task<User> GetUser(int id)
        {
            var user = await _context.Users.Include(p => p.Photos).FirstOrDefaultAsync(u => u.Id == id);
            return user;
        }

        public async Task<IEnumerable<User>> GetUsers()
        {
            var users = await _context.Users.Include(p =>p.Photos).ToListAsync();
            return users;
        }

        public async Task<Form> GetForm(int id)
        {
            var form = await _context.Forms.FirstOrDefaultAsync(u => u.Id == id);
            return form;
        }

        public async Task<IEnumerable<Form>> GetForms()
        {
            var forms = await _context.Forms.ToListAsync();
            return forms;
        }

        public async Task<bool> SaveAll()
        {
            //returns more than 0, it returns true, if = 0, nothing saved to DB
            return await _context.SaveChangesAsync() > 0;
        }
    }
}