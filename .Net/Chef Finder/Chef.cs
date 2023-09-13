using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;


namespace MiniProject
{

    public class InputException : Exception
    {
        public InputException(string msg) : base(msg)
            { }
    }
    public class Chef
    {

        private string chefName;
        private string speciality;
        private decimal salary;
        private string mobNo;

        public decimal Salary
        {
            get => salary;
            set
            {
                if (value <= 100)
                    throw new InputException("Salary cannot be negative or zero.");
                if (!IsNumeric(value.ToString()))
                    throw new ArgumentException("Salary can only contain digits.");


                salary = value;
            }
        }
        public string Speciality
        {
            get => speciality;
            set
            {
                if (string.IsNullOrEmpty(value))
                    throw new InputException("Speciality cannot be null or empty.");

                if (!IsAlphabetic(value))
                    throw new InputException("Speciality can only contain alphabets.");

                speciality = value;
            }
        }
        public string MobNo
        {
            get => mobNo;
          
           set {
                    if (User.IsValidateMobileNo(value)) { mobNo = value; }

                    else { Console.WriteLine(" please enter valid phone number "); }
                }
               
            
        }

        public string ChefName
        {
            get=>chefName;
            set
            {
                if (string.IsNullOrEmpty(value))
                    throw new InputException("Chef name cannot be null or empty.");

                if (!IsAlphabetic(value))
                    throw new InputException("Chef name can only contain alphabets.");

                chefName = value;
            }
        }

        private bool IsAlphabetic(string input)
        {
            return Regex.IsMatch(input, @"^[a-zA-Z]+$");
        }

        private bool IsNumeric(string input)
        {
            return Regex.IsMatch(input, @"^\d+$");
        }

        public Chef() { }

        public Chef(string chefName,string speciality,decimal salary,string mobno)
        {
            this.ChefName = chefName;
            this.Speciality = speciality;
            this.Salary = salary;
            this.MobNo = mobno;
        }
    }
}
