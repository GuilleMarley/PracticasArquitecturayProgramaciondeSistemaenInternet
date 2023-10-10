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
    id: number
    generation: generation[]
}

export interface generation {
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

const fetchData = async (route: string, pokemonSearch: string|null) => {  
    
    try {
      // Fetch a resource from the network. It returns a Promise
      // that resolves to the Response to that Request, whether it is successful or not.
      
      const link = `https://pokeapi.co/api/v2/${route}/${pokemonSearch}`
  
      const response = await fetch(
          link
      );
  
      if(route === "pokemon"){
      const pokemon: Pokemon = await response.json();
  
      console.log("Name: ", pokemon.name, "\nPokemon Id: ", pokemon.id, "\nTypes: ", pokemon.types,"\nAbilities: ", pokemon.abilities)
      } else {
        const pokemonType: PokemonType = await response.json();
  
        console.log("Name: ", pokemonType.name, "\nType Id: ", pokemonType.id, "\nGeneration introduced: ", pokemonType.generation)
      }
    } catch (error) {
      // Debemos tratar siempre los errores cuando trabajemos con Promesas
      console.log(error);
    }
  };

  while(1){
     //await fetchData ("pokemon", "ditto");
     //await fetchData ("pokemon", "gallade");
     //await fetchData ("type", "dragon");
    const option = prompt("1.Choose Pokemon type.\n2.Choose Pokemon.\n0.EXIT.\n:");
    
    if (option == null){
        console.log("NOT AVAILABLE OPTION SELECTED");
    }else{
        
        
        if(parseInt(option) === 1){
            const route1 = "type"
            const typeSearch = prompt("Please enter pokemon type by id(1-18) or by name: ");
            await fetchData ( route1, typeSearch );
            
        } else if(parseInt(option) === 2) {
            const route = "pokemon"
            const nameSearch = prompt("Please enter pokemon name by id(1-1017) or by name: ");
            await fetchData ( route, nameSearch );

        } else if(parseInt(option) === 0){
            break;
        } else{
            console.log("Not a good choice")
            continue
        }

    }

  }