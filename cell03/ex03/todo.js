function newItem() {
	var place = document.getElementById("todo-list");
	document.createElement("p");
	var div = document.createElement("div");
	var todo_item = prompt("Please enter the todo item");
	
	if (todo_item != null) {
		div.className = "item";
		div.innerHTML = todo_item.replace(/</g, "&lt;");
		div.addEventListener("click", deleteItem);
		place.appendChild(div);
		function deleteItem(div) {
			var conf = confirm("Would you like to delete this item?");
			if (conf == true) {
				place.removeChild(this);
			}
		}
	}

}
