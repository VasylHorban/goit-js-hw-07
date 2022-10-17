import { galleryItems } from "./gallery-items.js";

let instance = null;
const gallery = document.querySelector(".gallery");
const galleryElements = galleryItems.map(item => {
  return `<div class="gallery__item"><a class="gallery__link" href="${item.original}"><img class="gallery__image" alt="${item.description}" 
  src="${item.preview}" data-source="${item.original}"/></a></div>`;
});

const handleSelectImg = e => {
  e.preventDefault();
  if(e.target.tagName !== "IMG") return
  instance = basicLightbox.create(
    `<img src="${e.target.dataset.source}" width="800" height="600">`
  , {
    onShow: () => {
      document.addEventListener("keydown", handleHideImg);
    },
    onClose: () => {
      document.removeEventListener("keydown", handleHideImg)
    }
  });
  instance.show();
};

const handleHideImg = e => {
  if (e.key === "Escape" && instance) {
    instance.close();
  }
};

gallery.insertAdjacentHTML("afterbegin", galleryElements.join(""));

gallery.addEventListener("click", handleSelectImg);
