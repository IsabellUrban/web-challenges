// Implement the launch sequence function here and export it as the default export.
import { loadPayload } from "./core/load.js";
import { fuel } from "./core/fuel.js";

export default function launch() {
  const launch = document.querySelector("#body");
}

launch.append(loadPayload(), fuel());
