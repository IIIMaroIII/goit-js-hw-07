// Напиши скрипт створення й очищення колекції елементів з наступним функціоналом.
// 1. Є input, у який користувач вводить бажану кількість елементів.
// 2. Після натискання на кнопку Create має рендеритися(додаватися в DOM)
//   колекція з відповідною кількістю елементів і очищатися значення в інпуті.
// 3. При повторному натисканні на кнопку Create поверх старої колекції має рендеритись
// нова. Після натискання на кнопку Destroy колекція елементів має очищатися.
// 4. Після натискання користувачем на кнопку Create треба провалідувати значення в input,
//   воно має бути в межах від 1 до 100 включно.Тільки якщо воно задоволяє умову,
//     мають додаватися нові < div > елементи в DOM.

// 5. Для рендеру елементів на сторінці створи функцію createBoxes(amount),
//   яка приймає один параметр — число, що зберігає кількість елементів для рендеру.
// 6. Функція має створювати стільки < div > елементів, скільки вказано в параметрі
//    amount і додавати їх у DOM дочірніми елементами для div#boxes.
// 7. Розміри першого <div> елемента мають бути 30px на 30px.
// Кожен наступний елемент повинен бути ширшим і вищим від попереднього на 10px.
// 8. Усі елементи повинні мати випадковий колір фону.
//  Використовуй готову функцію getRandomHexColor() для отримання випадкового кольору.
const refs = {
  input: document.querySelector('[type="number"]'),
  btnCreate: document.querySelector("[data-create]"),
  btnDestroy: document.querySelector("[data-destroy]"),
  divBoxes: document.querySelector("#boxes"),
};

function onCreateBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.style.width = `${30 + i * 10}px`;
    div.style.height = `${30 + i * 10}px`;
    div.style.backgroundColor = getRandomHexColor();
    refs.divBoxes.append(div);
  }
  refs.input.value = "";
}
function onValidationInput(number) {
  number = refs.input.valueAsNumber;
  const minValueInput = refs.input.attributes.min.value;
  const maxValueInput = refs.input.attributes.max.value;
  if (number >= minValueInput && number <= maxValueInput) {
    onCreateBoxes(number);
  } else {
    window.alert(`This quantity is too large for me:)`);
    refs.input.value = "";
  }
}
function destroyBoxes() {
  let boxes = refs.divBoxes;
  while (boxes.firstChild) {
    boxes.removeChild(boxes.firstElementChild);
  }
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

refs.btnCreate.addEventListener("click", onValidationInput);
refs.btnDestroy.addEventListener("click", destroyBoxes);
