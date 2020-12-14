var km = parseInt(prompt('Quanti chilometri vuoi percorrere?'));
var eta = parseInt(prompt('Quanti anni hai?'));
var prezzo = km * 0.21;
var sconto;

if (eta < 18){
  sconto = prezzo * 20 /100;
  prezzo -= sconto;
}
else if(eta > 65){
  sconto = prezzo * 40 /100;
  prezzo -= sconto;
}

document.getElementById('biglietto').innerHTML = prezzo.toFixed(2) + '€';
