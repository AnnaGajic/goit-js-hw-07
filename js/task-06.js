const inputElem = document.querySelector('input#validation-input')

inputElem.addEventListener('blur', onBlur);

function onBlur() {
    if (inputElem.value.length === parseInt(inputElem.getAttribute("data-length"))) {
        inputElem.classList.remove('invalid');
        inputElem.classList.add('valid');
    } else {
        inputElem.classList.add('invalid');
        inputElem.classList.remove('valid');
    }
}




    
