function multiplos(numero: number) {
    const multiplosArray: number[] = []

    for (let i = 0; i <= numero; i++) {
        if (i % 3 === 0 || i % 5 === 0) {

            let existe: boolean = false

            for( let j = 0; j < multiplosArray.length; j++){

                if(multiplosArray[j] === i){
                    existe = true
                    break
                }

            }

            if(!existe){
                multiplosArray.push(i)
            }
        }
    }

    return multiplosArray
}

const numero = 20
const resultado = multiplos(numero)
console.log(resultado)
