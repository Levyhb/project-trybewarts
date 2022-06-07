let email = document.getElementById('email')
let password = document.getElementById('password')
let buttonEntrar = document.querySelector('.btnEnter');

buttonEntrar.addEventListener('click', () =>{
if(email.value === 'tryber@teste.com' && password.value === '123456') {
  alert('Olá, Tryber!');
} else {
alert('Email ou senha inválidos.');
}
})

// function verifyEmail(){
//   if(email.value === tryber@teste.com ){
//     alert
//   }
// }