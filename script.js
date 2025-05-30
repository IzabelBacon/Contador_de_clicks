let contador = 0;
const contadorEl = document.getElementById('contador');
const saco = document.getElementById('saco');
const somSaco = document.getElementById('somSaco');
const somComer = document.getElementById('somComer');
const lago = document.querySelector('.lago');
const patinho = document.getElementById('patinho');

saco.addEventListener('click', () => {
  somSaco.currentTime = 0;
  somSaco.play();

  const mig = document.createElement('img');
  mig.src = 'mig.png';
  mig.className = 'mig';
  mig.style.left = (window.innerWidth - 100) + 'px';
  lago.appendChild(mig);

  const destinoX = Math.random() * (window.innerWidth - 100);
  mig.style.left = destinoX + 'px';

  // depois que migalha cai
  setTimeout(() => {
    const destinoY = 75;
    mig.style.top = destinoY + '%';

    // leva patinho até a migalha
    patinho.style.left = destinoX + 'px';
    patinho.style.bottom = destinoY + '%';

    // quando o patinho chega (1s animacao)
    setTimeout(() => {
      somComer.currentTime = 0;
      somComer.play();
      mig.remove();
      contador++;
      contadorEl.textContent = contador;
    }, 1000);

  }, 1500);
});

