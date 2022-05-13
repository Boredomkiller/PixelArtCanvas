// Needed pixel canvas
const pixelCanvas = document.querySelector('#pixelCanvas')
// Select color input
const colorPallet = document.querySelector('#colorPicker')
// Select size input
const height = document.querySelector('#inputHeight')
const width = document.querySelector('#inputWidth')
// When size is submitted by the user, call makeGrid()
const submit = document.querySelector('#submit')
const sizePicker = document.querySelector('#sizePicker')
function makeGrid(r, c){
	
	let height = document.querySelector('#inputHeight').value
	let width = document.querySelector('#inputWidth').value
	// Check for grid color and clear if any is present
	while (pixelCanvas.firstChild) {
		pixelCanvas.removeChild(pixelCanvas.firstChild)
	}
    // Nested Loops!!!
    for(let r = 1; r <= height; ++r){
        let row = document.createElement("tr");
        pixelCanvas.appendChild(row);
        for (let c = 1; c <= width; ++c){
            let column = document.createElement("td");
            row.appendChild(column);
			// Fills cells with color.
			column.addEventListener('mousedown', function(){
				let color = document.querySelector("#colorPicker").value;
				this.style.backgroundColor = color;
            })
        }
    }
}

makeGrid(4, 4);


sizePicker.addEventListener('submit', function(e){
	e.preventDefault();
	makeGrid();
});

