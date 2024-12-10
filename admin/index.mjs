import express from "express";
import "dotenv/config"; //After importing we can load environment variables from a .env file into your Node.js project.
import cors from "cors"; //We use CORS in our application to allow web browsers to make requests to our server from a different origin.
import path from "path"; //The path module is a built-in Node.js module that provides utilities for working with file paths and directories.
import { fileURLToPath } from "url"; //The fileURLToPath function is a part of the url module in Node.js. Its primary purpose is to convert a file URL to a file path.
import { readdirSync } from "fs"; //readdirSync is a synchronous method from the fs (File System) module in Node.js that reads the contents of a directory.

const port = process.env.PORT || 8000;
const app = express();
app.use(cors());
app.use(express.json()); //app.use(express.json()) is a middleware function in Express.js that parses incoming requests with JSON payloads.

const __filename = fileURLToPath(import.meta.url);
// console.log(import.meta.url); //file:///D:/practice/React/Noor%20Mohammad/react-node-firebase-stripe/admin/index.mjs
// console.log(__filename); //D:\practice\React\Noor Mohammad\react-node-firebase-stripe\admin\index.mjs
const __dirname = path.dirname(__filename); //__dirname is a built-in variable in Node.js that returns the directory name of the current module. It's a crucial variable when working with file paths and directories.
// console.log(__dirname); //D:\practice\React\Noor Mohammad\react-node-firebase-stripe\admin

const routesPath = path.resolve(__dirname, "./routes"); //path.resolve() is a function that helps you create a complete, absolute path to a file or directory.
// console.log(routesPath); //D:\practice\React\Noor Mohammad\react-node-firebase-stripe\admin\routes
const routeFiles = readdirSync(routesPath);
// console.log(routeFiles); //['blogs.mjs','categories.mjs','checkout.mjs','highlights.mjs','products.mjs']
routeFiles.map(async (file) => {
  const routeModule = await import(`./routes/${file}`);
  app.use("/api", routeModule.default);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
