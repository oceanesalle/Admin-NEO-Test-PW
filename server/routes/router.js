import homeController from "../controllers/homeController.js";
import securityController from "../controllers/securityController.js";

export const setupRoutes = (app) => {
  app.use("/home", homeController);
  app.use("/security", securityController);
};