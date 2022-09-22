using Microsoft.EntityFrameworkCore;
using unsplash_dotnet.Data;

var  MyAllowSpecificOrigins = "_myAllowSpecificOrigins";
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddCors(options =>
{
options.AddPolicy("MyAllowedOrigins",
    policy =>
    {
        policy.WithOrigins("http://localhost:3000") // note the port is included 
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});
builder.Services.AddControllers();
builder.Services.AddDbContext<DataContext>(options=>
    {options.UseSqlServer(builder.Configuration.
    GetConnectionString("DefaultConnection"));}
 );
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors("MyAllowedOrigins");

app.UseAuthorization();

app.MapControllers();

app.Run();
