function ejemplo() {
    console.log(e); // undefined, porque var se eleva al inicio del contexto
    var e = 10;
    console.log(e);

    if (true) {
        var f = 20;
        let g = 30;
        console.log(g);
    }

    console.log(f); // 20, var tiene alcance de función
    console.log(g); // ReferenceError: g is not defined, let tiene alcance de bloque
}

ejemplo();