"use strict";

// Отримання посилань для медіазапитів
var mobileLink = "viber://add?number=380991282537";
var desktopLink = "viber://chat?number=+380991282537";

// Функція для встановлення посилання в залежності від розміру екрану
function setViberLink() {
    var link = document.getElementById("viberLink");
    if (window.matchMedia("(max-width: 768px)").matches) { // Перевірка розміру екрану для мобільного
        link.href = mobileLink;
    } else {
        link.href = desktopLink;
    }
}

// Виклик функції для встановлення посилання при завантаженні сторінки і при зміні розміру вікна
window.onload = setViberLink;
window.onresize = setViberLink;

