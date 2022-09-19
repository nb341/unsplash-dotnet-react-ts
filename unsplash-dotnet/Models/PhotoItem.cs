using System.ComponentModel.DataAnnotations;

namespace unsplash_dotnet.Models;
public class PhotoItem{
    public int Id {get; set;}
    public string Label {get; set;} = "";
  
    public string Link {get; set;} = "";
}