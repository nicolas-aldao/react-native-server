import express from "express";
import tasksRoutes from "./routes/tasks";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";

import swaggerJsdoc from "swagger-jsdoc";
import swaggerUiExpress from "swagger-ui-express";
import { options } from "./swaggerOptions";

const specs = swaggerJsdoc(options);

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(tasksRoutes);
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "Content-Type",
    "Authorization"
  );
  next();
});

var corsOptions = {
  origin: "http://localhost:8080/",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.post("/tasks", cors(corsOptions), function (req, res, next) {
  res.json({ msg: "This is CORS-enabled for only example.com." });
});

app.use("/docs", swaggerUiExpress.serve, swaggerUiExpress.setup(specs));

export default app;
