    const inputEl = document.querySelector('input#font-size-control')
    const spanEl = document.querySelector('span#text')

inputEl.addEventListener('input', onRangeInputChange )

function onRangeInputChange () {
    spanEl.style.fontSize = `${inputEl.value}px`;
}



