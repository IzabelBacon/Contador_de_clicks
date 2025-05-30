let contador = 0;
const contadorEl = document.getElementById('contador');
const saco = document.getElementById('saco');
const lago = document.querySelector('.lago');
const patinho = document.getElementById('patinho');

saco.addEventListener('click', () => {
  // Criar migalha
  const mig = document.createElement('div');
  mig.className = 'mig';
  mig.style.left = (window.innerWidth - 100) + 'px';
  lago.appendChild(mig);

  // Posição aleatória no lago
  const destinoX = Math.random() * (window.innerWidth - 100);
  mig.style.left = destinoX + 'px';

  setTimeout(() => {
    const destinoY = window.innerHeight * 0.75;
    mig.style.top = destinoY + 'px';

    // Levar patinho até a migalha (usando transform translate)
    const patoX = destinoX;
    const patoY = destinoY;

    patinho.style.transform = `translate(${patoX}px, ${patoY - window.innerHeight * 0.2}px)`;

    setTimeout(() => {
      mig.remove();
      contador++;
      contadorEl.textContent = contador;

      // Voltar patinho pro centro
      setTimeout(() => {
        patinho.style.transform = `translate(${window.innerWidth * 0.5 - 30}px, ${window.innerHeight * 0.8 - window.innerHeight * 0.2}px)`;
      }, 500);

    }, 1000);

  }, 1500);
});
