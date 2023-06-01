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

var Gaetano = new Pilota ('Gaetano', 0, null);
var Frara = new Pilota ('Frara', 0, null);
var Ago = new Pilota ('Ago', 0, null);
var Pesca = new Pilota ('Pesca', 0, null);
var Gem = new Pilota ('Gem', 0, null);
var Nick = new Pilota ('Nick', 0, null);
var Vincenzo = new Pilota ('Vincenzo', 0, null);
var Petri = new Pilota ('Petri', 0, null);

var pilota = {}; // Create an object to store the instances of Pilota class


pilota[Gaetano.nome] = Gaetano;
pilota[Frara.nome] = Frara;
pilota[Ago.nome] = Ago;
pilota[Pesca.nome] = Pesca;
pilota[Gem.nome] = Gem;
pilota[Nick.nome] = Nick;
pilota[Vincenzo.nome] = Vincenzo;
pilota[Petri.nome] = Petri;

var Williams = new Scuderia ('Williams', 0);
var Ferrari = new Scuderia ('Ferrari', 0);
var Mercedes = new Scuderia ('Mercedes', 0);
var Alpha = new Scuderia ('Alpha', 0);

Gaetano.scuderia = Williams;
Frara.scuderia = Williams;
Nick.scuderia = Mercedes;
Gem.scuderia = Mercedes;
Ago.scuderia = Ferrari;
Pesca.scuderia = Ferrari;
Vincenzo.scuderia = Alpha;
Petri.scuderia = Alpha;

const punticlass = [0, 25 , 18, 15, 12, 10, 8, 6, 4, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];

function classPiloti(){
   
}
bahrain();
classPiloti();

function bahrain() {
    var bahrain1 = document.getElementById("bahrain1").textContent;
    var bahrainPos1 = document.getElementById("bahrainPos1").textContent;
    var bahrainNome1 = document.getElementById("bahrainNome1").textContent;
    var bahrainPunti1 = document.getElementById("bahrainPunti1").textContent;
  
    var bahrain2 = document.getElementById("bahrain2").textContent;
    var bahrainPos2 = document.getElementById("bahrainPos2").textContent;
    var bahrainNome2 = document.getElementById("bahrainNome2").textContent;
    var bahrainPunti2 = document.getElementById("bahrainPunti2").textContent;

    var bahrain3 = document.getElementById("bahrain3").textContent;
    var bahrainPos3 = document.getElementById("bahrainPos3").textContent;
    var bahrainNome3 = document.getElementById("bahrainNome3").textContent;
    var bahrainPunti3 = document.getElementById("bahrainPunti3").textContent;

    var bahrain4 = document.getElementById("bahrain4").textContent;
    var bahrainPos4 = document.getElementById("bahrainPos4").textContent;
    var bahrainNome4 = document.getElementById("bahrainNome4").textContent;
    var bahrainPunti4 = document.getElementById("bahrainPunti4").textContent;
        
    var bahrain5 = document.getElementById("bahrain5").textContent;
    var bahrainPos5 = document.getElementById("bahrainPos5").textContent;
    var bahrainNome5 = document.getElementById("bahrainNome5").textContent;
    var bahrainPunti5 = document.getElementById("bahrainPunti5").textContent;
        
    var bahrain6 = document.getElementById("bahrain6").textContent;
    var bahrainPos6 = document.getElementById("bahrainPos6").textContent;
    var bahrainNome6 = document.getElementById("bahrainNome6").textContent;
    var bahrainPunti6 = document.getElementById("bahrainPunti6").textContent;
        
    var bahrain7 = document.getElementById("bahrain7").textContent;
    var bahrainPos7 = document.getElementById("bahrainPos7").textContent;
    var bahrainNome7 = document.getElementById("bahrainNome7").textContent;
    var bahrainPunti7 = document.getElementById("bahrainPunti7").textContent;
        
    var bahrain8 = document.getElementById("bahrain8").textContent;
    var bahrainPos8 = document.getElementById("bahrainPos8").textContent;
    var bahrainNome8 = document.getElementById("bahrainNome8").textContent;
    var bahrainPunti8 = document.getElementById("bahrainPunti8").textContent;


    pilota[bahrainNome1].punti += punticlass[bahrainPos1];
    pilota[bahrainNome2].punti += punticlass[bahrainPos2];
    pilota[bahrainNome3].punti += punticlass[bahrainPos3];
    pilota[bahrainNome4].punti += punticlass[bahrainPos4];
    pilota[bahrainNome5].punti += punticlass[bahrainPos5];
    pilota[bahrainNome6].punti += punticlass[bahrainPos6];
    pilota[bahrainNome7].punti += punticlass[bahrainPos7];
    pilota[bahrainNome8].punti += punticlass[bahrainPos8];


    


  }
