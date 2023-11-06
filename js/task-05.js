// Напиши скрипт, який змінює колір фону елемента < body > через інлайн - стиль
//  по кліку на button.change - color і задає це значення кольору текстовим вмістом
//   для span.color.
const refs = {
  body: document.querySelector("body"),
  btn: document.querySelector(".change-color"),
  spanColor: document.querySelector(".color"),
};

const onChangeBackgroung = (event) => {
  refs.body.style.backgroundColor = getRandomHexColor();
  refs.spanColor.textContent = refs.body.style.backgroundColor;
};

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

refs.btn.addEventListener("click", onChangeBackgroung);
