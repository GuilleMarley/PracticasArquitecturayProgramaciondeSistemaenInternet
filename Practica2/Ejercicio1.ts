// Tipos
export interface ResponseData {
    statusCode:  number;
    message:     string;
    pagination:  Pagination;
    totalQuotes: null;
    data:        QuoteType[];
}

export interface Pagination {
    currentPage: null;
    nextPage:    null;
    totalPages:  null;
}

type QuoteType = {
    quoteText : string
    quoteAuthor : string
    quoteGenre : string
}

const fetchData = async (pageNumber: string) => {  
    
  try {
    // Fetch a resource from the network. It returns a Promise
    // that resolves to the Response to that Request, whether it is successful or not.
    
    const link = `https://quote-garden.onrender.com/api/v3/quotes?page=${pageNumber}`

    const response = await fetch(
        link
    );

    // Takes a Response stream and reads it to completion. It returns a promise that resolves
    // with the result of parsing the body text as JSON.
    const data: ResponseData = await response.json();

    data.data.forEach(quote => {
        console.log("---------------------------------")
        console.log("Nombre del autor: ", quote.quoteAuthor, "\nFrase del autor: ", quote.quoteText, "\nGenero de la frase: ", quote.quoteGenre)
      })
  } catch (error) {
    // Debemos tratar siempre los errores cuando trabajemos con Promesas
    console.log(error);
  }
};

await fetchData("1000");
await fetchData("2000");
await fetchData("4000");
