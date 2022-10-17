const SCREEN = document.querySelector(".screen");
const SCREEN_ID = document.getElementById("screen");
const RESETBUTTON = document.querySelector(".reset");
const GRIDSIZE = 16;

SCREEN_ID.style.gridTemplateColumns = "repeat(" + GRIDSIZE + ", auto)";

// Adds a an event listener to the reset button
RESETBUTTON.addEventListener("click", () =>{
    reset();
});

// Creates all the required number of cells for the grid
let size = GRIDSIZE*GRIDSIZE;
for(i=0; i<size; i++){
    const CELL = document.createElement("div");
    CELL.classList.add("cell-" + i);
    CELL.classList.add("grid-cell");
    CELL.addEventListener("mouseover", () =>
    {
        changeColor(CELL);
    });
    if(i==0){
        CELL.style.borderRadius = "10px 0 0 0";
    }
    else if(i==GRIDSIZE-1){
        CELL.style.borderRadius = "0 10px 0 0";
    }
    else if(i==size-GRIDSIZE){
        CELL.style.borderRadius = "0 0 0 10px";
    }
    else if(i==size-1){
        CELL.style.borderRadius = "0 0 10px 0";
    }
    SCREEN.appendChild(CELL);
}


// Changes the cell color 
function changeColor(cell){
    cell.style.backgroundColor = "black";
    cell.style.border = "0.5px solid white";
}

// Resets the board
function reset(){
    document.querySelectorAll("div.grid-cell").forEach(element =>{
        element.style.backgroundColor = "#D1D1D9";
        element.style.border = "0.5px solid black";
    });

}
