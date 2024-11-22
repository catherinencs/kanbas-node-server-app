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

  // Unenroll a user from a course
  app.delete("/api/enrollments", async (req, res) => {
    const { userId, courseId } = req.body;

    if (!userId || !courseId) {
      return res.status(400).json({ error: "User ID and Course ID are required" });
    }

    try {
      const unenrolled = enrollmentsDao.unenrollUserFromCourse(userId, courseId);
      if (unenrolled) {
        res.status(200).json({ message: "User unenrolled successfully" });
      } else {
        res.status(404).json({ error: "Enrollment not found" });
      }
    } catch (error) {
      console.error("Error unenrolling user:", error);
      res.status(500).json({ error: "Failed to unenroll user" });
    }
  });
}
