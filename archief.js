let IA3 = document.querySelector("#IA3");
let mapLocation = document.querySelector("#mapLocation");
let mapAddress = document.querySelector("#mapAddress");
let mapDate = document.querySelector("#mapDate");
let mapTitle = document.querySelector("#mapTitle");
let themeColor = document.querySelector("#themeColor");
let mapDescription = document.querySelector("#mapDescription");

IA3.addEventListener("click", function () {
	// change innertext
	mapLocation.innerText = IA3.dataset.location;
	mapAddress.innerText = IA3.dataset.address;
	mapDate.innerText = IA3.dataset.date;
	mapTitle.innerText = IA3.dataset.title;
	mapDescription.innerText = IA3.dataset.description;
	mapDescription.style.paddingTop = "40px";
	themeColor.setAttribute("fill", "#d1deb9");
	//change css svg color to the corresponding theme color
});
