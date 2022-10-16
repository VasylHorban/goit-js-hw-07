import { galleryItems } from "./gallery-items.js";

const galleryElements = galleryItems.map(item => {
  return `<a class="gallery__item" href="${item.original}"><img class="gallery__image" title="${item.description}" alt="${item.description}" 
    src="${item.preview}"/></a>`;
});

document
  .querySelector(".gallery")
  .insertAdjacentHTML("afterbegin", galleryElements.join(""));

new SimpleLightbox(".gallery a", { captionDelay: 250 });
