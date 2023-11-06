const refs = {
  form: document.querySelector(".login-form"),
  btnSubmit: document.querySelector('[type="submit"]'),
  email: document.querySelector('[type="email"]'),
  password: document.querySelector('[type="password"]'),
};

const onSubmitForm = (event) => {
  event.preventDefault();
  if (
    (event.type === "submit" &&
      event.currentTarget.elements.email.value === "") ||
    (event.type === "submit" &&
      event.currentTarget.elements.password.value === "")
  ) {
    window.alert("All form fields must be filled in");
  }
  const emailValue = event.currentTarget.elements.email.value;
  const passwordValue = event.currentTarget.elements.password.value;
  const formData = {
    [refs.email.name]: emailValue.trim(),
    [refs.password.name]: passwordValue.trim(),
  };
  console.log(formData);
  refs.form.reset();
};

refs.form.addEventListener("submit", onSubmitForm);
