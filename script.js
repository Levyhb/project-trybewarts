const email = document.getElementById('email');
const password = document.getElementById('password');
const buttonEntrar = document.querySelector('.btnEnter');
const agreement = document.getElementById('agreement');
const submitBtn = document.getElementById('submit-btn');

buttonEntrar.addEventListener('click', () => {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

function agreementChecked() {
  agreement.addEventListener('click', () => {
    if (agreement.checked) {
      submitBtn.removeAttribute('disabled');
    } else {
      submitBtn.setAttribute('disabled');
    }
  });
} agreementChecked();

const textBox = document.getElementById('textarea');

function checkText() {
  const count = document.querySelector('#counter');
  count.innerText = '500';
  const textLength = count.innerText - textBox.value.length;
  count.innerText = textLength;
}
textBox.addEventListener('keyup', checkText);
