using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MiniProject
{
    public class Class1
    
        {
            public static int x = 10;
        }
        public class Class2 : Class1
        {
            public static int x = 20;
            static void Main(string[] args)
            {
                Console.WriteLine(x + ", " + Class1.x);
            }
        }
    }


