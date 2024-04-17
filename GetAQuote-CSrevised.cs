using System;
using System.Collections.Generic; 
					
public class Program
{
	/* Quotes */
	static Dictionary<string, string> quote_dict = new Dictionary<string, string>(){
		{"no","No."},
		{"yes","Yes."},
		{"agree","That makes two of us."},
		{"disagree","Who has taught you these lies?"},
		{"maybe","Were it so easy."}
	};
	
	/* Repository */
	static string getQuote(string key){
		return quote_dict[key];
	}
	
	static List<string> getKeys(){
	    List<string> dict_keys = new List<string>(quote_dict.Keys);
	    return dict_keys;
	}
	
	/* Service */
	static string selectQuote(string key){
	    return getQuote(key);
	}
	
	static string randomQuote(){
	    Random rand = new Random();
	    List<string> list_key = getKeys();
	    string key = list_key[rand.Next(list_key.Count)];
	    
	    return getQuote(key);
	}
	
	public static void Main()
	{
		Console.WriteLine(selectQuote("no"));
		Console.WriteLine(randomQuote());
	}
}
