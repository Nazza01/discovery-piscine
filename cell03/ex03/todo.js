var index = 0;

window.onload = function loadcache() {
	for (var i = 0; i < localStorage.length; i++) {
		addItem(localStorage.getItem(localStorage.key(i)));
	}
}

function addItem(text) {
	var div = document.createElement("div");
	var place = document.getElementById("todo-list");
	
	div.className = "item";														//	<div class="item"></div>
	div.innerHTML = text;														//	Whatever you write in the prompt will be replaced here: <div class="item">todo_item</div>
	div.addEventListener("click", deleteItem);									//	Add the deletion button event listener when the item is clicked
	place.appendChild(div);														//	Add the div element into the correct place (under the todo-list div)
	localStorage.setItem(String(index), text);
	index++;
}

function newItem() {
	var todo_item = prompt("Please enter the todo item");
	if (todo_item != null) {
		addItem(todo_item);
	}
}

function deleteItem() {
	var conf = confirm("Would you like to delete this item?");
	var place = document.getElementById("todo-list");

	if (conf == true) {
		localStorage.removeItem(localStorage.getItem(String(index)));			//	Remove the localstorage item
		place.removeChild(this);												//	Remove the div element
		index--;																//	Decrement the index
	}
}
