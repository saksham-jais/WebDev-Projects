# Phase 1: Vercel & Supabase Demo Deployment

This guide outlines exactly how to deploy your municipal site for client review using a free and fast hosting strategy.

## 🗄️ Step 1: Set up Supabase (Database)

1.  **Project**: Create a new project on [Supabase](https://supabase.com).
2.  **Database**: Go to **Settings > Database**.
3.  **Connection**: Copy the **JDBC** connection string.
4.  **Backend Config**: Use this string in your [application.properties](file:///d:/Mega/Freelancing/SPIDE-PROJECT/backend/src/main/resources/application.properties) or as an environment variable when you host your Spring Boot backend (e.g., on Render, Fly.io, or AWS).

---

## 💻 Step 2: Deploy Frontend to Vercel

1.  **Repository**: Push your code to a Git provider (GitHub, GitLab, or Bitbucket).
2.  **Import**: Connect your repository to [Vercel](https://vercel.com).
3.  **Root Directory**: Set the root directory to `frontend`.
4.  **Environment Variables**: Add your backend API URL so the frontend knows where to fetch data:
    - `NEXT_PUBLIC_API_URL`: `https://your-backend-url.com/api/v1`

---

## 🛡️ Step 3: Deployment "Demo Mode" Security

While this is a demo, we still maintain high security:
- **HTTPS**: Vercel and Supabase provide automatic SSL/TLS.
- **JWT**: Your tokens remain valid across these services.
- **Encryption**: The backend will still encrypt all data going into Supabase.

---

## 🚀 Moving to Phase 2 (Production)

Once the client approves:
1.  **AWS Migration**: We will move the Spring Boot backend to **AWS Elastic Beanstalk** or **ECS**.
2.  **RDS Migration**: Move the data from Supabase to a private **Amazon RDS** instance if required by government compliance.
3.  **Security Audit**: Perform the STQC/GIGW audit on the production URL.
