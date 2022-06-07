const email = document.getElementById('email');
const password = document.getElementById('password');
const buttonEntrar = document.querySelector('.btnEnter');
const agreement = document.getElementById('agreement');
let submitBtn = document.getElementById('submit-btn')

buttonEntrar.addEventListener('click', () =>{
if(email.value === 'tryber@teste.com' && password.value === '123456') {
  alert('Olá, Tryber!');
} else {
alert('Email ou senha inválidos.');
}
});

function agreementChecked() {
  agreement.addEventListener('click', () => {
    submitBtn.style.display = 'block';
    submitBtn.removeAttribute('disabled');
  });
} agreementChecked();
