import * as assignmentsDao from "./dao.js";

export default function AssignmentRoutes(app) {
  // Delete an assignment
  app.delete("/api/assignments/:assignmentId", async (req, res) => {
    const { assignmentId } = req.params;
    try {
      assignmentsDao.deleteAssignment(assignmentId);
      res.sendStatus(200);
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Failed to delete assignment" });
    }
  });

  // Update an assignment
  app.put("/api/assignments/:assignmentId", async (req, res) => {
    const { assignmentId } = req.params;
    const assignmentUpdates = req.body;
    try {
      const updatedAssignment = assignmentsDao.updateAssignment(
        assignmentId,
        assignmentUpdates
      );
      res.json(updatedAssignment);
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Failed to update assignment" });
    }
  });
}
