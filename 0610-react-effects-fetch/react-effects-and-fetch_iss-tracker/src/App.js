import { useEffect, useState } from "react";
import Controls from "./components/Controls";
import Map from "./components/Map";
import "./styles.css";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

export default function App() {
  const [coords, setCoords] = useState({
    longitude: 0,
    latitude: 0,
  });

  async function getISSCoords() {
    try {
      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const fetchedCoords = await response.json();
      setCoords({
        longitude: fetchedCoords.longitude,
        latitude: fetchedCoords.latitude,
      });
    } catch (error) {
      alert("The error:", error);
    }
  }

  useEffect(() => {
    getISSCoords();

    const intervalID = setInterval(getISSCoords, 5000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  return (
    <main>
      <Map longitude={coords.longitude} latitude={coords.latitude} />
      <Controls
        longitude={coords.longitude}
        latitude={coords.latitude}
        onRefresh={getISSCoords}
      />
    </main>
  );
}
