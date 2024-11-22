const assignment = {
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  };
  
  const module = {
    id: "CS4550",
    name: "Web Development",
    description: "Learn the basics of HTML, CSS, and JavaScript",
    course: "Computer Science",
  };
  
  export default function WorkingWithObjects(app) {
    // Retrieve the assignment object
    app.get("/lab5/assignment", (req, res) => {
      res.json(assignment);
    });
  
    // Retrieve the title of the assignment
    app.get("/lab5/assignment/title", (req, res) => {
      res.json(assignment.title);
    });
  
    // Update the title of the assignment
    app.get("/lab5/assignment/title/:newTitle", (req, res) => {
      const { newTitle } = req.params;
      assignment.title = newTitle;
      res.json(assignment);
    });
  
    // Update the score of the assignment
    app.get("/lab5/assignment/score/:newScore", (req, res) => {
      const { newScore } = req.params;
      assignment.score = parseInt(newScore);
      res.json(assignment);
    });
  
    // Update the completed status of the assignment
    app.get("/lab5/assignment/completed/:status", (req, res) => {
      const { status } = req.params;
      assignment.completed = status === "true";
      res.json(assignment);
    });
  
    // Retrieve the module object
    app.get("/lab5/module", (req, res) => {
      res.json(module);
    });
  
    // Retrieve the name of the module
    app.get("/lab5/module/name", (req, res) => {
      res.json(module.name);
    });
  
    // Update the name of the module
    app.get("/lab5/module/name/:newName", (req, res) => {
      const { newName } = req.params;
      module.name = newName;
      res.json(module);
    });
  
    // Update the description of the module
    app.get("/lab5/module/description/:newDescription", (req, res) => {
      const { newDescription } = req.params;
      module.description = newDescription;
      res.json(module);
    });
  }
  