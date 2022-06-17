(function() {
    
    const slider = [...document.querySelectorAll('.textimony_body')];
    const buttonsNext = document.querySelector("#next");
    const buttonBefore = document.querySelector("#before");
    let value;

    buttonsNext.addEventListener('click', ()=>{
        changePosition(1);
    })

    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    })

    const changePosition = (add)=>{
        const currentTextimony = document.querySelector('.textimony_body--show').dataset.id;
        value = Number(currentTextimony);
        value+= add;

        slider[Number(currentTextimony)-1].classList.remove('textimony_body--show');
        if (value === slider.length+1 || value === 0){
            value = value === 0 ? slider.length : 1;
        }
        slider[value-1].classList.add('textimony_body--show') ;
    }
    
})();