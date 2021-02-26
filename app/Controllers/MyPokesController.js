import { ProxyState } from "../AppState.js";
import { myPokesService } from "../Services/MyPokesService.js";


//Private
function _drawMyPokes() {
  let pokes = ProxyState.myPokes;
  let template = ''
  pokes.forEach(p=> template += `<li onclick="app.myPokesController.setCurrentPoke('${p.name}')" > ${p.name} </li>`)
  document.getElementById("my-pokes").innerHTML =template;
}

//Public
export default class MyPokesController {
  constructor() {
    
        console.log('mypokes controller');
    
    ProxyState.on("myPokes", _drawMyPokes);
    _drawMyPokes()
  }

  catchPoke(){
      myPokesService.catchPoke()
  }

  setCurrentPoke(name){
      myPokesService.setCurrentPoke(name)
  }

}
