import { galleryItems } from "./gallery-items.js";

let instance = null;
const gallery = document.querySelector(".gallery");
const galleryElements = galleryItems.map(item => {
  return `<div class="gallery__item"><a class="gallery__link" href="${item.original}"><img class="gallery__image" alt="${item.description}" 
  src="${item.preview}" data-source="${item.original}"/></a></div>`;
});

const handleSelectImg = e => {
  e.preventDefault();
  instance = basicLightbox.create(
    `<img src="${e.target.dataset.source}" width="800" height="600">`
  );
  instance.show();
};

const handleHideImg = e => {
  if (e.key === "Escape" && instance) {
    instance.close();
  }
};

gallery.insertAdjacentHTML("afterbegin", galleryElements.join(""));

gallery.addEventListener("click", handleSelectImg);
document.addEventListener("keydown", handleHideImg);
