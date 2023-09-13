using MySql.Data.MySqlClient;

namespace MiniProject
{
    public class Program
    {
        public static DbConnection dbManager = new DbConnection("localhost", "dotnet", "Harshada", "cdac");
        static void Main(string[] args)
        {
            
            welcomeMenu();           
        }

        static void welcomeMenu()
        {
            while (true)
            {
                Console.WriteLine("----------------------------------------------------------");
                Console.WriteLine("Welcome to Chef Finder and Salary Management System!");
                Console.WriteLine("----------------------------------------------------------");
                Console.WriteLine("Choose the role");
                Console.WriteLine("1. Admin ");
                Console.WriteLine("2. User ");
                Console.WriteLine("3. Exit");
                Console.WriteLine();
                Console.Write("Enter your choice: ");
                string choice = Console.ReadLine();

                Console.WriteLine("***************************************************************");
                switch (choice)
                {
                    case "1":
                        AdminController.AdminAuthe(dbManager);
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

       
        
        
           
       
        
    }
}



























//    static void AdminRegistration()
//{
//    Console.Write("Enter admin username: ");
//    string username = Console.ReadLine();
//    Console.Write("Enter admin password: ");
//    string password = Console.ReadLine();

//    using (var connection = dbManager.GetConnection())
//    {
//        string query = "INSERT INTO Admins (username, password) VALUES (@username, @password)";
//        using (var command = new MySqlCommand(query, connection))
//        {
//            command.Parameters.AddWithValue("@username", username);
//            command.Parameters.AddWithValue("@password", password);

//            connection.Open();
//            int rowsAffected = command.ExecuteNonQuery();
//            if (rowsAffected > 0)
//                Console.WriteLine("Admin registration successful.");
//            else
//                Console.WriteLine("Failed to register admin.");
//        }
//    }
//}