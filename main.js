class Pilota {
    constructor (nome, punti, scuderia){
        this.nome = nome;
        this.punti = punti;
        this.scuderia = scuderia;
    }

}

class Scuderia {
    constructor (nome, punti){
        this.nome = nome;
        this.punti = punti;
    }

}

var Gaetano = new Pilota ('Gaetano', 0, 'Williams');
var Frara = new Pilota ('Frara', 0, 'Williams');
var Ago = new Pilota ('Ago', 0, 'Ferrari');
var Pesca = new Pilota ('Pesca', 0, 'Ferrari');
var Gem = new Pilota ('Gem', 0, 'Mercedes');
var Nick = new Pilota ('Nick', 0, 'Mercedes');
var Vincenzo = new Pilota ('Vincenzo', 0, 'Alpha');
var Petri = new Pilota ('Petri', 0, 'Alpha');

var pilota = {}; // Create an object to store the instances of Pilota class


pilota[Gaetano.nome] = Gaetano;
pilota[Frara.nome] = Frara;
pilota[Ago.nome] = Ago;
pilota[Pesca.nome] = Pesca;
pilota[Gem.nome] = Gem;
pilota[Nick.nome] = Nick;
pilota[Vincenzo.nome] = Vincenzo;
pilota[Petri.nome] = Petri;

var scuderia = {
    Williams: new Scuderia('Williams', 0),
    Ferrari: new Scuderia('Ferrari', 0),
    Mercedes: new Scuderia('Mercedes', 0),
    Alpha: new Scuderia('Alpha', 0)
  };
  




const punticlass = [0, 25 , 18, 15, 12, 10, 8, 6, 4, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];

bahrain();



function aggiornaScud() {
  // Aggiorna i punti delle scuderie in base ai piloti
  for (var nomePilota in pilota) {
    var pilotaCorrente = pilota[nomePilota];
    var scuderiaPilota = pilotaCorrente.scuderia;

    // Verifica se la scuderia del pilota esiste nell'oggetto scuderie
    if (scuderia.hasOwnProperty(scuderiaPilota)) {
      // Aggiorna i punti della scuderia corrispondente
      scuderia[scuderiaPilota].punti += pilotaCorrente.punti;
    }
  }
 

// Ordina le scuderie in base ai punti (in ordine decrescente)
var sortedScuderie = Object.values(scuderia).sort((a, b) => b.punti - a.punti);

// Aggiorna i punti delle scuderie negli elementi HTML dopo il sorting
for (var i = 1; i <= 4; i++) {
  var currentScuderia = sortedScuderie[i - 1];
  var s = document.getElementById("s" + i);
  var nomes = document.getElementById("nomes" + i);
  var puntis = document.getElementById("puntis" + i);
  s.classList.add(currentScuderia.nome);
  nomes.textContent = currentScuderia.nome;
  puntis.textContent = currentScuderia.punti;
}

}

function main(){
    displayPiloti();
    aggiornaScud();
}

function bahrain() {
    for (let i = 1; i <= 8; i++) {
    
      var bahrain = document.getElementById("bahrain" + i).textContent;
      var bahrainPos = document.getElementById("bahrainPos" + i).textContent;
      var bahrainNome = document.getElementById("bahrainNome" + i).textContent;
      var bahrainPunti = document.getElementById("bahrainPunti" + i).textContent;
        
      if (bahrainPos == "RIT" || bahrainPos == "SQ") {
        pilota[bahrainPos].punti += 0;
      } else{
            pilota[bahrainNome].punti += punticlass[bahrainPos];
      }
     
      
    if (bahrainPunti > pilota[bahrainNome].punti) {
        pilota[bahrainNome].punti += 1;
    }
      
    }
    main();


}
  




function displayPiloti() {
  var pilotaArray = Object.values(pilota);
  pilotaArray.sort(function(a, b) {
    return b.punti - a.punti;
  });
  for (let i = 1; i <= 8; i++) {
    var pilotaCorrente = pilotaArray[i - 1];
    var n = document.getElementById("n" + i);
    var nomeElement = document.getElementById("nome" + i);
    var puntiElement = document.getElementById("punti" + i);

    n.classList.add(pilotaCorrente.scuderia);
    nomeElement.innerHTML = pilotaCorrente.nome;
    puntiElement.innerHTML = pilotaCorrente.punti;
  }
}

function bahrain() {
    for (let i = 1; i <= 8; i++) {
    
      var bahrain = document.getElementById("bahrain" + i).textContent;
      var bahrainPos = document.getElementById("bahrainPos" + i).textContent;
      var bahrainNome = document.getElementById("bahrainNome" + i).textContent;
      var bahrainPunti = document.getElementById("bahrainPunti" + i).textContent;
        
      pilota[bahrainNome].punti += punticlass[bahrainPos];
      
    if (bahrainPunti > pilota[bahrainNome].punti) {
        pilota[bahrainNome].punti += 1;
    }
      
    }
    main();


}

function bahrain() {
    for (let i = 1; i <= 8; i++) {
    
      var bahrain = document.getElementById("bahrain" + i).textContent;
      var bahrainPos = document.getElementById("bahrainPos" + i).textContent;
      var bahrainNome = document.getElementById("bahrainNome" + i).textContent;
      var bahrainPunti = document.getElementById("bahrainPunti" + i).textContent;
        
      pilota[bahrainNome].punti += punticlass[bahrainPos];
      
    if (bahrainPunti > pilota[bahrainNome].punti) {
        pilota[bahrainNome].punti += 1;
    }
      
    }
    main();


}

function bahrain() {
    for (let i = 1; i <= 8; i++) {
    
      var bahrain = document.getElementById("bahrain" + i).textContent;
      var bahrainPos = document.getElementById("bahrainPos" + i).textContent;
      var bahrainNome = document.getElementById("bahrainNome" + i).textContent;
      var bahrainPunti = document.getElementById("bahrainPunti" + i).textContent;
        
      pilota[bahrainNome].punti += punticlass[bahrainPos];
      
    if (bahrainPunti > pilota[bahrainNome].punti) {
        pilota[bahrainNome].punti += 1;
    }
      
    }
    main();


}

function bahrain() {
    for (let i = 1; i <= 8; i++) {
    
      var bahrain = document.getElementById("bahrain" + i).textContent;
      var bahrainPos = document.getElementById("bahrainPos" + i).textContent;
      var bahrainNome = document.getElementById("bahrainNome" + i).textContent;
      var bahrainPunti = document.getElementById("bahrainPunti" + i).textContent;
        
      pilota[bahrainNome].punti += punticlass[bahrainPos];
      
    if (bahrainPunti > pilota[bahrainNome].punti) {
        pilota[bahrainNome].punti += 1;
    }
      
    }
    main();


}

function bahrain() {
    for (let i = 1; i <= 8; i++) {
    
      var bahrain = document.getElementById("bahrain" + i).textContent;
      var bahrainPos = document.getElementById("bahrainPos" + i).textContent;
      var bahrainNome = document.getElementById("bahrainNome" + i).textContent;
      var bahrainPunti = document.getElementById("bahrainPunti" + i).textContent;
        
      pilota[bahrainNome].punti += punticlass[bahrainPos];
      
    if (bahrainPunti > pilota[bahrainNome].punti) {
        pilota[bahrainNome].punti += 1;
    }
      
    }
    main();


}
      