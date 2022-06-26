import { useEffect, useState } from "react";

export const usePersistPlaces = () => {
  const [recentsPlaces, setRecentsPlaces] = useState(() => {
    const storageValue = localStorage.getItem("places");

    if (storageValue) return JSON.parse(storageValue);
    return [];
  });

  useEffect(() => {
    localStorage.setItem("places", JSON.stringify(recentsPlaces));
  }, [recentsPlaces]);

  function addPlace(newValue) {
    setRecentsPlaces(newValue);
  }

  return { recentsPlaces, addPlace };
};
