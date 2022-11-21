import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const body = document.querySelector("body");

galleryContainer.addEventListener("click", onImageClick);

const galleryMarkup = getGalleryItem(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

function onImageClick(evt) {
  evt.preventDefault();
  const isClickOnImage = evt.target.classList.contains("gallery__image");
  if (!isClickOnImage) {
    return;
  }
  const imageOriginRef = evt.target.dataset.source;

  const instance = basicLightbox.create(`
      <img src="${imageOriginRef}" width="1280" height="720">
  `);

  instance.show();

  document.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  });
}

function getGalleryItem(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

// 1. Создание и рендер разметки по массиву данных
// galleryItems и предоставленному шаблону элемента галереи.

// 2. Реализация делегирования на div.gallery и
// получение url большого изображения.

// 3. Подключение скрипта и стилей библиотеки модального
// окна basicLightbox.Используй CDN сервис jsdelivr и
//  добавь в проект ссылки
// на минифицированные(.min) файлы библиотеки.

// 4.Открытие модального окна по клику на элементе галереи.
// Для этого ознакомься с документацией и примерами.

// 5 .Замена значения атрибута src элемента <img в
//  модальном окне перед открытием.Используй готовую
//  разметку модального окна
// с изображением из примеров библиотеки basicLightbox.
