
const skillItem = document.querySelector('.item-skill');
document.addEventListener("click", function (event) {
    if (event.target.closest('.item-skill')) {
        const skillItem = event.target.closest('.item-skill');
        skillItem.classList.toggle('active');
    }
});

// decor
