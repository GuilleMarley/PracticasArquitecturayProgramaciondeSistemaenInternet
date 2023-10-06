type Pokemon = {
    name : string
    id : number
    types : types[]
    abilities : abilities[]
}

export interface types {
    slot: number
    type: PokemonType[]

}

type PokemonType = {
    name: string
}

export interface abilities {
    abilty: Ability[]
    is_hidden: boolean
    slot: number
}

type Ability = {
    name: string
}

const fetchData = async (pokemonName) => {  
    
    try {
      // Fetch a resource from the network. It returns a Promise
      // that resolves to the Response to that Request, whether it is successful or not.
      
      const link = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  
      const response = await fetch(
          link
      );
  
      // Takes a Response stream and reads it to completion. It returns a promise that resolves
      // with the result of parsing the body text as JSON.
      const pokemon: Pokemon = await response.json();
  
      console.log("Nombre: ", pokemon.name, "\nPokemon Id: ", pokemon.id, "Tipos: ", pokemon.types,"Habilidades: ", pokemon.abilities)
    } catch (error) {
      // Debemos tratar siempre los errores cuando trabajemos con Promesas
      console.log(error);
    }
  };

  //await fetchData ("ditto");
  //await fetchData ("gallade");
  const name = prompt("Please enter pokemon name:");
  await fetchData ( name );