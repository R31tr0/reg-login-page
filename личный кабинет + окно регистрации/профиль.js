document.addEventListener('DOMContentLoaded', function() {
    const userData = JSON.parse(localStorage.getItem('user')); 
    const nameElement = document.getElementById('userName');
    const emailElement = document.getElementById('userEmail');
    console.log('Данные из localStorage:', userData);
    
    if (Array.isArray(userData) && userData.length > 0) {//фикс с чат гпт если это массив была проверка на обьект
        const user = userData[0]; // ← теперь можно, это новая переменная внутри блока
        nameElement.textContent = user.name;
        emailElement.textContent = user.email;
        const avatarelement = document.getElementById('userAvatar');
        createAvatar(avatarelement, user.name)
    } 
    else if (userData && userData.name) {
        nameElement.textContent = userData.name;
        createAvatar(avatarElement, data.name);
    }
    else {
        nameElement.textContent = "Гость";
    }
    });
    function createAvatar (element,userName){
        colors = [

     " #1abc9c", "#16a085", "#f1c40f",
     "#f39c12", "#2ecc71", "#27ae60", 
     "#e67e22", "#d35400", "#3498db", 
     "#2980b9", "#e74c3c", "#c0392b", 
     "#9b59b6", "#8e44ad", "#34495e", 
     "#2c3e50", "#95a5a6", "#7f8c8d"]
const firstLetter = userName .charAt(0).toUpperCase();
const randomColor = colors[Math.floor(Math.random() * colors.length)];
element.textContent = firstLetter;
    element.style.backgroundColor = randomColor;
    element.style.color = "#fff";
    element.style.borderRadius = "50%";
    element.style.width = "120px";
    element.style.height = "120px";
    element.style.display = "flex";
    element.style.justifyContent = "center";
    element.style.alignItems = "center";
    element.style.fontSize = "48px";
    element.style.fontWeight = "bold";


    }
    document.getElementById('logout()').onclick = myfunction;
    function myfunction(){
    window.location.href = "untitled-1.html";
    localStorage.clear();//для регистрации нужно будет переработаьь так что бы зарегистрированных пользователей не удаляло
    };
   /* для работы этой функции нудна сборка вебак вите что угодно  я не стал этого делать заместо этого напишу свою функцию
import { FirstLetterAvatar } from 'first-letter-avatar';

const avatar = new FirstLetterAvatar({
    avatarsSelector: ".avatar",
    namesSelector: ".user-name",
    backgroundColor:["
      #1abc9c", "#16a085", "#f1c40f",
     "#f39c12", "#2ecc71", "#27ae60", 
     "#e67e22", "#d35400", "#3498db", 
     "#2980b9", "#e74c3c", "#c0392b", 
     "#9b59b6", "#8e44ad", "#34495e", 
     "#2c3e50", "#95a5a6", "#7f8c8d"],
    letterColor: "#fff",
    isCircle: true,
}).renderAvatar();
*/


