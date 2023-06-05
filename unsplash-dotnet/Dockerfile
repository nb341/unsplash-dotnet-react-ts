# FROM mcr.microsoft.com/dotnet/sdk:6.0
# WORKDIR /App
# RUN dotnet new tool-manifest
# RUN dotnet tool install --global dotnet-ef --version 6.*
# # Copy everything
# COPY . ./
# # Restore as distinct layers
# RUN dotnet tool restore
# RUN dotnet build
# RUN dotnet ef migrations add initial
# RUN dotnet ef database update initial
# RUN dotnet restore
# # Build and publish a release
# RUN dotnet dev-certs https --trust
# EXPOSE 7170
# ENTRYPOINT dotnet watch run  --urls=https://+:7170 --project unsplash-dotnet.csproj
