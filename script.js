const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-button');
const pokemonName = document.getElementById('pokemon-name');
const pokemonId = document.getElementById('pokemon-id');
const pokeWeight = document.getElementById('weight');
const pokeHeight = document.getElementById('height');
const pokeType = document.getElementById('types');
const pokeHp = document.getElementById('hp');
const pokeAttack = document.getElementById('attack');
const pokeDefense = document.getElementById('defense');
const specialAttack = document.getElementById('special-attack');
const specialDefense = document.getElementById('special-defense');
const pokeSpeed = document.getElementById('speed');
const pokemonImg = document.getElementById('pokemonImg');

const searchPokemon = () => {
  pokeType.textContent = ''; // Clear the content of pokeType
  pokemonImg.innerHTML = ''; // Clear the content of pokemonImg
  
  if (searchInput.value === 'Red') {
    alert("Pokémon not found");
    return; // Stop the function execution
  }
  
  fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${searchInput.value.toLowerCase()}`)
  .then(response => response.json())
  .then(({name, id, weight, height, sprites, stats, types}) =>{
    pokemonName.innerText = name;
    pokemonId.innerText = id;
    pokeWeight.innerText = weight;
    pokeHeight.innerText = height;
    pokeHp.innerText = stats[0].base_stat;
    pokeAttack.innerText = stats[1].base_stat;
    pokeDefense.innerText = stats[2].base_stat;
    specialAttack.innerText = stats[3].base_stat;
    specialDefense.innerText = stats[4].base_stat;
    pokeSpeed.innerText = stats[5].base_stat;

    const imgEl = document.createElement("img");
    imgEl.id = 'sprite';
    imgEl.src = sprites.front_default;
    pokemonImg.appendChild(imgEl);

    types.forEach(({type}) => {
      const paragraph = document.createElement('p');
      paragraph.textContent = type.name;
      pokeType.appendChild(paragraph);
    });
  })
  .catch(error => {
    console.error("Error:", error);
  });
}

searchBtn.addEventListener('click', searchPokemon);
