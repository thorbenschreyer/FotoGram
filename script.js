let contentDialog = document.getElementById("image-present-dialog")

    let arrayImages = [
    "./img/photo_album/img_1.jpg",
    "./img/photo_album/img_2.jpg",
    "./img/photo_album/img_3.jpg",
   "./img/photo_album/img_4.jpg",
    "./img/photo_album/img_5.jpg",
    "./img/photo_album/img_6.jpg",
    "./img/photo_album/img_7.jpg",
    "./img/photo_album/img_8.jpg",
    "./img/photo_album/img_9.jpg",
    "./img/photo_album/img_10.jpg",
    "./img/photo_album/img_11.jpg",
    "./img/photo_album/img_12.jpg",
];

function load() {
    let thumbnailContainer = document.getElementById("thumbnail-section")

arrayImages.forEach((src, index) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = `Thumbnail ${index + 1}`;
    img.classList.add("thumbnail-img");

    thumbnailContainer.appendChild(img);
});
}


function openDialog () {
    let contentDialog = document.getElementById("image-present-dialog")
    contentDialog.showModal()
    imgNumberInDialog(arrayImages)
}

function closeDialog () {
    let contentDialog = document.getElementById("image-present-dialog")
    contentDialog.close()
}


function imgNumberInDialog(array) {
  const el = document.getElementById("img-number");
  el.innerHTML = `1 / ${array.length}`;
}

function imgNumberInDialog(array) {
    let neww = document.getElementById("img-number")
    neww.innerHTML = `<p class="img-number" id="img-number"> 1 / ${array.length}</p>`
}