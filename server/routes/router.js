import homeController from "../controllers/homeController.js";
import securityController from "../controllers/securityController.js";
import recipeController from "../controllers/recipeController.js";

export const setupRoutes = (app) => {
  app.use("/home", homeController);
  app.use("/security", securityController);
  app.use("/recipes", recipeController);
};