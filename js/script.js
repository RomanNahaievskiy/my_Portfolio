
const skillItem = document.querySelector('.item-skill');
document.addEventListener("click", function (event) {
    if (event.target.closest('.item-skill')) {
        const skillItem = event.target.closest('.item-skill');
        skillItem.classList.toggle('active');
    }
});

// decor
const decorContEl = document.querySelector('.decor-digit-container');
let div = document.createElement('div');
div.className = 'decor-digit-columns';



decorContEl.append(div);
// клоную 8 разів
for (let index = 0; index < 7; index++) {

    decorContEl.append(document.querySelector('.decor-digit-columns').cloneNode(false));
}
// отримую елемент з колекції  та заповнюю його рандомними числами
let objOfEl = document.querySelectorAll(".decor-digit-columns");

objOfEl.forEach(element => {

    for (let i = 0; i < 128; i++) {
        // заповнюю ними віртуальний елемент
        element.innerHTML += `<span>${Math.round(Math.random())}</span>`;
    }
});


