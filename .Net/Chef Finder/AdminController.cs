using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MiniProject
{
    public class AdminController
    {
        public AdminController() { }

       public static void AdminAuthe(DbConnection dbManager)
        {
            while (true)
            {
                Console.WriteLine("Hello Admin Please Login !!!");
                Console.WriteLine();
                Console.WriteLine("1. Admin Login");
                Console.WriteLine("2. User ");
                Console.WriteLine("3. Back");
                Console.WriteLine();
                Console.Write("Enter your choice: ");
                string choice = Console.ReadLine();
                Console.WriteLine("***************************************************************");

                switch (choice)
                {
                    case "1":
                        AdminLogin(dbManager);
                        break;
                    case "2":
                        UserController.UserAuth(dbManager);
                        break;
                    case "3":
                        Console.WriteLine("Goodbye!");
                        return;
                    default:
                        Console.WriteLine("Invalid choice!");
                        break;
                }
            }
        }
        public static void AdminLogin(DbConnection dbManager)
        {
            // Implement admin login functionality
            // Prompt for admin credentials, validate against the Admins table in the database
            // If login is successful, call AdminFunctionality()
            // Otherwise, display an error message and return to the main menu

            Console.Write("Enter admin username: ");
            string username = Console.ReadLine();
            Console.Write("Enter admin password: ");
            string password = Console.ReadLine();
            Admin admin = new Admin();
            admin.Name = username;
            admin.Password = password;
            if(admin.Name!=null && admin.Password!=null) {
                using (var connection = dbManager.GetConnection())
                {
                    string query = "SELECT COUNT(*) FROM Admins WHERE name = @username AND password = @password";
                    using (var command = new MySqlCommand(query, connection))
                    {
                        command.Parameters.AddWithValue("@username", username);
                        command.Parameters.AddWithValue("@password", password);

                        connection.Open();
                        int count = Convert.ToInt32(command.ExecuteScalar());

                        if (count > 0)
                        {
                            Console.WriteLine("---------------------------------------");
                            Console.WriteLine("Admin login successful.");
                            Console.WriteLine("---------------------------------------");

                            AdminFunctionality(dbManager);
                        }
                        else
                        {
                            Console.WriteLine("---------------------------------------");

                            Console.WriteLine("Invalid admin credentials.");
                            Console.WriteLine("---------------------------------------");

                        }
                    }
                }
            }

            else
            {
                AdminLogin(dbManager);
            }
            
        }




        public static void AdminFunctionality(DbConnection dbManager)
        {
            while (true)
            {
                Console.WriteLine("\nAdmin Functionality:");
                Console.WriteLine("1. Add Chef Details");
                Console.WriteLine("2. Delete Chef");
                Console.WriteLine("3. Update Chef Details");
                Console.WriteLine("4. Show Chef details");
                Console.WriteLine("5. Logout");
                Console.Write("Enter your choice: ");
                string choice = Console.ReadLine();

                switch (choice)
                {
                    case "1":
                        AddChefDetails(dbManager);
                        break;
                    case "2":
                        DeleteChef(dbManager);
                        break;
                    case "3":
                        UpdateChefDetails(dbManager);
                        break;
                    case "4":
                        ShowChef(dbManager);
                        break;
                    case "5":
                        return; // Logout
                    default:
                        Console.WriteLine("Invalid choice!");
                        break;
                }
            }
        }




        public static void AddChefDetails(DbConnection dbManager)
        {
            // Implement adding chef details functionality
            // Prompt for chef information (name, specialty, salary) and insert into the Chefs table
            // Handle any errors or exceptions that may occur
           Chef newchef = new Chef();
            try
            {


                Console.Write("Enter Chef Name: ");
            newchef.ChefName = Console.ReadLine();
            Console.Write("Enter Chef Specialty: ");
                newchef.Speciality = Console.ReadLine();
            Console.Write("Enter Chef Salary: ");
                newchef.Salary = Convert.ToDecimal(Console.ReadLine());
            Console.WriteLine("Enter Mobile number : ");
                newchef.MobNo = Console.ReadLine();
            
                //Chef newchef = new Chef(name, specialty, salary, mobno);


                using (var connection = dbManager.GetConnection())
                {
                    string query = "INSERT INTO Chefs (chef_name, speciality, salary,bookStatus,mobno) VALUES (@name, @specialty, @salary,false,@mobno)";
                    using (var command = new MySqlCommand(query, connection))
                    {
                        command.Parameters.AddWithValue("@name", newchef.ChefName);
                        command.Parameters.AddWithValue("@specialty", newchef.Speciality);
                        command.Parameters.AddWithValue("@salary", newchef.Salary);
                        command.Parameters.AddWithValue("@mobno", newchef.MobNo);

                        connection.Open();
                        int rowsAffected = command.ExecuteNonQuery();
                        if (rowsAffected > 0)
                        {
                            Console.WriteLine("---------------------------------------");
                            Console.WriteLine("Chef details added successfully.");

                            Console.WriteLine("---------------------------------------");

                        }
                        else {
                            Console.WriteLine("---------------------------------------");

                            Console.WriteLine("Failed to add Chef details.");
                            Console.WriteLine("---------------------------------------");

                        }
                    }
                }

            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
}


        // Implement DeleteChef, UpdateChefDetails, and other admin functionalities similarly

        public static void UpdateChefDetails(DbConnection dbManager)
        {
            try
            {
                Chef newchef= new Chef();
                Console.Write("Enter Chef ID to update: ");
                int chefId = Convert.ToInt32(Console.ReadLine());
                Console.Write("Enter new Chef Name: ");
                newchef.ChefName = Console.ReadLine();
                Console.Write("Enter new Chef Specialty: ");
                newchef.Speciality = Console.ReadLine();
                Console.Write("Enter new Chef Salary: ");
                newchef.Salary = Convert.ToDecimal(Console.ReadLine());
                Console.WriteLine("Enter Mobile number : ");
                newchef.MobNo = Console.ReadLine();

                using (var connection = dbManager.GetConnection())
                {
                    string query = "UPDATE Chefs SET chef_name = @name, speciality = @specialty, salary = @salary, mobno= @mobno WHERE id = @chefId";
                    using (var command = new MySqlCommand(query, connection))
                    {
                        command.Parameters.AddWithValue("@chefId", chefId);
                        command.Parameters.AddWithValue("@name", newchef.ChefName);
                        command.Parameters.AddWithValue("@specialty", newchef.Speciality);
                        command.Parameters.AddWithValue("@salary", newchef.Salary);
                        command.Parameters.AddWithValue("@mobno", newchef.MobNo);

                        connection.Open();
                        int rowsAffected = command.ExecuteNonQuery();
                        if (rowsAffected > 0)
                        {
                            Console.WriteLine("---------------------------------------");

                            Console.WriteLine("Chef details updated successfully.");
                            Console.WriteLine("---------------------------------------");
                        }
                        else
                        {
                            Console.WriteLine("---------------------------------------");

                            Console.WriteLine("Failed to update Chef details.");
                            Console.WriteLine("---------------------------------------");

                        }
                    }
                }
            }
            catch (Exception ex) { Console.WriteLine(ex.Message); }

            }


        public static void DeleteChef(DbConnection dbManager)
        {
            Console.Write("Enter Chef ID to delete: ");
            int chefId = Convert.ToInt32(Console.ReadLine());

            using (var connection = dbManager.GetConnection())
            {
                string query = "DELETE FROM Chefs WHERE id = @chefId";
                using (var command = new MySqlCommand(query, connection))
                {
                    command.Parameters.AddWithValue("@chefId", chefId);

                    connection.Open();
                    int rowsAffected = command.ExecuteNonQuery();
                    if (rowsAffected > 0)
                    {
                        Console.WriteLine("---------------------------------------");

                        Console.WriteLine("Chef deleted successfully.");
                        Console.WriteLine("---------------------------------------");

                    }
                    else
                    {
                        Console.WriteLine("---------------------------------------");

                        Console.WriteLine("Failed to delete Chef.");
                        Console.WriteLine("---------------------------------------");

                    }
                }
            }
        }



        public static void ShowChef(DbConnection dbManager)
        {
            Console.WriteLine("Availabale chefs...");

            using (var connection = dbManager.GetConnection())
            {
                string query = "SELECT * FROM Chefs";
                using (var command = new MySqlCommand(query, connection))
                {
                    Console.WriteLine(" ---------------------------------------------------------------------");
                    Console.WriteLine(String.Format("|{0,5}|{1,15}|{2,9}|{3,10}|{4,15}|{5,10}|", "ID", "Chef Name", "Salary", "Specialty", "Booking Status", "Mobile No."));
                    Console.WriteLine(" ---------------------------------------------------------------------");
                   connection.Open();
                    using (var reader = command.ExecuteReader())
                    {
                        if (reader.HasRows)
                        {
                            while (reader.Read())
                            {
                                int chefId = reader.GetInt32("id");
                                string chefName = reader.GetString("chef_name");
                                string specl = reader.GetString("speciality");
                                decimal chefSalary = reader.GetDecimal("salary");
                                Boolean bookStatus = reader.GetBoolean("bookStatus");
                                string mobno = reader.GetString("mobno");
                              Console.WriteLine(String.Format("|{0,5}|{1,15}|{2,9}|{3,10}|{4,15}|{5,10}|", chefId, chefName, chefSalary, specl,bookStatus,mobno));
                                Console.WriteLine(" ---------------------------------------------------------------------");

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

    }
}
