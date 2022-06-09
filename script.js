const email = document.getElementById('email');
const password = document.getElementById('password');
const buttonEntrar = document.querySelector('.button');
const agreement = document.getElementById('agreement');

buttonEntrar.addEventListener('click', () => {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

function agreementChecked() {
  const submitBtn = document.getElementById('submit-btn');
  agreement.addEventListener('click', () => {
    if (agreement.checked) {
      submitBtn.removeAttribute('disabled');
    } else {
      submitBtn.setAttribute('disabled', 'disabled');
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

const submitButton = document.querySelector('#submit-btn');
const resultForm = document.querySelector('.resultForm');

function resultEmail() {
  const emailResult = document.getElementById('emailResult');
  const emailForm = document.getElementById('input-email');
  emailResult.innerText += ` ${emailForm.value}`;
}
function resultName() {
  const nameResult = document.getElementById('nameResult');
  const nameForm = document.getElementById('input-name');
  const lastNameForm = document.getElementById('input-lastname');
  nameResult.innerText += ` ${nameForm.value} ${lastNameForm.value}`;
}

function resultHouse() {
  const house = document.getElementById('house');
  const houseResult = document.getElementById('casaResult');
  houseResult.innerText += ` ${house.value}`;
}

function resultFamily() {
  const familiaResult = document.getElementById('familiaResult');
  const family = document.querySelector('input[name=family]:checked');
  familiaResult.innerHTML += family.value;
}
function resultMaterias() {
  const materiaResult = document.getElementById('materiasResult');
  const materias = document.querySelectorAll('.subject:checked');
  const materiasValue = [];
  for (let i = 0; i < materias.length; i += 1) {
    materiasValue.push(materias[i].value);
  }
  materiaResult.innerText += ` ${materiasValue.join(', ')}`;
}

function resultRate() {
  const rateResult = document.getElementById('rateResult');
  const labelRate = document.querySelectorAll('[name=rate]:checked');
  const rateValue = [];
  for (let i = 0; i < labelRate.length; i += 1) {
    rateValue.push(labelRate[i].value);
  }
  rateResult.innerText += ` ${rateValue}`;
}

function resultObservation() {
  const observationResult = document.getElementById('observationResult');
  const textarea = document.getElementById('textarea');
  observationResult.innerText += ` ${textarea.value}`;
}

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  const section = document.querySelector('.sect');
  section.style.display = 'none';
  resultForm.style.display = 'block';
  resultName();
  resultEmail();
  resultFamily();
  resultMaterias();
  resultRate();
  resultObservation();
  resultHouse();
  // ;
});
