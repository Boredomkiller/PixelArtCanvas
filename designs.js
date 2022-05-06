// Needed pixel canvas
const pixelCanvas = document.querySelector('#pixelCanvas')
// Select color input
const colorPallet = document.querySelector('#colorPicker')
// Select size input
const height = document.querySelector('#inputHeight')
const width = document.querySelector('#inputWidth')
// When size is submitted by the user, call makeGrid()
const submit = document.querySelector('#submit')
const makeGrid = (event) => {
    // Needed to stop default. max call stack size
    event.preventDefault();
    // Nested Loops!!!
    for(let r = 0; r <= height.value; r++){
        let row = document.createElement("tr");
        pixelCanvas.appendChild(row);
        for (let c = 0; c <= width.value; c++){
            let column = document.createElement("td");
            column.addEventListener('click', function(){
                column.style.backgroundColor = colorPallet.value;
            })
            row.appendChild(column);
        }
    }
    submit.removeEventListener('click', makeGrid);
}

submit.addEventListener('click', makeGrid);