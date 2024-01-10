var userInput = document.getElementById("listItem");
var button = document.getElementById("input");
const list = document.getElementById("list");

button.addEventListener("click", function () {
	console.log(userInput.value);

	// take user input and append to 'li'

	let item = document.createElement("li");
	item.textContent = userInput.value;
	list.appendChild(item);
});
