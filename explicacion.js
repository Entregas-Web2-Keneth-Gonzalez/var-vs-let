//var tiene alcance de funcion, va a ser ejecutable en toda la funcion
function ejemploVar() {
    if (true) {
        var a = 10;
    }
    console.log(a); // 10
}

//let tiene alcance de bloque, es decir, solo es ejecutable entre llaves {}
function ejemploLet() {
    if (true) {
        let b = 10;
    }
    console.log(b); // ReferenceError: y is not defined
}

//las variables con var se pueden leer hacia atras del codigo como en python
console.log(c); //indefinida
var c = 30;
console.log(c); //30

//las variables let se tienen que definir antes
console.log(d);
let d = 40;
console.log(d);

//las variables var se pueden redeclarar dentro del mismo contexto, o sea, de la misma forma
//en este caso solamente reescribiendo
var e = 50;
var e = 55;
console.log(e);

//las variables let no lo permite
let f = 60;
let f = 65; // SyntaxError: Identifier 'd' has already been declared
console.log(f);

