function triangulo(){
    var base = 4;
    var altura =10;
    var res =(base*altura)/2;
    console.log("El area del triangulo es : " + res);
}
triangulo();

function circulo(){
    var radio = 4;
    var pi = 3.14;
    var res =pi*(radio*radio);
    console.log("El area del circulo es : " + res);
}

circulo();

function rectangulo(b,a){
    res=b*a;
    alert("El area del rectangulo es : "+ res);
}
rectangulo(8,12);
