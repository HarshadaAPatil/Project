using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace MiniProject
{
    public class User
    {
        //name,email,address,mobno,password
        private string name;
        private string password;
        private string email;
        private string address;
        private string mobNo;
        public string Address { get { return address; } set { 
                if(value!=null) address = value;
            else
                    Console.WriteLine("Please enter the Address !!");
            } }


        public string Name
        {
            get { return name; }
            set
            {
                if (ValidateName(value) && value.Length > 4 && value.Length < 12) { name = value; }

                else { Console.WriteLine(" please enter valid name "); }
            }
        }
        public static bool ValidateName(string name)
        {
            string pattern = @"^(?!.*([A-Za-z])\1)[A-Za-z]+$";

            return Regex.IsMatch(name, pattern);
        }


        public string Password
        {
            get { return password; }
            set
            {
                if (IsValidatePassword(value)) { password = value; }

                else { Console.WriteLine(" please enter valid password "); }
            }
        }
        public static bool IsValidatePassword(string password)
        {
            string pattern = @"(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}";

            return Regex.IsMatch(password, pattern);
        }




        public string Email
        {
            get { return email; }
            set
            {
                if (IsValidateEmail(value)) { email = value; }

                else { Console.WriteLine(" please enter valid email "); }
            }
        }
        public static bool IsValidateEmail(string email)
        {
            string pattern = @"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$";

            return Regex.IsMatch(email, pattern);
        }


        public string MobileNo
        {
            get { return mobNo; }
            set
            {
                if (IsValidateMobileNo(value)) { mobNo = value; }

                else { Console.WriteLine(" please enter valid phone number "); }
            }
        }
        public static bool IsValidateMobileNo(string phoneNumber)
        {
            string pattern = @"^[789]\d{9}$";

            return Regex.IsMatch(phoneNumber, pattern);
        }
        public User() { }   

        public User(string name,string email,string password,string address,string mobno)
        {
            this.Name = name;
            this.Email = email;
            this.Password = password;
            this.Address = address;
            this.MobileNo = mobno;
        }
    }
}
