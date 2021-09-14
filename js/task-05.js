const refs = {
    inputElem : document.querySelector('input#name-input'),
    spanElem : document.querySelector('span#name-output')
}
console.log(refs);

refs.inputElem.addEventListener('input', onInputChange)

function onInputChange() {
    if (refs.inputElem.value === "") {
        refs.spanElem.textContent = "незнакомец";
    } else {
        refs.spanElem.textContent = refs.inputElem.value;
    }
}

