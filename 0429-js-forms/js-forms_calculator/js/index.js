console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let result;

  const formElements = event.target.elements;
  let numberA = formElements.numberA.value;
  let numberB = formElements.numberB.value;
  numberA = Number(numberA);
  numberB = Number(numberB);

  console.log("numberA: ", numberA, "numberB: ", numberB);

  if (event.target.operator.value === "addition") {
    result = add(numberA, numberB);
  } else if (event.target.operator.value === "substraction") {
    result = subtract(numberA, numberB);
  } else if (event.target.operator.value === "multiplication") {
    result = multiply(numberA, numberB);
  } else {
    result = divide(numberA, numberB);
  }

  resultOutput.textContent = result;
});
