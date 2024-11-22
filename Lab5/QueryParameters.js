export default function QueryParameters(app) {
    app.get("/lab5/calculator", (req, res) => {
      const { a, b, operation } = req.query; 
      let result = 0;
  
      switch (operation) {
        case "add":
          result = parseInt(a) + parseInt(b); // addition
          break;
        case "subtract":
          result = parseInt(a) - parseInt(b); // subtraction
          break;
        case "multiply":
          result = parseInt(a) * parseInt(b); // multiplication
          break;
        case "divide":
          if (parseInt(b) === 0) {
            // handle division by zero
            res.status(400).send("Division by zero is not allowed");
            return;
          }
          result = parseInt(a) / parseInt(b); // division
          break;
        default:
          result = "Invalid operation"; 
      }
  
      res.send(result.toString());
    });
  }
  