let contentDialog = document.getElementById("image-present-dialog");
let actualNumberOfIndex;

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

// Loads the images on the page

function load() {
  let thumbnailContainer = document.getElementById("thumbnail-section");

arrayImages.forEach((src, index) => {
    thumbnailContainer.innerHTML += `   <button 
                                            onclick="openDialog(${index})"
                                            class="thumbnail-btn">
                                        <img 
                                            id="image-${index}" 
                                            class="thumbnail-img" 
                                            src=${src}   
                                            alt="Thumbnail ${index + 1}" 
                                            id="image1">
                                        </button>`;
  });  
}

// Open dialog
function openDialog(index) {
  let contentDialog = document.getElementById("image-present-dialog");
  contentDialog.showModal();
  openImageInDialog(index);
  let numberOfImage = index;
  imgNumberInDialog(arrayImages, numberOfImage);
}

// Close dialog
function closeDialog() {
  let contentDialog = document.getElementById("image-present-dialog");
  contentDialog.close();
  closeImageInDialog();
}

const dialog = document.getElementById("image-present-dialog");
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) {
    closeDialog();
  }
});

// load and remove image in dialog
function openImageInDialog(index) {
  let imgContainer = document.getElementById("dialog-section");
  let src = arrayImages[index];
  actualNumberOfIndex = index;
  const img = document.createElement("img");
  img.src = src;
  img.alt = `Thumbnail ${index + 1}`;
  img.id = `container-img`;
  imgContainer.appendChild(img);
  imgNumberInDialog(arrayImages, index);
}

function closeImageInDialog() {
  let img = document.getElementById("container-img");
  console.log(img);
  img.remove(img);
}

// Image name and number
function imgNumberInDialog(array, index) {
  const ELEMENT = document.getElementById("img-number");
  ELEMENT.innerHTML = `${index + 1} / ${array.length}`;

  const IMAGE_NAME = document.getElementById("image-name");
  IMAGE_NAME.innerText = `Image ${index + 1}`;
}

// Next img
function nextImg() {
  closeImageInDialog();
  actualNumberOfIndex += 1;
  if (actualNumberOfIndex > arrayImages.length - 1) {
    actualNumberOfIndex = 0;
    openImageInDialog(actualNumberOfIndex);
  } else {
    openImageInDialog(actualNumberOfIndex);
  }
}

// last img
function lastImg() {
  closeImageInDialog();
  actualNumberOfIndex -= 1;
  if (actualNumberOfIndex == -1) {
    actualNumberOfIndex = arrayImages.length - 1;
    openImageInDialog(actualNumberOfIndex);
  } else {
    openImageInDialog(actualNumberOfIndex);
  }
}

// Keyboadfunctions
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    lastImg();
  } else if (event.key === "ArrowRight") {
    nextImg();
  } else if (event.key === "Escape") {
    closeDialog();
  }
});
