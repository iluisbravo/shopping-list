var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var shoppingList = document.querySelector("#shopping-list");

var itemsShoppingList = shoppingList.children;
if(itemsShoppingList.length > 0){
	for (let i = 0; i < itemsShoppingList.length; i++) {
		const li = itemsShoppingList[i];
		var p = document.createElement("p");
		p.appendChild(document.createTextNode(li.textContent));
		li.textContent = "";
		li.appendChild(p);
		addClickEventDoneToItemList(p);	
		addDeleteButtonToItemList(li);
	}
}

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var p = document.createElement("p");
	p.appendChild(document.createTextNode(input.value));
	addClickEventDoneToItemList(p);
	li.appendChild(p);
	addDeleteButtonToItemList(li);	
	shoppingList.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function addClickEventDoneToItemList(element){
	element.addEventListener("click",toggleDoneItemClass);
}

function toggleDoneItemClass(event){
	var element = event.target;
	element.classList.toggle("done");
}

function addDeleteButtonToItemList(element){
	var deleteButton = document.createElement('button');
	deleteButton.appendChild(document.createTextNode("x"));
	deleteButton.addEventListener("click", clickDeleteElement);
	element.appendChild(deleteButton);
}

function clickDeleteElement(element){
	var button = element.target;
	var li = button.parentNode;
	li.remove();
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
