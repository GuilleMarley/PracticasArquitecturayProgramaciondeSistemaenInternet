const array: string[] = ["aaa", "bbb", "ccc"]


const palabras = ( arr: string[]):string => {
	
    let ordenado:string[] = arr.sort()
	const result: string = ordenado[0].split("").join( " " )

	
	return result;
}


console.log(palabras([ "aaa", "bbb", "ccc"]))
console.log(palabras([ "bbb", "ccc", "aaa"]))