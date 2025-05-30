let contador = 0;
const contadorEl = document.getElementById('contador');
const saco = document.getElementById('saco');
const lago = document.querySelector('.lago');
const patinho = document.getElementById('patinho');

saco.addEventListener('click', () => {
  // Criar migalha SVG
  const mig = document.createElement('div');
  mig.className = 'mig';
  mig.innerHTML = `
    <svg viewBox="0 0 20 20" width="20">
      <circle cx="10" cy="10" r="5" fill="#e0c78c"/>
    </svg>
  `;
  lago.appendChild(mig);

  // Definir posição inicial (direita no topo)
  mig.style.left = (window.innerWidth - 100) + 'px';

  // Definir destino X e mover a migalha
  const destinoX = Math.random() * (window.innerWidth - 60);
  mig.style.left = destinoX + 'px';

  // Animar queda
  setTimeout(() => {
    mig.style.top = '75%';

    // Mover patinho suavemente até a migalha
    patinho.style.left = destinoX + 'px';
    patinho.style.bottom = '75%';

    // Quando o patinho chegar
    setTimeout(() => {
      mig.remove();
      contador++;
      contadorEl.textContent = contador;

      // Voltar patinho pro centro depois de comer
      setTimeout(() => {
        patinho.style.left = '50%';
        patinho.style.bottom = '20%';
      }, 800);

    }, 1000);

  }, 1500);
});
