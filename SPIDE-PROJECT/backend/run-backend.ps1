# Run Backend Locally with Environment Variables
$env:SPRING_DATASOURCE_URL="jdbc:postgresql://aws-1-ap-northeast-1.pooler.supabase.com:6543/postgres?sslmode=require&prepareThreshold=0"
$env:SPRING_DATASOURCE_USERNAME="postgres.umcpdyvtfnwfyryueobi"
# Replace with your actual password
$env:SPRING_DATASOURCE_PASSWORD="TYWdDnqdewIALafo"
$env:JWT_SECRET="MDEyMzQ1Njc4OUFCQ0RFRjAxMjM0NTY3ODlBQkNERUY="
$env:ENCRYPTION_KEY="my-super-secret-key-123456789012"
$env:SUPER_ADMIN_USERNAME="admin@example.com"
$env:SUPER_ADMIN_PASSWORD="adminspide"
$env:SUPER_ADMIN_EMAIL="admin@example.com"
$env:CLOUDINARY_CLOUD_NAME="dt83ijcjr"
$env:CLOUDINARY_API_KEY="444855198116939"
$env:CLOUDINARY_API_SECRET="mEYCsThWYBh9_sUzNJVJvKUMAgQ"

.\mvnw spring-boot:run
