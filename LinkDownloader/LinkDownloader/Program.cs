using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using System.IO;
using HtmlAgilityPack;
using System.Text.RegularExpressions;

namespace LinkDownloader
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] lines = File.ReadAllLines("input.txt");

            int sum = 0;
            for(int i = 0; i < lines.Length; i++)
            {
                var link = lines[i];
                string[] parts = link.Split(new string[] { ", " }, StringSplitOptions.None);
                int linkCount = Download(parts[0], int.Parse(parts[1]), string.Format("output{0}.txt", i + 1));
                sum += linkCount;
            }   

            Console.WriteLine("Done, found {0} link!", sum );
            Console.ReadLine();
        }

        private static int Download(string link, int totalPages, string output)
        {
            string pattern = "http[s]?://www.fshare.vn/file/[A-Z0-9]+";
            Console.WriteLine("Link: {0}", link);
            WebClient client = new WebClient();
            string address = link;
            int sum = 0;
            int page = 1;

            var list = new HashSet<String>();
            do
            {
                string reply = client.DownloadString(address);

                Console.WriteLine("Processing page: {0}", page);
                var links = ExtractLink(reply, pattern);
                list.UnionWith(links);
                sum += list.Count;
                      
                page++;
                address = link + "page-" + page;                
            }
            while (page <= totalPages);

            Console.WriteLine();
            File.WriteAllLines(output, list);

            return sum;
        }

        private static HashSet<string> ExtractLink(string input, string pattern)
        {   
            
            Regex regex = new Regex(pattern);
            Match match = regex.Match(input);

            var list = new HashSet<String>();

            while (match.Success)
            {
                Console.WriteLine(match.Value);
                list.Add(match.Value);
                match = match.NextMatch();
                
            }

            return list;
        }
        
    }
}
