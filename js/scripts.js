var elPokemons = $_('.pokemons');

var createElementPokemon = function(pokemon) {

    var createElementPokemon = $_('#pokemon-card-template').content;

        var elNewPokemon = elPokemon

    return elNewPokemon;
    
    // var elNewPokemon = createElementFunc('li', 'pokemon col-md-3');

    // var elNewPokemonBox = createElementFunc('div', 'pokemon__card card border-0 mb-4 shadow-sm');
    
    // var elNewPokemonImg = createElementFunc('img', 'pokemon__img card-img-top');
    // elNewPokemonImg.src = pokemon.img;
    // elNewPokemonImg.alt = pokemon.name;
    // elNewPokemonImg.width = 300;
    // elNewPokemonImg.height = 200;
    
    // var elNewPokemonBody = createElementFunc('div', 'pokemon__card-body text-center card-body');
    
    // var elNewPokemonBodyName = createElementFunc('h2', 'pokemon__name h5 card-title', pokemon.name);
    
    // var elNewPokemonBodyType = createElementFunc('div', 'pokemon__type', 'card-text', pokemon.type.join(', '));
    
    // elNewPokemonBody.appendChild(elNewPokemonBodyName);
    // elNewPokemonBody.appendChild(elNewPokemonBodyType);
    
    // elNewPokemonBox.appendChild(elNewPokemonImg);
    // elNewPokemonBox.appendChild(elNewPokemonBody);
    
    // elNewPokemon.appendChild(elNewPokemonBox);
    
    // return elNewPokemon;

}

// for (var i = 0; i < pokemons.length; i++) {
//     elPokemons.appendChild(createElementPokemon(pokemons[i]));
// }

var renderPokemons = function(pokemons){
    var elPokemonsWrapperFragment = document.createDocumentFragment()

    pokemons.forEach(function(pokemon){
        elPokemonsWrapperFragment.appendChild(createElementPokemon(pokemon));
    })
    
    elPokemons.appendChild(elPokemonsWrapperFragment);
}
renderPokemons(pokemons) 





// {/* <li class="pokemon col-md-3 list-unstyled">
//     <div class="pokemon__card card border-0 shadow-sm">
//         <img class="pokemon__img card-img-top" src="https://placehold.it/300x200" alt="rasm" width="300" height="200">
//         <div class="pokemon__card-body card-body">
//             <h2 class="pokemon__name h5 card-title">Pokemon name</h2>
//             <div class="pokemon__type card-text">Grass, Electric</div>
//         </div>
//     </div>
// </li> */}