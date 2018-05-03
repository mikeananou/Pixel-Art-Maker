var table = document.getElementById("pixelCanvas"); //retrieve table element
var height = document.getElementById("inputHeightK"); //retrieve Height
var width = document.getElementById("inputWidthK"); //retrieve Width
var color = document.getElementById("colorPicker"); //retrieve current color
var sizePicker = document.getElementById("sizePicker"); //retrieve form

sizePicker.onsubmit = function(event){
  event.preventDefault();
  clearGrid();
  makeGrid();
}

function makeGrid() {

for (let n = 0; n< height.value; n++) {   //while inputWidth is between 1 and value.
      const row = table.insertRow(n);
    for (let m = 0; m< width.value; m++) {  //while inputHeight is between 1 and value.
      const cell = row.insertCell(m);
}
  }
}

function clearGrid (){
    while (table.firstChild){
      table.removeChild(table.firstChild);
  }}

  

$(table).on("click", "td", function() {  // Add color on click.
    $(this).css("background-color", $("#colorPicker").val());
});
    

$(table).on("dblclick", "td", function() {    // Remove color on double click.
    $(this).removeAttr("style");
});
