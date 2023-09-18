function getPokemon(pokemonName) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("NETWORK RESPONSE ERROR");
      }
    })
    .then((data) => {
      writeResult(data.sprites);
    })
    .catch((error) => console.error("FETCH ERROR:", error));
}

function writeResult(x) {
  let imageHolderFront = document.getElementById("pokeHolderFront");
  imageHolderFront.src = x.front_default;
}

//   let imageHolderBack = document.getElementById("pokeHolderBack");
//   imageHolderBack.src = x.back_default;

//   let imageHolderOfficial = document.getElementById("pokeHolderOfficial");
//   imageHolderOfficial.src = x.other["official-artwork"].front_default;

// in the HTML

{
  /* <img
id="pokeHolderBack"
alt="pokemon"
src="data:image/svg+xml;charset=utf8,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%3E%3C/svg%3E"
/>

<img
id="pokeHolderOfficial"
alt="pokemon"
src="data:image/svg+xml;charset=utf8,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%3E%3C/svg%3E"
/> */
}
