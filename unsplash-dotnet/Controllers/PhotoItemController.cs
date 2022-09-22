using System.Linq;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using unsplash_dotnet.Data;
using unsplash_dotnet.Models;

namespace unsplash_dotnet.Controllers;
   
    [Route("api/[controller]")]
    [ApiController]
public class PhotoItemController : ControllerBase
{
    private readonly DataContext _context;

    public PhotoItemController(DataContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<List<PhotoItem>>> Get()
    {
        return Ok(await _context.PhotoItems.OrderByDescending(p=>p.Id).ToListAsync());    
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<List<PhotoItem>>> Get(int id)
    {
        var photo = await _context.PhotoItems.FindAsync(id);
        if(photo==null)
        {
            return BadRequest("Photo not found");
        }
        return Ok(photo);    
    }

    [HttpPost]
    public async Task<ActionResult<PhotoItem>> CreatePhotoItem(PhotoItem photoItem)
    {
        if(photoItem.Label.Length <= 0 && photoItem.Link.Length<=0 ){
            return BadRequest("Fields can not be empty");
        }
        _context.PhotoItems.Add(photoItem);
        await _context.SaveChangesAsync();
        return CreatedAtAction(
            nameof(Get),
            new {id = photoItem.Id},
            photoItem
        );
    }
}