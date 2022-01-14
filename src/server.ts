import "reflect-metadata";
import { createConnection } from "typeorm";
import express from "express";
import { routes } from "./routes";

createConnection()
  .then(async (connection) => {
    // Create a new express application instance
    const app = express();

    // Call midlewares
    // app.use(cors());
    // app.use(helmet());
    // app.use(bodyParser.json());

    //Set all routes from routes folder
    app.use(express.json());
    app.use(routes);

    app.listen(3000, () => {
      console.log("Server is running!");
    });
  })
  .catch((error) => console.log(error));
