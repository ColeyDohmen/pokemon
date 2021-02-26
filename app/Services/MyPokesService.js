import { ProxyState } from "../AppState.js";
import Poke from "../Models/Poke.js";
import { myPokeApi } from "./AxiosService.js"

class MyPokesService {
constructor(){
    console.log('mypokes service');
    this.getMyPokes()
}

async getMyPokes(){
    try {
      let res = await myPokeApi.get("")
      console.log(res)
      ProxyState.myPokes = res.data.map(p => new Poke(p))
      console.log(ProxyState.myPokes)
    } catch (error) {
      console.error(error)
    }
  }

  async catchPoke(){
    try {
        let res = await myPokeApi.post("", ProxyState.currentPoke)
        console.log(res)
        this.getMyPokes()
        
      } catch (error) {
        console.error(error)
      }
}

setCurrentPoke(name){
    let currentPoke = ProxyState.myPokes.find(p=>p.name==name)
    ProxyState.currentPoke = currentPoke
}
  addValue() {
    ProxyState.values = [...ProxyState.values, new Poke({ title: Math.random() })]
  }
}

export const myPokesService = new MyPokesService();

