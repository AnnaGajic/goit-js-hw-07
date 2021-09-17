

let count = 0;
let counterValue = document.querySelector('#value');
counterValue.textContent = count;

let btnSubstract = document.querySelector('button[data-action="decrement"]')
let btnAdd = document.querySelector('button[data-action="increment"]');


btnAdd.addEventListener('click', () => {
    document.getElementById("value").textContent = count += 1;
});
btnSubstract.addEventListener('click', () => {
    document.getElementById("value").textContent = count -= 1;
});





    
    
    
    
    
    


