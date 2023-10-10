type Libro = {
    id: number
    title: string|null
    author: string|null
    pages: string|null
    genre: string|null
}

const biblioteca: Libro[] = [];
let counter = 0;

while(1){
    
    const option = prompt("1.Choose Pokemon.\n2.Choose type.\n0.EXIT.\n:");
    

    if (option == null){
        console.log("NOT AVAILABLE OPTION SELECTED");
    }else{
          
        if(parseInt(option) === 1){

            const title_var = prompt("Introduce el titulo del libro: ");
            const author_var = prompt("Introduce el autor del libro: ");
            const pages_var = prompt("Introduce el numero de paginas del libro: ");
            const genre_var = prompt("Introduce el genero del libro: ");
            const id_var: number = counter


            const libro_var = {
                id : id_var,
                title: title_var,
                author: author_var,
                pages: pages_var,
                genre: genre_var,
            }

            biblioteca.push(libro_var)

       } else if(parseInt(option) === 2) {
           //biblioteca.filter((e)=>console.log(e))
       } else
           break;
        
   }
   counter++
 }

