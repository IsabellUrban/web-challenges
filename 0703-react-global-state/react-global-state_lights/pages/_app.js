import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

const initalLights = [
  {
    id: "1",
    name: "Living Room",
    isOn: false,
  },
  {
    id: "2",
    name: "Bedroom",
    isOn: false,
  },
  {
    id: "3",
    name: "Garage",
    isOn: false,
  },
  {
    id: "4",
    name: "Garden",
    isOn: false,
  },
  {
    id: "5",
    name: "Kitchen",
    isOn: false,
  },
  {
    id: "6",
    name: "Bathroom",
    isOn: false,
  },
  {
    id: "7",
    name: "Porch",
    isOn: false,
  },
  {
    id: "8",
    name: "Office",
    isOn: false,
  },
];

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState(initalLights);

  console.log("Lights", lights);

  function handleToggle(lightsID) {
    setLights(
      lights.map((light) => {
        return light.id === lightsID ? { ...light, isOn: !light.isOn } : light;
      })
    );
  }

  return (
    <Layout>
      <GlobalStyle />
      <Component {...pageProps} onToggle={handleToggle} lights={lights} />
    </Layout>
  );
}
