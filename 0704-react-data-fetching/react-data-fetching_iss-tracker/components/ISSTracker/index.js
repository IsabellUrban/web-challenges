import { useEffect, useState } from "react";
import Controls from "../Controls/index";
import Map from "../Map/index";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function ISSTracker() {
  const {
    data: coords,
    isLoading,
    error,
    mutate,
  } = useSWR("https://api.wheretheiss.at/v1/satellites/25544", fetcher, {
    refreshInterval: 5000,
  });

  if (error) return <p>Failed to load data!</p>;

  if (isLoading) return <p>Loading...</p>;

  console.log("coords", coords);

  return (
    <main>
      <Map longitude={coords.longitude} latitude={coords.latitude} />
      <Controls
        longitude={coords.longitude}
        latitude={coords.latitude}
        onRefresh={() => mutate()}
      />
    </main>
  );
}
