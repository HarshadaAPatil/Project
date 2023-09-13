using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MiniProject
{
    public class Admin
    {
        private string name;
        private string password;

        public string Name
        {
            get { return name; }
            set {
                if (User.ValidateName(value) && value.Length > 4 && value.Length < 12) { name = value; }

                else { Console.WriteLine(" please enter valid name "); }
            }
        }

        public string Password
        {
            get { return password; }
            set
            {
                if (User.IsValidatePassword(value)) { password = value; }

                else { Console.WriteLine(" please enter valid password "); }
            }
        }
    }
}
