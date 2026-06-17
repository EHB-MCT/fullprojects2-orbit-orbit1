let mapLocation = document.querySelector("#mapLocation");
let mapAddress = document.querySelector("#mapAddress");
let mapDate = document.querySelector("#mapDate");
let mapTitle = document.querySelector("#mapTitle");
let themeColor = document.querySelector("#themeColor");
let mapDescription = document.querySelector("#mapDescription");
let mainTitle = document.querySelector("#mapMainTitle");

function updateOverlay(element) {
	mapLocation.innerText = element.dataset.location;
	mapAddress.innerText = element.dataset.address;
	mapDate.innerText = element.dataset.date;
	mapTitle.innerText = element.dataset.title;
	mapDescription.innerText = element.dataset.description;
	themeColor.setAttribute("fill", element.dataset.color);
	mainTitle.innerText = "";
}

document.querySelectorAll(".clickableEvent").forEach(function (region) {
	region.addEventListener("click", function () {
		updateOverlay(region);
	});
});
