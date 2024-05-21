import { getRandomColor } from "../../utils/randomColor.js";

export function Circle() {
  const circle = document.createElement("div");
  circle.classList.add("circle");
  circle.addEventListener("click", () => {
    const circleRandomColor = getRandomColor();
    circle.style.backgroundColor = getRandomColor();
  });
  return circle;
}
