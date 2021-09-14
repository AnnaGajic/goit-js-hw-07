const ulElems = document.querySelector('ul').children. length;
console.log(`В списке ${ulElems} категории`);
 
document.querySelectorAll('#categories .item').forEach(elem => {
    console.log(`Категория: ${elem.querySelector("h2").textContent}`);
    console.log(`Количество элементов: ${elem.querySelectorAll("li").length}`);
});
