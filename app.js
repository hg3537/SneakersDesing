// increase or decrease number
let increaseBtn = document.querySelector('.increase');
let decreaseBtn = document.querySelector('.decrease');
let countNmb = document.querySelector('.count-number');
let fackNmd=0
increaseBtn.addEventListener(`click`, () =>
{
    countNmb.textContent = ++fackNmd

});
decreaseBtn.addEventListener(`click`, () =>
{
    countNmb.textContent > 0 ? countNmb.textContent = --fackNmd : 0;

});

// change main img
let mainImg = document.querySelector('.main-img');
const smImgs = document.querySelectorAll('.s-img');

smImgs.forEach((img) =>
{
    img.addEventListener(`click`, (e) =>
    {
        let id = e.target.id;
        mainImg.src = img.src;
        if (id === img.id)
        {
            smImgs.forEach(img =>
            {
                img.classList.remove(`active-Img`);
            });
            img.classList.add(`active-Img`);
        }
        
    });
});
// add cart
let CartIcon = document.querySelector(`.fa-cart-plus`)
let AddBtn = document.querySelector(`.add-btn`)

AddBtn.addEventListener(`click`, () =>
{
    if (countNmb.textContent >= 1) {
        CartIcon.classList.add(`active`);
        AddBtn.classList.add(`added`);
        document.querySelector(`.empty`).classList.add(`d-none`);
        document.querySelector(`.box`).classList.remove(`d-none`)
        document.querySelector(`.pisces`).textContent = countNmb.textContent;
    } else 
    {
        CartIcon.classList.remove(`active`);
        AddBtn.classList.remove(`added`);
        document.querySelector(`.empty`).classList.remove(`d-none`);
        document.querySelector(`.box`).classList.add(`d-none`);
        document.querySelector(`.pisces`).textContent = countNmb.textContent;
    }
    
  
});
CartIcon.addEventListener(`click`, () =>
{
    document.querySelector(`.cart-char`).classList.toggle(`d-none`)
});
document.querySelector(`.fa-trash`).addEventListener(`click`, () =>
{
    CartIcon.classList.remove(`active`);
    AddBtn.classList.remove(`added`);
    document.querySelector(`.empty`).classList.remove(`d-none`);
    document.querySelector(`.box`).classList.add(`d-none`);
    document.querySelector(`.pisces`).textContent = countNmb.textContent;
})