using System.Collections.Generic;
using Utiliserve.API.Models;
using Newtonsoft.Json;
using System.Linq;

namespace Utiliserve.API.Data
{
    public class Seed
    {
        private readonly DataContext _context;
        public Seed(DataContext context)
        {
            _context = context;
        }

        public void SeedUsers(){

            //if(!context.Users.Any()) {
                var userData = System.IO.File.ReadAllText("Data/UserSeedData.json");
                var users = JsonConvert.DeserializeObject<List<User>>(userData);
                foreach (var user in users)
                {
                    byte[] passwordHash, passwordSalt;
                    CreatePasswordHash("password", out passwordHash, out passwordSalt);
                    user.PasswordHash = passwordHash;
                    user.PasswordSalt = passwordSalt;
                    user.Username = user.Username.ToLower();

                    _context.Users.Add(user);
                }
                _context.SaveChanges();
            //}
        }

        private void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            //surround with using statment to guarantee the dispose method is called after use
            using (var hmac = new System.Security.Cryptography.HMACSHA512()){
                //Randomly generated key
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }

        public void SeedForms(){

            //if(!context.Forms.Any()){
                var formData = System.IO.File.ReadAllText("Data/FormSeedData.json");
                var forms = JsonConvert.DeserializeObject<List<Form>>(formData);

                foreach (var form in forms)
                {
                    _context.Forms.Add(form);
                }
                _context.SaveChanges();
            //}
        }

    }
}