/* Pivo */ 
function abrir1(){
  let pivo = document.querySelector('.pivo')
  pivo.style.display = 'block';

  let icon1 = document.getElementById('icon1')
  icon1.style.display = 'none';
}

function fechar1(){
  let pivo = document.querySelector('.pivo')
  pivo.style.display = 'none';

  let icon1 = document.getElementById('icon1')
  icon1.style.display = 'block';
}

/* Ponta Direito */
function abrir2(){
  let pontaD = document.querySelector('.pontaD')
  pontaD.style.display = 'block';

  let icon2 = document.getElementById('icon2')
  icon2.style.display = 'none';
}

function fechar2(){
  let pontaD = document.querySelector('.pontaD')
  pontaD.style.display = 'none';

  let icon2 = document.getElementById('icon2')
  icon2.style.display = 'block';
}

/*Ponta Esquerdo*/
function abrir3(){
  let pontaE = document.querySelector('.pontaE')
  pontaE.style.display = 'block';

  let icon3 = document.getElementById('icon3')
  icon3.style.display = 'none';
}

function fechar3(){
  let pontaE = document.querySelector('.pontaE')
  pontaE.style.display = 'none';

  let icon3 = document.getElementById('icon3')
  icon3.style.display = 'block';
}

/*Meia Esquerdo*/
function abrir4(){
  let meiaE = document.querySelector('.meiaE')
  meiaE.style.display = 'block';

  let icon4 = document.getElementById('icon4')
  icon4.style.display = 'none';
}

function fechar4(){
  let meiaE = document.querySelector('.meiaE')
  meiaE.style.display = 'none';

  let icon4 = document.getElementById('icon4')
  icon4.style.display = 'block';
}

/*Meia Direito*/
function abrir5(){
  let meiaD = document.querySelector('.meiaD')
  meiaD.style.display = 'block';

  let icon5 = document.getElementById('icon5')
  icon5.style.display = 'none';
}

function fechar5(){
  let meiaD = document.querySelector('.meiaD')
  meiaD.style.display = 'none';

  let icon5 = document.getElementById('icon5')
  icon5.style.display = 'block';
}

/*Volante*/
function abrir6(){
  let volante = document.querySelector('.volante')
  volante.style.display = 'block';

  let icon6 = document.getElementById('icon6')
  icon6.style.display = 'none';
}

function fechar6(){
  let volante = document.querySelector('.volante')
  volante.style.display = 'none';

  let icon6 = document.getElementById('icon6')
  icon6.style.display = 'block';
}

/*Lateral Direito*/
function abrir7(){
  let lateralD = document.querySelector('.lateralD')
  lateralD.style.display = 'block';

  let icon7 = document.getElementById('icon7')
  icon7.style.display = 'none';
}

function fechar7(){
  let lateralD = document.querySelector('.lateralD')
  lateralD.style.display = 'none';

  let icon7 = document.getElementById('icon7')
  icon7.style.display = 'block';
}

/*Lateral Esquerdo*/
function abrir8(){
  let lateralE = document.querySelector('.lateralE')
  lateralE.style.display = 'block';

  let icon8 = document.getElementById('icon8')
  icon8.style.display = 'none';
}

function fechar8(){
  let lateralE = document.querySelector('.lateralE')
  lateralE.style.display = 'none';

  let icon8 = document.getElementById('icon8')
  icon8.style.display = 'block';
}

/*Zagueiro Esquerdo*/
function abrir9(){
  let zagueiroE = document.querySelector('.zagueiroE')
  zagueiroE.style.display = 'block';

  let icon9 = document.getElementById('icon9')
  icon9.style.display = 'none';
}

function fechar9(){
  let zagueiroE = document.querySelector('.zagueiroE')
  zagueiroE.style.display = 'none';

  let icon9 = document.getElementById('icon9')
  icon9.style.display = 'block';
}

/*Zagueiro Direito*/
function abrir10(){
  let zagueiroD = document.querySelector('.zagueiroD')
  zagueiroD.style.display = 'block';

  let icon10 = document.getElementById('icon10')
  icon10.style.display = 'none';
}

function fechar10(){
  let zagueiroD = document.querySelector('.zagueiroD')
  zagueiroD.style.display = 'none';

  let icon10 = document.getElementById('icon10')
  icon10.style.display = 'block';
}

/*Goleiro*/
function abrir11(){
  let goleiro = document.querySelector('.goleiro')
  goleiro.style.display = 'block';

  let icon11 = document.getElementById('icon11')
  icon11.style.display = 'none';
}

function fechar11(){
  let goleiro = document.querySelector('.goleiro')
  goleiro.style.display = 'none';

  let icon11 = document.getElementById('icon11')
  icon11.style.display = 'block';
}


var mymap = L.map('map').setView([-22.9059, -43.3575], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
  maxZoom: 20,
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1
}).addTo(mymap);

var circle = L.circle([-22.9059, -43.3575], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 500
}).addTo(mymap);