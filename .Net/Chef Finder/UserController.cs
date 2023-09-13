using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MiniProject
{
    public class UserController
    {
        public UserController() { }

        public static void UserAuth(DbConnection dbManager)
        {
            try {
                while (true)
                {
                    Console.WriteLine("Hello User Please Login/Register !!!");
                    Console.WriteLine();
                    Console.WriteLine("1. User Login");
                    Console.WriteLine("2. Registration ");
                    Console.WriteLine("3. Admin");
                    Console.WriteLine("4. Back");
                    Console.WriteLine();
                    Console.Write("Enter your choice: ");
                    string choice = Console.ReadLine();
                    Console.WriteLine("***************************************************************");

                    switch (choice)
                    {
                        case "1":
                            UserLogin(dbManager);
                            break;
                        case "2":
                            UserRegistration(dbManager);
                            break;
                        case "3":
                            AdminController.AdminAuthe(dbManager);
                            break;
                        case "4":
                            Console.WriteLine("Goodbye!");
                            return;
                        default:
                            Console.WriteLine("Invalid choice!");
                            break;
                    }
                }
            }
            catch (InputException e)
            {
                Console.WriteLine(e.Message);
            }
           
        }


        public static void UserRegistration(DbConnection dbManager)
        {
            User newUser= new User();
            Console.Write("Enter user username: ");
            string username = Console.ReadLine();
            Console.Write("Enter user password: ");
            string password = Console.ReadLine();
            newUser.Name = username;
            newUser.Password = password;
            if(newUser.Name!=null && newUser.Password!=null)
            {
                using (var connection = dbManager.GetConnection())
                {
                    string query = "SELECT COUNT(*) FROM Users WHERE name = @username AND password = @password";
                    using (var command = new MySqlCommand(query, connection))
                    {
                        command.Parameters.AddWithValue("@username", username);
                        command.Parameters.AddWithValue("@password", password);

                        connection.Open();
                        int count = Convert.ToInt32(command.ExecuteScalar());

                        if (count > 0)
                        {
                            throw new InputException("User Already Exists Please Try again!!");

                        }
                        else
                        {
                            //name,email,address,mobno,password

                            Console.WriteLine("Enter Email : ");
                            string email = Console.ReadLine();
                            Console.WriteLine("Enter Address : ");
                            string address = Console.ReadLine();
                            Console.WriteLine("Enter Mobile no : ");
                            string mobNo = Console.ReadLine();

                            newUser.Address = address;
                            newUser.MobileNo = mobNo;
                            newUser.Email = email;
                            
                            if(newUser.Address != null && newUser.MobileNo!=null && newUser.Email != null)
                            {
                                //using (var connection = dbManager.GetConnection())
                                //{
                                query = "INSERT INTO Users (name,password,email,address,mobno) VALUES (@username, @password,@email,@address,@mobno)";
                                using (var insCommand = new MySqlCommand(query, connection))
                                {
                                    insCommand.Parameters.AddWithValue("@username", username);
                                    insCommand.Parameters.AddWithValue("@password", password);
                                    insCommand.Parameters.AddWithValue("@email", email);
                                    insCommand.Parameters.AddWithValue("@address", address);
                                    insCommand.Parameters.AddWithValue("@mobno", mobNo);

                                    //connection.Open();
                                    int rowsAffected = insCommand.ExecuteNonQuery();
                                    if (rowsAffected > 0)
                                    {
                                        Console.WriteLine("---------------------------------------");

                                        Console.WriteLine("User registration successful.");
                                        Console.WriteLine("---------------------------------------");
                                    }
                                    else
                                        throw new InputException("Failed To Register please try again!!");
                                }
                                //}
                            }

                            else
                            {
                                UserRegistration(dbManager);
                            }
                        }
                    }
                }
            }
            else
            {
                UserRegistration(dbManager);
            }
        }


        public static void UserLogin(DbConnection dbManager)
        {
            // Implement user login functionality
            // Prompt for user credentials, validate against the Users table in the database
            // If login is successful, call UserFunctionality()
            // Otherwise, display an error message and return to the main menu

            Console.Write("Enter user username: ");
            string username = Console.ReadLine();
            Console.Write("Enter user password: ");
            string password = Console.ReadLine();

            using (var connection = dbManager.GetConnection())
            {
                string query = "SELECT COUNT(*) FROM Users WHERE name = @username AND password = @password";
                using (var command = new MySqlCommand(query, connection))
                {
                    command.Parameters.AddWithValue("@username", username);
                    command.Parameters.AddWithValue("@password", password);

                    connection.Open();
                    int count = Convert.ToInt32(command.ExecuteScalar());

                    if (count > 0)
                    {
                        Console.WriteLine("---------------------------------------");

                        Console.WriteLine("User login successful.");
                        Console.WriteLine("---------------------------------------");
                        UserFunctionality(dbManager);
                    }
                    else
                    {
                        Console.WriteLine("---------------------------------------");

                        Console.WriteLine("Invalid user credentials.");
                        Console.WriteLine("---------------------------------------");
                    }
                }
            }
        }

        public static void UserFunctionality(DbConnection dbManager)
        {
            while (true)
            {
                Console.WriteLine("\nUser Functionality:");

                Console.WriteLine("1. View Chefs by Specialty");
                Console.WriteLine("2. Show Chef list");
                Console.WriteLine("3. Book a Chef");
                Console.WriteLine("4. Logout");
                Console.Write("Enter your choice: ");
                string choice = Console.ReadLine();

                switch (choice)
                {
                    case "1":
                        ViewChefsBySpecialty(dbManager);
                        break;
                    case "2":
                        AdminController.ShowChef(dbManager);
                        break;
                    case "3":BookChef(dbManager);
                       
                        break;
                    case "4":
                        return; // Logout
                    default:
                        Console.WriteLine("Invalid choice!");
                        break;
                }
            }
        }

        public static void ViewChefsBySpecialty(DbConnection dbManager)
        {
           // try
            {
                Console.Write("Enter Chef Specialty: ");
                string specialty = Console.ReadLine();
                Chef chef = new Chef();
                chef.Speciality = specialty;
                using (var connection = dbManager.GetConnection())
                {
                    string query = "SELECT * FROM Chefs WHERE speciality = @specialty AND bookStatus = 0";
                    using (var command = new MySqlCommand(query, connection))
                    {
                        command.Parameters.AddWithValue("@specialty", specialty);

                        connection.Open();
                        using (var reader = command.ExecuteReader())
                        {
                            if (reader.HasRows)
                            {
                                Console.WriteLine("\nAvailable Chefs with Specialty: " + specialty);
                                Console.WriteLine("Availabale chefs...");
                                Console.WriteLine(" ------------------------------------------------------");
                                Console.WriteLine(String.Format("|{0,5}|{1,15}|{2,9}|{3,10}|{4,10}|", "ID", "Chef Name", "Salary", "Specialty", "Mobile No."));
                                Console.WriteLine(" ------------------------------------------------------");

                                while (reader.Read())
                                {
                                    int chefId = reader.GetInt32("id");
                                    string chefName = reader.GetString("chef_name");
                                    string specl = reader.GetString("speciality");
                                    decimal chefSalary = reader.GetDecimal("salary");
                                    string mobno = reader.GetString("mobno");
                                    Console.WriteLine(String.Format("|{0,5}|{1,15}|{2,9}|{3,10}|{4,10}|", chefId, chefName, chefSalary, specl, mobno));
                                    Console.WriteLine(" -------------------------------------------------------");

                                    //Console.WriteLine($"Chef ID: {chefId}, Chef Name: {chefName}, Salary: {chefSalary}");
                                }
                            }
                            else
                            {
                                Console.WriteLine("---------------------------------------");

                                Console.WriteLine("No chefs available with the given specialty.");
                                Console.WriteLine("---------------------------------------");
                            }
                        }
                    }
                }

            }
           // catch (Exception ex)
            {
             //   Console.WriteLine(ex.Message);
            }
       }

        public static void BookChef(DbConnection dbManager)
        {
            Console.Write("Enter Chef ID to book: ");
            int chefId = Convert.ToInt32(Console.ReadLine());

            using (var connection = dbManager.GetConnection())
            {
                string query = "UPDATE Chefs SET bookStatus = 1 WHERE id = @chefId AND bookStatus = 0";
                using (var command = new MySqlCommand(query, connection))
                {
                    command.Parameters.AddWithValue("@chefId", chefId);

                    connection.Open();
                    int rowsAffected = command.ExecuteNonQuery();
                    if (rowsAffected > 0)
                    {
                        Console.WriteLine("---------------------------------------");

                        Console.WriteLine("Chef booked successfully.");
                        Console.WriteLine("---------------------------------------");
                    }
                    else
                    {
                        Console.WriteLine("---------------------------------------");

                        Console.WriteLine("Failed to book Chef. Either chef does not exist or already booked by someone else.");
                        Console.WriteLine("---------------------------------------");
                    }
                }
            }
        }



    }
}
