// esempio 1 condition if/else-if che trova il numero pari o dispari
let numPari = 32;

if (numPari % 2 === 0) {
  document.getElementById("tester1").innerHTML = "Il numero è pari";
} else {
  document.getElementById("tester1").innerHTML = "Il numero è dispari";
}

let numDispari = 33;

if (numDispari % 2 === 0) {
  document.getElementById("tester2").innerHTML = "Il numero è pari";
} else {
  document.getElementById("tester2").innerHTML = "Il numero è dispari";
}

// esempio 2 condition if/else-if che dice il livello in base al numero di let
let yourLevel = 55;

if (yourLevel == 100) {
  document.getElementById("tester3").innerHTML = "Livello Massimo";
} else if (yourLevel >= 50) {
  document.getElementById("tester3").innerHTML = "Livello Intermedio";
} else if (yourLevel >= 1) {
  document.getElementById("tester3").innerHTML = "Livello base";
}

/* esempio 3 con if/else-if che prende un numero da 1 a 7 e dice il 
giorno della settimana corrispondente */

const numeroGiorno1 = 6;
let giornoSettimana1;

if (numeroGiorno1 === 1) {
  giornoSettimana1 = "Lunedì";
} else if (numeroGiorno1 === 2) {
  giornoSettimana1 = "Martedì";
} else if (numeroGiorno1 === 3) {
  giornoSettimana1 = "Mercoledì";
} else if (numeroGiorno1 ===4) {
  giornoSettimana1 = "Giorvedì";
} else if (numeroGiorno1 === 5) {
  giornoSettimana1 = "Venerdì";
} else if (numeroGiorno1 === 6) {
  giornoSettimana1 = "Sabato";
} else if (numeroGiorno1 === 7) {
  giornoSettimana1 = "Domenica";
} else {
  giornoSettimana1 = "Numero del giorno non valido.";
}

document.getElementById("tester4").innerHTML = giornoSettimana1;

/* esempio 4 con swhitch che prende un numero da 1 a 7 e dice il 
giorno della settimana corrispondente */
const numeroGiorno2 = 3;
let giornoSettimana2;

switch (numeroGiorno2) {
  case 1:
  giornoSettimana2 = "Lunedì";
  break;
  
  case 2:
  giornoSettimana2 = "Martedì";
  break;

  case 3:
  giornoSettimana2 = "Mercoledì";
  break;

  case 4:
  giornoSettimana2 = "Giovedì";
  break;

  case 5:
  giornoSettimana2 = "Vedenerdì";
  break;

  case 6:
  giornoSettimana2 = "Sabato";
  break;
  
  case 7:
  giornoSettimana2 = "Domenica";
  break;

  default:
  giornoSettimana2 = "Numero del giorno non valido";
}

document.getElementById("tester5").innerHTML = giornoSettimana2;

/* ciclo while che calcola la somma dei numeri da 1 a 10 */
let numero = 1;
let somma = 0;

while (numero <= 10) {
  somma += numero;
  numero++;
}

document.getElementById("tester6").innerHTML = "La somma è: " + somma;

/* ciclo do-while che dice se è un numero primo o no */
let num = 17;
let divisore = 2;
let primo = true;

do {
  if (num % divisore === 0) {
    primo = false;
    break;
  }
  divisore++;
} while (divisore < num);

if (primo) {
  document.getElementById("tester7").innerHTML = num + " " + "è un numero primo.";
} else {
  document.getElementById("tester7").innerHTML = num + " " + "non è un numero primo.";
}