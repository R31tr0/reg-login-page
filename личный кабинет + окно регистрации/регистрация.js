// массив пользователей 
let users = [];
// со стороны языка js мы убираем две формы при нажатии и выбираем активную ту которую нажмем путем (формтайп)
function showForm(formtype) {
    document.getElementById('registerForm').classList.remove('active');
    document.getElementById('loginForm').classList.remove('active');
    document.getElementById(formtype + 'Form').classList.add('active'); 
}

//что бы данные не сбрасывались
document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    //заполняем форму рега
    const user = {
        name: document.getElementById('regName').value,
        email: document.getElementById('regEmail').value,
        password: document.getElementById('regPassword').value
    };
    //проеверка
    //переменная которая будет меняется поэтому не константа!
    let userexist = false; 
    //идти по масиву
    for (let i = 0; i < users.length; i++) {
        if(users[i].email === user.email) { 
            userexist = true; 
            break;
        }
    } 
    //если пользователь есть 
    if(userexist) {
        console.log('такой пользователь уже существует');
        alert('Пользователь с таким email уже существует!');
    } else {
        // Добавляем в массив
        users.push(user);
        alert('Регистрация успешна!');
        this.reset();
    }
    //gptфикс
    document.addEventListener('DOMContentLoaded', function() {
    showForm('register');



});
});// получаем данные что бы они не обновлялись при переходе
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
//получаем поле для ввода
    const userlog = {
        email: document.getElementById('loginEmail').value,
        password: document.getElementById('loginPassword').value
    };
    //перменная для проверки пользователя
    let finduser = false;
    //проверкаепт
    for (let i = 0; i < users.length; i++) {
        if(users[i].email === userlog.email && users[i].password === userlog.password) { 
            finduser = true; 
            break; 
        }
    }
    //выходим из цикла а лиж потом осущевствляем ротейт по страницам 
    
    if (finduser === true) {
        localStorage.setItem('user', JSON.stringify(users))
        window.location.href = "профиль.html";
    } else {
        alert('Вы не зарегистрированы или неверный пароль!');
        console.log('нету юзера')
    }
});


