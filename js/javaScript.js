var button = document.querySelector(".search-hotel__legend");
var popup = document.querySelector(".form-search");

var form = popup.querySelector("form");

var arrival = popup.querySelector("[name=date-arrival]");
var departure = popup.querySelector("[name=date-departure]");

var isStorageSupport = true;
var storage = "";

try {
	storage = localStorage.getItem("arrival");
	storage = localStorage.getItem("departure");
} catch (err) {
	isStorageSupport = false;
}

button.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.toggle("modal-show");
});

form.addEventListener("submit", function (evt) {
	if (!arrival.value || !departure.value) {
		evt.preventDefault();
		console.log("Нужно ввести дату заезда и даты выезда");
	} else {
		if (isStorageSupport) {
			localStorage.setItem("arrival", arrival.value);
			localStorage.setItem("departure", departure.value);
		} else {
			function placeOrder() {
				document.theForm.submit();
			}
		}
	}
});
