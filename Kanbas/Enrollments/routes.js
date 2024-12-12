import * as enrollmentsDao from "./dao.js";

export default function EnrollmentsRoutes(app) {
  // Enroll a user in a course
  app.post("/api/enrollments", async (req, res) => {
    const { userId, courseId } = req.body;

    if (!userId || !courseId) {
      return res.status(400).json({ error: "User ID and Course ID are required" });
    }

    try {
      enrollmentsDao.enrollUserInCourse(userId, courseId);
      res.status(201).json({ message: "User enrolled successfully" });
    } catch (error) {
      console.error("Error enrolling user:", error);
      res.status(500).json({ error: "Failed to enroll user" });
    }
  });

}
