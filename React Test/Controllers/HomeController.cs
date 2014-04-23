using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace React_Test.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            IList<SecondLevel> data = new List<SecondLevel>
            {
                new SecondLevel
                {
                    id = 1,
                    visible = true,
                    length = new Random().Next(10)
                },
                new SecondLevel
                {
                    id = 2,
                    visible = false,
                    length = new Random().Next(10)
                },
                new SecondLevel
                {
                    id = 3,
                    visible = true,
                    length = new Random().Next(10)
                }
            };
            
            return View(data);
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }

    public class SecondLevel
    {
        public int id { get; set; }
        public bool visible { get; set; }
        public int length { get; set; }
    }
}