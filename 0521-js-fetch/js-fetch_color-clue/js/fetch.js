import { setColorToGuess, getRandomHexCode } from "./utils.js";

export async function fetchNewColor() {
  const hexCode = getRandomHexCode();
  const colorApiUrl = await fetch(
    `https://www.thecolorapi.com/id?hex=${hexCode}`
  );
  const data = await colorApiUrl.json();
  console.log(data);
  const closestNameHex = data.name.closest_named_hex;
  const colorName = data.name.value;

  setColorToGuess(closestNameHex, colorName);
  /**
   * Hint 1:
   * Use the fetch API to get the hex value and the name of the closest
   * named color to the randomly generated `hexCode` from the color API.
   * These values can be found in `.name.closest_named_hex` and
   * `.name.value` properties of the response data respectively.
   *
   * Hint 2:
   * Call the `setColorToGuess` function to set the color to guess.
   * The function takes two arguments:
   *  - the hex code of the closest named color
   *  - and the name of the random color
   */

  // --v-- your code here --v--

  // --^-- your code here --^--
}
