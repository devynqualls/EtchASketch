const container = document.getElementById('container');
let size = prompt("enter grid size:");
let containerBoxes;
const changeSize = document.querySelector("#size");
const reset = document.querySelector("#reset");



//when size is entered make grid

function makeGrid(size){
    container.style.gridTemplateColumns =  `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows =  `repeat(${size}, 1fr)`;
    
    for (let i = 0; i < size * size; i++){
        let div = document.createElement("div");
        div.classList.add("square");
        container.appendChild(div);
    }
    containerBoxes = document.querySelectorAll(".square");
    containerBoxes.forEach((square) => {
        square.addEventListener("mouseover", (e) => {
            square.classList.add("active");
        });
    });
}

reset.addEventListener('click', (e) => {
    containerBoxes.forEach((square) => {
        square.classList.remove("active");
    });
});

changeSize.addEventListener("click", (e) => {
    containerBoxes.forEach((square) => {
        square.classList.remove("active");
    });
    size = prompt("How many squares per side do you want for your grid?");
    makeGrid(size)
});



makeGrid(size);