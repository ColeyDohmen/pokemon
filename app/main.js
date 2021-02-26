import ApiPokeController from "./Controllers/ApiPokeController.js";
import MyPokesController from "./Controllers/MyPokesController.js";
import ValuesController from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();
  apiPokeController = new ApiPokeController();

  myPokesController = new MyPokesController();
  
}

window["app"] = new App();
