let formElement = document.getElementById('form');
let inputElement = document.getElementById('email');
let spanElement = document.getElementById('errorspan');
let cardElement = document.getElementById('card');
let successElemet = document.getElementById('success');
let emailSpan = document.getElementById('emailSpan');
let dismissBtn = document.getElementById('dismissBtn');
let emailInput = document.getElementById('email');

function handleSubmit(e){
    e.preventDefault();

    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const data = Object.fromEntries(new FormData(e.target));
    console.log(data);
    if(data.email.trim() === ""){
        inputElement.classList.add('error');
        spanElement.style.display = 'flex';
    } else if(!regex.test(data.email)){
        inputElement.classList.add('error');
        spanElement.style.display = 'flex';
    } else{
        cardElement.style.display = 'none';
        successElemet.style.display = 'flex'
        emailSpan.textContent = data.email;
    }
}

function dismissSection(){
    cardElement.style.display = 'flex';
    successElemet.style.display = 'none';
    formElement.reset();
    inputElement.classList.remove('error');
    spanElement.style.display = 'none';
}

formElement.addEventListener('submit', handleSubmit);
dismissBtn.addEventListener('click', dismissSection);