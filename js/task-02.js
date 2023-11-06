const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const ulRef = document.querySelector(".gallery");

const createGalleryItem = ({ url, alt }) => {
  const galleryItemRef = document.createElement("li");
  galleryItemRef.classList.add("gallery__item");
  const galleryImgRef = document.createElement("img");
  galleryImgRef.classList.add("gallery__img");
  galleryImgRef.src = url;
  galleryImgRef.alt = alt;
  galleryItemRef.append(galleryImgRef);

  return galleryItemRef;
};

const galleryItems = images.map(createGalleryItem);

ulRef.append(...galleryItems);

const makeItemGalleryMarkup = ({ url, alt }) => {
  return `<li class="gallery__item"><img class="gallery__img"src="${url}"alt="${alt}"></li>`;
};

const makeItemsGalleryMarkup = images.map(makeItemGalleryMarkup).join("");
ulRef.insertAdjacentHTML("beforeend", makeItemsGalleryMarkup);
