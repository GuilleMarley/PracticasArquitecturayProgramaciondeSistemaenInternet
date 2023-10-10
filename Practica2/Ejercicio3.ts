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
    
    const option = prompt("1.Create book.\n2.Filter by genre.\n3.Remove book.\n4.EXIT.\n");
    

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

            console.log("Actualmente hay estos libros:\n ", biblioteca)

       } else if(parseInt(option) === 2) {

           //biblioteca.filter((e)=>console.log(e))
           const genreSearch = prompt("Que genero estas buscando?")
           const genreFound = biblioteca.filter((libro) => libro.genre === genreSearch)
           console.log("Hay estos libros con el genero ", genreSearch, "\n", genreFound)

       } else if(parseInt(option) === 3){

            console.log("Borro libro.\n")
       
        } else if(parseInt(option) === 4){
            break;
       }else {
            console.log("-------------------")
            console.log("Not a good choice.")
            console.log("-------------------")
            continue;
       }
        
   }
   counter++
 }

