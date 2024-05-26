function contarPalabras(frases: string): void{
    let palabras = frases.split(" ");
    let conteo: {[key: string]: number} = {};

    for(var i = 0; i < palabras.length; i++){
        let palabra = palabras[i].toLocaleLowerCase();

        if(conteo[palabra]){
            conteo[palabra] ++;
        } else{
            conteo[palabra] = 1;
        }
    }

    console.log("Conteo de palabras");
    for(var palabra in conteo){
        console.log(`${palabra}: ${conteo[palabra]}`);
    }
}

let frase = "Fundamentos de Type Script y de Java Script";
contarPalabras(frase);