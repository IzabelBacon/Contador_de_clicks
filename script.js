let contador = 0;
const contadorEl = document.getElementById('contador');
const saco = document.getElementById('saco');
const lago = document.querySelector('.lago');
const patinho = document.getElementById('patinho');

saco.addEventListener('click', () => {
  // Som de clique
  // document.getElementById('somSaco').play();

  // Criar migalha SVG
  const mig = document.createElement('div');
  mig.className = 'mig';
  mig.innerHTML = `
    <svg viewBox="0 0 20 20" width="20">
      <circle cx="10" cy="10" r="5" fill="#e0c78c"/>
    </svg>
  `;
  mig.style.left = (window.innerWidth - 100) + 'px';
  lago.appendChild(mig);

  // Posição aleatória no lago
  const destinoX = Math.random() * (window.innerWidth - 100);
  mig.style.left = destinoX + 'px';

  setTimeout(() => {
    const destinoY = 75;
    mig.style.top = destinoY + '%';

    // Levar patinho até a migalha
    patinho.style.left = destinoX + 'px';
    patinho.style.bottom = destinoY + '%';

    // Quando o patinho chegar
    setTimeout(() => {
      // Som de comer
      // document.getElementById('somComer').play();

      mig.remove();
      contador++;
      contadorEl.textContent = contador;
    }, 1000);

  }, 1500);
});
