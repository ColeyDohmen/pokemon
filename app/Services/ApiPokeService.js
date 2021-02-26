import { ProxyState } from "../AppState.js";
import Poke from "../Models/Poke.js";
import { pokeApi } from "./AxiosService.js"

class ApiPokeService {

  constructor(){
    console.log('apipoke service');
    this.getApiPokemon()
  }

  async getApiPokemon(){
    try {
      const res = await pokeApi.get("pokemon?limit=1008")
      console.log(res)
      ProxyState.apiPoke = res.data.results
    }catch(error){
      console.error(error)
    }
  }


  async pickCurrentPoke(name){
    try {
      let res = await pokeApi.get('pokemon/'+name)
      console.log(res)
    ProxyState.currentPoke = new Poke(res.data)
    } catch (error) {
      console.error(error)
    }
  }

  // addValue() {
  //   ProxyState.values = [...ProxyState.values, new Poke({ title: Math.random() })]
  // }
}

export const apiPokeService = new ApiPokeService();

