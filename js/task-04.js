
 
let counterValue = document.querySelector('#value')
let btnSubstract = document.querySelector('button[data-action="decrement"]')
let btnAdd = document.querySelector('button[data-action="increment"]')
btnAdd.addEventListener('click', () => {
    document.getElementById("value").textContent = parseInt(document.getElementById("value").textContent) + 1;
});
btnSubstract.addEventListener('click', () => {
    document.getElementById("value").textContent = parseInt(document.getElementById("value").textContent) - 1;
});





    
    
    
    
    
    


