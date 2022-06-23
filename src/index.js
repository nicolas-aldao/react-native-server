import app from "./app";

const port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log("app running on port 8080");
});
