const actualizador = setInterval(function () {

  const inicioClase = new Date('October 1, 2024 10:00:00').getTime()

  console.log(inicioClase)
  
  const tiempoActual = new Date().getTime()
  console.log(tiempoActual)

  let tiempoRestante = inicioClase - tiempoActual
  
  tiempoRestante /= 1000 
  console.log(tiempoRestante)

  const dias = Math.floor(tiempoRestante / (60 * 60 * 24))
  
  console.log(dias)
  
  const horas = Math.floor(tiempoRestante%(60*60*24) / (60*60))
  console.log(horas)

  const minutos = Math.floor(tiempoRestante % (60 * 60) / (60))
  console.log(minutos)

  const segundos = Math.floor(tiempoRestante % (60))
  console.log(minutos)

  const contador = document.getElementById("contador");

  contador.innerHTML = `
  <div>
    <span>${dias}</span>
    <span class="texto">Dias</span>
  </div>
    <div>
    <span>${horas}</span>
    <span class="texto">Horas</span>
  </div>
    <div>
    <span>${minutos}</span>
    <span class="texto">Minutos</span>
  </div>
    <div>
    <span>${segundos}</span>
    <span class="texto">Segundos</span>
  </div>
  `;
}, 1000);
