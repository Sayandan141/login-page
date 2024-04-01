const container = document.getElementById('container');
const loginbutton = document.getElementById('login');
const registerbutton = document.getElementById('register');

registerbutton.addEventListener('click', () => {
    container.classList.add("active");
});

loginbutton.addEventListener('click', () => {
    container.classList.remove("active");
});