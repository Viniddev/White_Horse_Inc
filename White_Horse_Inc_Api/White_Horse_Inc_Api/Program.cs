using White_Horse_Inc_Api.Commom;
using White_Horse_Inc_Core;

var builder = WebApplication.CreateBuilder(args);

builder.AddConfiguration();

builder.AddDocumentation();

builder.AddCrossOrigin();

builder.AddDataBaseContext();

builder.AddEndpointInfrastructure();

builder.AddMethodsInfrastructure();

//--------------------------------------------------------------//

var app = builder.Build();

app.AddAppSecurity();

if (app.Environment.IsDevelopment())
    app.AddSwaggerDevExtensions();

app.UseCors(Configuration.CorsPolicyName);

app.AddAppInfrastructure();

app.Run();


