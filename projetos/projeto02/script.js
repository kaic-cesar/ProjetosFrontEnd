const valor = document.getElementById('valor');
const subtrairBtn = document.querySelector('.subtrair');
const checkbox = document.querySelector('#check');

let contador = 0;

function atualizarTela() {
  valor.innerText = contador;
}

checkbox.addEventListener('change', () => {
  if (checkbox.checked && contador < 0) {
    contador = 0;
    subtrairBtn.classList.add('disable')
  }
  atualizarTela();
});

function subtrair() {
  if (checkbox.checked && contador === 0) {
    subtrairBtn.classList.add('disable')
    return;
  }

  contador--;
  atualizarTela();
}

function adicionar() {
  contador++;
  subtrairBtn.classList.remove('disable')

  atualizarTela();
}

function limpar() {
  contador = 0;
  atualizarTela();
}


atualizarTela();