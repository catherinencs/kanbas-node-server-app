export default function PathParameters(app) {
    // Addition route
    app.get("/lab5/add/:a/:b", (req, res) => {
      const { a, b } = req.params;
      const sum = parseInt(a) + parseInt(b);
      res.send(sum.toString());
    });
  
    // Subtraction route
    app.get("/lab5/subtract/:a/:b", (req, res) => {
      const { a, b } = req.params;
      const difference = parseInt(a) - parseInt(b);
      res.send(difference.toString());
    });
  
    // Multiplication route
    app.get("/lab5/multiply/:a/:b", (req, res) => {
      const { a, b } = req.params;
      const product = parseInt(a) * parseInt(b);
      res.send(product.toString());
    });
  
    // Division route
    app.get("/lab5/divide/:a/:b", (req, res) => {
      const { a, b } = req.params;
      if (parseInt(b) === 0) {
        res.status(400).send("Division by zero is not allowed");
      } else {
        const quotient = parseInt(a) / parseInt(b);
        res.send(quotient.toString());
      }
    });
  }
  