import { Router } from "express";
import { highlightsProducts } from "../constants/index.mjs";

const router = Router(); //Router function is used to create a new router object. This object is an instance of the express.Router class, which provides methods for routing HTTP requests to specific handler functions.

router.get("/highlights", (req, res) => {
  res.send(highlightsProducts);
});

export default router;
