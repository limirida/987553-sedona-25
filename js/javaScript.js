var button = document.querySelector(".search-hotel__legend");
	var popup = document.querySelector(".form-search");
		button.addEventListener("click", function (evt) {
		evt.preventDefault();
		popup.classList.toggle("modal-show");
});
