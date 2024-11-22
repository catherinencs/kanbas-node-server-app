import * as modulesDao from "./dao.js";

export default function ModuleRoutes(app) {
  // Delete a module
  app.delete("/api/modules/:moduleId", async (req, res) => {
    const { moduleId } = req.params;
    try {
      const status = await modulesDao.deleteModule(moduleId);
      res.send(status);
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Failed to delete module" });
    }
  });

  // Update a module
  app.put("/api/modules/:moduleId", async (req, res) => {
    const { moduleId } = req.params;
    const moduleUpdates = req.body;
    try {
      const status = await modulesDao.updateModule(moduleId, moduleUpdates);
      res.send(status);
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Failed to update module" });
    }
  });
}
