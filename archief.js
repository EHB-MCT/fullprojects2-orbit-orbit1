let IA3 = document.querySelector("#IA3");
let mapLocation = document.querySelector("#mapLocation");
let mapAddress = document.querySelector("#mapAddress");
let mapDate = document.querySelector("#mapDate");
let mapTitle = document.querySelector("#mapTitle");

IA3.addEventListener("click", function () {
	// change innertext
	mapLocation.innerText = IA3.dataset.location;
	mapAddress.innerText = IA3.dataset.address;
	mapDate.innerText = IA3.dataset.date;
	mapTitle.innerText = IA3.dataset.title;
	//change css svg color to the corresponding theme color
});
