export default class Poke {
    constructor(data) {
        this.name = data.name
        this.img = data.sprites.versions["generation-v"]["black-white"].animated.back_default
        this.abilities = data.abilities[0].ability.name
        this.height = data.height
        this.moves = data.moves
        this.weight = data.weight 
        this.stats = data.stats
        this.types = data.types[0].type.name
        
    }
    // other.dream_world.front_default
    get Template() {

        return /*html*/`
        <div class="card p-2 value">
            <div class="card-body">
            <h3 class="card-title">Pokemon: ${this.name}</h3>
            <img src="${this.img}"/>
        
            <p class="card-text">Height: ${this.height}</p>
            <p class="card-text">Weight: ${this.weight}</p>
            <p class="card-text">Type: ${this.types}</p>
            <p class="card-text">Ability: ${this.abilities}</p>
            ${this.CatchButton}
           
        </div>
        `
    }
    
    
    get CatchButton(){
            return `<button class="btn btn-primary" onclick="app.myPokesController.catchPoke()">Throw Pokeball at Unsuspecting Pokemon</button>`
    }
}