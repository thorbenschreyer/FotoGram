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

// Lädt die Bilder auf der Seite
function load() {
    let thumbnailContainer = document.getElementById("thumbnail-section")

arrayImages.forEach((src, index) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = `Thumbnail ${index + 1}`;
    img.classList.add("thumbnail-img");
    img.id = `image-${index}`
    img.addEventListener("click", () => {
    openDialog(index);
    });
    thumbnailContainer.appendChild(img);
});
}

// Öffnet den Dialog
function openDialog (index) {
    let contentDialog = document.getElementById("image-present-dialog")
    contentDialog.showModal()
    openImageInDialog (index)
    let numberOfImage = index
    imgNumberInDialog(arrayImages, numberOfImage)
}

// Schliesst den Dialog
function closeDialog () {
    let contentDialog = document.getElementById("image-present-dialog")
    contentDialog.close()
    closeImageInDialog()
}

// Lädt und entfernt das Image im Dialog
let actualNumberOfIndex;
function openImageInDialog (index) {
    let imgContainer = document.getElementById("dialog-section")
    let src = arrayImages[index]
    actualNumberOfIndex = index;
    const img = document.createElement("img")
    img.src = src
    img.alt = `Thumbnail ${index + 1}`
    img.id = `container-img`;
    imgContainer.appendChild(img)
    imgNumberInDialog(arrayImages, index)
}

function closeImageInDialog () {
    let img = document.getElementById("container-img");
    console.log(img)
    img.remove(img);
}

// Definiert den Bildnamen und bildnummer von maximaler Anzahl
function imgNumberInDialog(array, index) {
  const el = document.getElementById("img-number");
  el.innerHTML = `${index+1} / ${array.length}`;

  const imageName = document.getElementById("image-name")
  imageName.innerText = `Image ${index + 1}`
}

// Nächstes Bild
function nextImg() {
    closeImageInDialog();
    actualNumberOfIndex += 1
    if (actualNumberOfIndex > arrayImages.length - 1) {
        actualNumberOfIndex = 0
        openImageInDialog(actualNumberOfIndex)
    } else {
        openImageInDialog(actualNumberOfIndex)
    }


    

    
}

// Vorheriges Bild
function lastImg() {
    closeImageInDialog();
    actualNumberOfIndex -= 1
    if (actualNumberOfIndex == -1 ) {
      actualNumberOfIndex = arrayImages.length - 1
       openImageInDialog(actualNumberOfIndex)
    } else {
      openImageInDialog(actualNumberOfIndex)
    }
}