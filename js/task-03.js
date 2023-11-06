// -- На елементі input#name-input прослуховується подія input
// -- Під час набору тексту в інпуті його поточне значення підставляється в span#name
// output як ім’я для привітання
// -- Значення в інпуті очищене від пробілів по краях
// -- Якщо інпут порожній або містить лише пробіли,
// то замість імені у спан має підставлятися рядок "Anonymous"
const refs = {
  input: document.querySelector("#name-input"),
  span: document.querySelector("#name-output"),
};

const handleChangeName = (event) => {
  if (event.currentTarget.value === "" || event.currentTarget.value === " ") {
    return (refs.span.textContent = "Anonymous");
  }
  return (refs.span.textContent = event.currentTarget.value.trim());
};

refs.input.addEventListener("input", handleChangeName);
