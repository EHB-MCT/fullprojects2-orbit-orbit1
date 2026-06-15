let mapLocation = document.querySelector("#mapLocation");
let mapAddress = document.querySelector("#mapAddress");
let mapDate = document.querySelector("#mapDate");
let mapTitle = document.querySelector("#mapTitle");
let themeColor = document.querySelector("#themeColor");
let mapDescription = document.querySelector("#mapDescription");

function updateOverlay(element) {
	mapLocation.innerText = element.dataset.location;
	mapAddress.innerText = element.dataset.address;
	mapDate.innerText = element.dataset.date;
	mapTitle.innerText = element.dataset.title;
	mapDescription.innerText = element.dataset.description;
	mapDescription.style.paddingTop = "40px";
	themeColor.setAttribute("fill", element.dataset.color);
}

document.querySelectorAll(".clickableEvent").forEach(function (region) {
	region.addEventListener("click", function () {
		updateOverlay(region);
	});
});
