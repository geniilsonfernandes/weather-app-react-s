import React, { createContext, useContext, useEffect, useState } from "react";
import { getForecast } from "../../services/api";
import P from "prop-types";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [sucess, setSucess] = useState(false);
  const [currentPlace, setCurrentPlace] = useState("false");

  const getForecastByPlace = async (queryValue) => {
    setLoading(true);
    setError(null);
    try {
      const data = await getForecast(queryValue);
      const { coord, name } = data;
      localStorage.setItem("currentPlace", JSON.stringify({ coord, name }));
      setCurrentPlace({ coord, name });
      setSucess(true);
      setData({ ...data });
      setError(false);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setSucess(false);
      setLoading(false);
    }
  };

  useEffect(() => {
    const currentPlaceLocalStringify = localStorage.getItem("currentPlace");
    const currentPlaceLocal = JSON.parse(currentPlaceLocalStringify);
    if (currentPlaceLocal) {
      getForecastByPlace(currentPlaceLocal.name);
      setCurrentPlace(currentPlaceLocal);
    }
  }, []);

  return (
    <DataContext.Provider
      value={{
        loading,
        error,
        data,
        getForecastByPlace,
        currentPlace,
        sucess,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: P.node,
};

export const useDataContext = () => {
  return useContext(DataContext);
};
