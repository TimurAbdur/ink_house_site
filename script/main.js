const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu__list');
let isclose = true;
menuBtn.addEventListener('click',()=>{
    menu.classList.toggle('menu__list--active');
    const spanBtn = document.querySelectorAll('.menu-btn span');
    if(isclose) { 
        spanBtn[1].style.cssText = 'display: none'; 
        isclose = false; 
    }
    else {
        spanBtn[1].style.cssText = 'display: block'; 
        isclose = true;
    }

    spanBtn[0].classList.toggle('span-1');
    spanBtn[2].classList.toggle('span-3');
});


const reproductionsBtns = document.getElementsByClassName('reproductions__header-btn');
const reproductionsItems = document.getElementsByClassName('reproductions__tabs-content')
let i;
for(i = 0; i < reproductionsBtns.length; i++) {
    reproductionsBtns[i].addEventListener('click', (evt)=> {
        const tabTarget = evt.currentTarget;
        const button = tabTarget.dataset.button;

        let i;
        for(i = 0; i < reproductionsBtns.length; i++) {
            reproductionsBtns[i].classList.remove('reproductions__header-btn--active');
            reproductionsItems[i].classList.remove('reproductions__tabs-content--active');
        }

        document.querySelector(`#${button}`).classList.add('reproductions__tabs-content--active');
        console.log(button)
        tabTarget.classList.add('reproductions__header-btn--active');
    })
}