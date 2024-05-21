import { getRandomColor } from "../../utils/randomColor.js";

export function Pentagon() {
  const pentagon = document.createElement("div");
  pentagon.classList.add("pentagon");
  pentagon.addEventListener("click", () => {
    const pentagonRandomColor = getRandomColor();
    pentagon.style.backgroundColor = getRandomColor();
  });
  return pentagon;
}
