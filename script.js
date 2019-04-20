let idCount = 1
document.getElementById('button-1i').addEventListener('click',addElement)
function addElement () { 
  // create a new div element 
  var newDiv = document.createElement("div");
  // and give it some content 
  let textInput=document.getElementById("input-1i").value
  var newContent = document.createTextNode(`text:${textInput}`); 
  // add the text node to the newly created div
  newDiv.appendChild(newContent);  
  newDiv.setAttribute("id",`div-${idCount}i`)
  idCount++
  // add the newly created element and its content into the DOM 
  var currentDiv = document.getElementById("div1i"); 
  document.body.insertBefore(newDiv, currentDiv); 
}
