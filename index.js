import session from "express-session";
import express from 'express';
import mongoose from "mongoose";
import "dotenv/config";
import Hello from "./Hello.js"
import Lab5 from "./Lab5/index.js";
import cors from "cors";
import UserRoutes from "./Kanbas/Users/routes.js";
import CourseRoutes from "./Kanbas/Courses/routes.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import AssignmentRoutes from "./Kanbas/Assignments/routes.js";
import EnrollmentsRoutes from "./Kanbas/Enrollments/routes.js";
import QuizRoutes from "./Kanbas/Quizzes/routes.js";
import AttemptsRoutes from "./Kanbas/Attempts/routes.js";
import "dotenv/config";



const CONNECTION_STRING = "mongodb+srv://catherinencs:123@kanbas.jyopw.mongodb.net/kanbas"
mongoose.connect(CONNECTION_STRING);

const app = express()
app.use(cors({
    credentials: true,
    origin: process.env.NETLIFY_URL || "http://localhost:3000",
  })
 );  
 const sessionOptions = {
    secret: process.env.SESSION_SECRET || "kanbas",
    resave: false,
    saveUninitialized: false,
  };
  if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
      sameSite: "none",
      secure: true,
      domain: process.env.NODE_SERVER_DOMAIN,
    };
  }
  app.use(session(sessionOptions));  
app.use(express.json());
Lab5(app);
Hello(app);
UserRoutes(app);
CourseRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);
EnrollmentsRoutes(app);
QuizRoutes(app);
AttemptsRoutes(app);
app.listen(process.env.PORT || 4000)