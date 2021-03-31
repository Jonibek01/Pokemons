var elPokemons = $_('.pokemons');

var elNewPokemon = document.createElement('li');
elNewPokemon.classList.add('pokemon', 'col-md-3');

var elNewPokemonBox = document.createElement('div');
elNewPokemonBox.classList.add('pokemon__card', 'card', 'border-0', 'shadow-sm');

var elNewPokemonImg = document.createElement('img');
elNewPokemonImg.classList.add('pokemon__img', 'card-img-top');
elNewPokemonImg.src = pokemons[0].img;
elNewPokemonImg.alt = pokemons[0].name;
elNewPokemonImg.width = 300;
elNewPokemonImg.height = 200;

console.log(elNewPokemonImg)

var elNewPokemonBody = document.createElement('div');
elNewPokemonBody.classList.add('pokemon__card-body', 'card-body');

var elNewPokemonBodyName = document.createElement('h2');
elNewPokemonName.classList.add('pokemon__name', 'h5', 'card-title');
elNewPokemonName.textContent = pokemons[0].name;

var elNewPokemonBodyType = document.createElement('div');
elNewPokemonBodyType.classList.add('pokemon__type', 'card-text');
elNewPokemonBodyType.textContent = pokemons[0].type.join(', ');


elNewPokemonBody.appendChild(elNewPokemonBodyName);
elNewPokemonBody.appendChild(elNewPokemonBodyType);

elNewPokemonBox.appendChild(elNewPokemonImg);
elNewPokemonBox.appendChild(elNewPokemonBody);

elNewPokemon.appendChild(elNewPokemonBox);

elPokemons.appendChild(elNewPokemon);

// {/* <li class="pokemon col-md-3 list-unstyled">
//     <div class="pokemon__card card border-0 shadow-sm">
//         <img class="pokemon__img card-img-top" src="https://placehold.it/300x200" alt="rasm" width="300" height="200">
//         <div class="pokemon__card-body card-body">
//             <h2 class="pokemon__name h5 card-title">Pokemon name</h2>
//             <div class="pokemon__type card-text">Grass, Electric</div>
//         </div>
//     </div>
// </li> */}