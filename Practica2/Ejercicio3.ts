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
    
    const option = prompt("1.Create book.\n2.Search genre.\n3.Remove book.\n4.EXIT.\n:");
    

    if (option == null){
        console.log("NOT AVAILABLE OPTION SELECTED");
    }else{
          
        if(parseInt(option) === 1){

            const title_var = prompt("Introduce the book title: ");
            const author_var = prompt("Introduce the author: ");
            const pages_var = prompt("Introduce number of pages: ");
            const genre_var = prompt("Introduce the genre: ");
            const id_var: number = counter


            const libro_var = {
                id : id_var,
                title: title_var,
                author: author_var,
                pages: pages_var,
                genre: genre_var,
            }

            biblioteca.push(libro_var)

            console.log("These are the books in our library: ", biblioteca)

        } else if(parseInt(option) === 2) {
            //biblioteca.filter((e)=>console.log(e))
            const genreSearch = prompt("Introduce the genre you feel like reading: ");
            const genreFound = biblioteca.filter ( (libro) => genreSearch === libro.genre)
            console.log("In the library we have these books with the genre : ", genreSearch, " ", genreFound)
        } else if(parseInt(option) === 3){
            console.log("Borro libro.")
        } else if (parseInt(option) === 4){
            break;
        } else{
            console.log("Not a good choice")
            continue
        }
        
    }
    counter++
 }

