// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa
  // un par clave-valor en forma de matriz.
  //Ejemplo:
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var x = [];
  x = Object.entries(objeto);
  return x;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  //Escribe tu código aquí

  String.prototype.count=function(char) {
    var result = 0;
    for(i=0;i<this.length;i++){
      if(this[i]==char){result++;}
    }
    return result;
  };

  var x = {};
  const eachChar = new Set(string);
  for (let char of eachChar) {
    var cont = string.count(char);
    x.[char] = cont;
    }
  return x;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var x = "";
  for (var i = 0; i < s.length; i++) {
    if(s[i] == s[i].toUpperCase()){x+=s[i];}
  }
  for (var i = 0; i < s.length; i++) {
    if(s[i] == s[i].toLowerCase()){x+=s[i];}
  }
  return x;
}


function asAmirror(str) {
  //La función recibe una frase.
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var words = str.split(" ");
  for(let i = 0; i < words.length; i++){
    words[i] = words[i].split("").reverse().join("");
  }
  var reversed = words.join(" ");
  return reversed;
}


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí

  var sonIguales=false;
  var arr = numero.toString().split("");
  var medio = Math.round(arr.length / 2);
  for (var i = 0; i < arr.length; i++) {

    for (var j = arr.length-1; j >=0; j--) {
      if(arr[i]==arr[j]&&arr[i-1]==arr[j+1]){
        sonIguales=true;
        continue;
      }
      break;
    }
    if(arr[i]==medio){
      break;
    }
    continue;
  }
  if(sonIguales==true){
    return "Es capicua";
  } else{return "No es capicua";}
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var arr = cadena.split("");
  for (var i = 0; i < cadena.length; i++) {
    if(cadena[i]=="a"||cadena[i]=="b"||cadena[i]=="c"){
      arr[i]="";
    }
  }
  var str=arr.join("");
  return str;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  arr.sort((a,b) => a.length - b.length)
  return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  var arrNuevo=[];
  if(arreglo1.length>=arreglo2){
    var masLargo = arreglo1;
    var masCorto = arreglo2;
  } masLargo = arreglo2; masCorto = arreglo1;
  for (var i = 0; i < masLargo.length; i++) {
    for (var j= 0; j < masCorto.length;j++) {
      if(masLargo[i]==masCorto[j]){
        arrNuevo.push(masCorto[j]);
      }
    }
  }
  return arrNuevo;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
