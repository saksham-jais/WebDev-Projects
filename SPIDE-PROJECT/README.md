# CivicFlow Municipal Management System (SPIDE-PROJECT)

![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)

**CivicFlow** is a robust, full-stack application designed to modernize municipal administration. It provides a centralized platform for citizens to access E-Services, allows officials to manage updates, and facilitates field surveyors in their daily operations.

**🚀 Live Demo:** [https://spide-project.vercel.app/](https://spide-project.vercel.app/)

## ✨ Key Features
- **Role-Based Access Control (RBAC):** Secure authentication and authorization for Citizens, Staff, and Admins.
- **E-Services Portal:** Easily accessible digital services for the public.
- **Surveyor & Ward Management:** Assign and track surveyors across different city zones and wards.
- **Public Directory:** A transparent directory of municipal officials and their contact information.
- **Audit Logging:** Comprehensive tracking of administrative actions for security and compliance.

## 🛠️ Tech Stack
- **Frontend:** Next.js / React
- **Backend:** Java Spring Boot
- **Database:** PostgreSQL (Supabase for demo, AWS RDS for production)
- **Containerization:** Docker & Docker Compose

## 🚀 Getting Started

### Prerequisites
- Docker & Docker Compose
- Node.js & npm (for Frontend)
- Java 17+ & Maven (for Backend)

### Local Database Setup
Run the following command to spin up the local PostgreSQL database using Docker:
```bash
docker-compose up -d
```

### Deployment Strategy
We utilize a multi-phase deployment approach:
- **Phase 1 (Demo/Client Review):** Frontend hosted on Vercel, Database on Supabase.
- **Phase 2 (Production):** Backend migrated to AWS Elastic Beanstalk/ECS, Database on Amazon RDS, with STQC/GIGW security audits.

For detailed deployment instructions, refer to the [Demo Deployment Guide](./demo_deployment_guide.md).