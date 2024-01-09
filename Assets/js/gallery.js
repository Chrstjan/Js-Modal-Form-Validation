const galleryContainer = document.querySelector(".dinny-gallery");

const baseUrl = "./Assets/images/gallery/";

const galleryImagesArray = [
  "Dinny-01.jpg",
  "Dinny-02.jpg",
  "Dinny-03.jpg",
  "Dinny-04.jpg",
  "Dinny-05.jpg",
  "Dinny-06.jpg",
  "Dinny-07.jpg",
  "Dinny-08.jpg",
  "Dinny-09.jpg",
];

const galleryFigure = document.createElement("figure");
galleryFigure.classList.add("gallery-figure");

const galleryImageSovs = baseUrl + galleryImagesArray[0];
let galleryImageElement = document.createElement("img");
galleryImageElement.src = galleryImageSovs;
galleryImageElement.alt = "Gallery Image";

galleryFigure.appendChild(galleryImageElement);

const arrowImageSovs = "Arrow.png";

const arrowImagesContainer = document.createElement("div");
arrowImagesContainer.classList.add("arrows-container");

const leftArrow = document.createElement("img");
leftArrow.src = baseUrl + arrowImageSovs;
leftArrow.alt = "Backwards button";
leftArrow.classList.add("backwards-btn");

const rightArrow = document.createElement("img");
rightArrow.src = baseUrl + arrowImageSovs;
rightArrow.alt = "Forwards Button";
rightArrow.classList.add("forwards-btn");

arrowImagesContainer.appendChild(rightArrow);
arrowImagesContainer.appendChild(leftArrow);
galleryFigure.appendChild(arrowImagesContainer);

let galleryImageCount = 0;

rightArrow.addEventListener("click", () => {
  galleryImageCount++;

  if (galleryImageCount >= galleryImagesArray.length) {
    galleryImageCount = 0;
  }

  updateGalleryImage();
});

leftArrow.addEventListener("click", () => {
  galleryImageCount--;

  if (galleryImageCount < 0) {
    galleryImageCount = galleryImagesArray.length - 1;
  }

  updateGalleryImage();
});

const updateGalleryImage = () => {
  let updatedGalleryElement = baseUrl + galleryImagesArray[galleryImageCount];

  galleryImageElement.src = updatedGalleryElement;
};

galleryContainer.appendChild(galleryFigure);
