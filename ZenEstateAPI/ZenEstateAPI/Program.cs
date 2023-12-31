
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using System;
using ZenEstateAPI.Data;
using ZenEstateAPI.Services.Interfaces;
using ZenEstateAPI.Services;

namespace ZenEstateAPI
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            builder.Services.AddCors(options =>
                  options.AddPolicy("AllowOrigin", builder =>
                  {
                      builder.WithOrigins(
                                "http://127.0.0.1:5173",
                                "http://127.0.0.1:5173/",
                                "http://localhost:5173",
                                "http://localhost:5173/",
                                "http://localhost")
                            .AllowAnyMethod()
                            .AllowAnyHeader()
                            .AllowCredentials();
                  })
                );

            // Add services to the container
            builder.Services.AddControllers();
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            builder.Services.AddDbContext<AppDbContext>(options =>
            {
                options.UseNpgsql(builder.Configuration.GetConnectionString("ZenEstateDb"));
            });

            builder.Services.AddScoped<IUserService, UserService>();
            builder.Services.AddScoped<IAuthService, AuthService>();
            builder.Services.AddScoped<IPropertyService, PropertyService>();
            builder.Services.AddScoped<IContractService, ContractService>();
            builder.Services.AddScoped<IContractListService, ContractListService>();


            builder.Services.AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            }).AddCookie(cookie =>
            {
                cookie.Cookie.Name = "token";

            }).AddJwtBearer(jwt =>
            {
                jwt.SaveToken = true;
                jwt.RequireHttpsMetadata = false;
                jwt.TokenValidationParameters = new TokenValidationParameters
                {
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("ryan gosling drive oooooooooooomg boiiiii look at him token btw")),
                    ValidateIssuer = false,
                    ValidateAudience = false,
                    ValidateLifetime = true,
                    ValidateIssuerSigningKey = true,
                };
            });

            builder.Services.AddAuthorization();

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseCors("AllowOrigin");

            app.UseAuthentication();

            app.UseAuthorization();

            app.MapControllers();

            app.Run();
        }
    }
}