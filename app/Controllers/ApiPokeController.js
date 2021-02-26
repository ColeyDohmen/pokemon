import { ProxyState } from "../AppState.js";
import { apiPokeService } from "../Services/ApiPokeService.js";


//Private
function _drawApiPoke() {
  let poke = ProxyState.apiPoke
  let template = ""
  console.log('apipoke controller');
  poke.forEach(p=> template += `<li onclick="app.apiPokeController.pickCurrentPoke('${p.name}')">${p.name}</li>`)
  document.getElementById("pokedex").innerHTML =template;
  
  
}

function _drawCurrentPoke(){
if(ProxyState.currentPoke){
  document.getElementById("current-poke").innerHTML = ProxyState.currentPoke.Template
}
else {
  document.getElementById("current-poke").innerHTML = ""
}

}
  // <button className="btn btn-info" onclick="app.valuesController.addValue()">Add Value</button>  
  // <div className="card-columns values">

//Public
export default class ApiPokeController {
  constructor() {
    ProxyState.on("apiPoke", _drawApiPoke)
    ProxyState.on("currentPoke", _drawCurrentPoke)
    _drawApiPoke()
  }


  pickCurrentPoke(index){
    console.log(index)
    apiPokeService.pickCurrentPoke(index)
  }

}
