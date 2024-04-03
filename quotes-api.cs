using System;
using System.Collections.Generic; 
					
public class Program
{
	/* Quotes */
	Dictionary<string, string> quote_dict = new Dictionary<string, string>(){
		{"no","No."},
		{"yes","Yes."},
		{"agree","That makes two of us."},
		{"disagree","Who has taught you these lies?"},
		{"maybe","Were it so easy."}
	};
	
	/* Repository */
	public string getQuote(int key){
		//string quote = quote_dict.at;
		return "";
	}
	
	public string getQuote(string key){
		string quote = quote_dict[key];
		return quote;
	}
	
	/* Service */
	public void Main()
	{
		Console.WriteLine("Hello World");
		Console.WriteLine(getQuote("maybe"));
	}
}
