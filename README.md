# 🧠 Mentora – Your AI Career Coach

Mentora is an intelligent full-stack web application that helps users prepare for their careers through **AI-generated quizzes**, **personalized cover letters**, and **performance analytics** — all powered by the latest in generative AI and modern web technology.

Deployed seamlessly on **Vercel**, Mentora integrates **Next.js**, **Clerk**, **Prisma**, **Neon PostgreSQL**, and **Google Gemini AI** into a production-grade SaaS platform.

---

## 🚀 Live Demo
👉 **[Launch Mentora]((https://mentora-blush.vercel.app/))**

*(No sign-in required for recruiters; use demo credentials if necessary.)*

---

## ✨ Features

### 🎯 AI-Generated Quizzes
- Dynamically generates interview and skill quizzes using **Google Gemini 1.5 Pro**.
- Tailored to user’s **industry and skillset**.
- Scores and results automatically tracked and visualized.

### 📝 AI Cover Letter Generator
- Creates **personalized, context-aware cover letters** based on user profile and job role.
- Users can view, edit, and store generated letters within their account.

### 📊 Performance Analytics Dashboard
- Visualizes quiz performance trends using **Recharts**.
- Clean, interactive graphs displaying progress over time.

### 👤 Secure Authentication
- Seamless login and session management powered by **Clerk**.
- Each user’s data is isolated, private, and synced with **Neon PostgreSQL**.

### 💾 Persistent Data Storage
- User data, quizzes, and cover letters are stored in a **PostgreSQL** database.
- Managed through **Prisma ORM** for reliability and maintainability.

### 💡 Modern, Responsive UI
- Built with **Next.js 14 (App Router)** and **ShadCN/UI** components.
- Styled using **Tailwind CSS** for consistency and performance.
- Clean, professional design optimized for desktop and mobile.

---

## 🧰 Tech Stack

| Layer | Technology |
|-------|-------------|
| **Frontend Framework** | [Next.js 14 (App Router)](https://nextjs.org/) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) + [ShadCN/UI](https://ui.shadcn.com/) |
| **Authentication** | [Clerk](https://clerk.com/) |
| **Backend** | Next.js Server Actions (`"use server"`) |
| **Database** | [Neon PostgreSQL](https://neon.tech/) |
| **ORM** | [Prisma](https://www.prisma.io/) |
| **AI Integration** | [Google Generative AI (Gemini 1.5 Pro)](https://ai.google.dev/gemini-api) |
| **Data Visualization** | [Recharts](https://recharts.org/) |
| **Deployment** | [Vercel](https://vercel.com/) |
| **Version Control** | Git + GitHub |

---

## 🏗️ Project Architecture

```
app/
 ├── (auth)/                 # Clerk authentication routes
 ├── ai-cover-letter/        # Cover letter generator
 │   ├── new/                # Generate new letter
 │   └── _components/
 │       └── cover-letter-list.jsx
 ├── quiz/                   # Quiz generation and results
 │   ├── _components/
 │   │   ├── quiz-card.jsx
 │   │   └── PerformanceChart.jsx
 ├── layout.js               # Global layout
 └── page.js                 # Landing page

lib/
 ├── db.js                   # Prisma + Neon configuration
 └── actions/
     └── generateQuiz.js     # AI quiz generator (server action)
```

---



## 🔑 Environment Variables

Create a `.env.local` file in your root directory:

```
DATABASE_URL="your-neon-database-url"
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your-clerk-publishable-key"
CLERK_SECRET_KEY="your-clerk-secret-key"
GEMINI_API_KEY="your-google-gemini-api-key"
```

---

## ⚙️ Installation & Setup

```bash
# 1️⃣ Clone the repository
git clone https://github.com/UroojAshfa/Mentora.git
cd Mentora

# 2️⃣ Install dependencies
npm install

# 3️⃣ Run database migrations
npx prisma migrate dev

# 4️⃣ Start the development server
npm run dev
```

Your app will be running at **http://localhost:3000**

---

## 🧩 Key Highlights for Recruiters

✅ Demonstrates **end-to-end product thinking** — from backend architecture to frontend design.  
✅ Integrates **real AI (Gemini API)** in a meaningful, user-centric way.  
✅ Showcases **modern authentication and data management** best practices.  
✅ Production-ready **Next.js full-stack deployment** on Vercel.  
✅ Uses **Type-safe database operations** via Prisma ORM.  
✅ Polished, minimalist UI built with **ShadCN** and **Tailwind**.

---

## 🧠 Future Enhancements
- Resume analyzer for personalized skill feedback.
- Leaderboards and gamification for quiz engagement.
- Email export for AI-generated cover letters.
- Integration with LinkedIn Jobs API for auto-tailored applications.

---

## 💼 Author

**Urooj Ashfaq**  
📧 [urojashfaq8@gmail.com](mailto:urojashfaq8@gmail.com) 
💻 [GitHub](https://github.com/UroojAshfa)

---

> *Mentora bridges AI and career development — empowering job seekers with intelligent preparation, personalized insights, and data-driven growth.*
