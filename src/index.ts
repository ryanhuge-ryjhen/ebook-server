import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("<h4>Welcome to my homepage</h4>");
});

const port = process.env.PORT || 8989;

app.listen(port, () =>
  console.log(`The application is running on port http://localhost:${port}`)
);
