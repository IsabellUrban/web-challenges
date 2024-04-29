console.clear();

const form = document.querySelector('[data-js="form"]');
console.log("form: ", form);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  //   console.log("sanity check");
  const formElements = event.target.elements;
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log("data: ", data);
  event.target.reset();
  formElements.firstName.focus();
});

const age = formElements.age.value;
const badness = formElements.badness.value;
const total = Number(age) + Number(badness);
console.log("total: ", total);
