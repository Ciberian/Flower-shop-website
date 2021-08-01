var photos = ["img/basket-1.jpg", "img/basket-2.jpg", "img/basket-3.jpg", "img/basket-4.jpg"]

var thumbnails = document.querySelectorAll(".compositions__img-preview")
var fullPhoto = document.querySelector(".img-big")

var addThumbnailClickHandler = function (thumbnail, photo) {
	thumbnail.addEventListener("click", function () {
		fullPhoto.src = photo
	})
}

for (var i = 0; i < thumbnails.length; i++) {
	addThumbnailClickHandler(thumbnails[i], photos[i])
}
