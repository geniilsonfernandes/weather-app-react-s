import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import api from "../../services/api";
import P from "prop-types";

export const DataContext = createContext();

const actions = {
  addHitory: (item) => ({ type: "ADD_NEW_PLACE", payload: item }),
  getStorage: (item) => ({ type: "GET_LOCAL_STORAGE", payload: item }),
  removePlace: (item) => ({ type: "REMOVE_PLACE", payload: item }),
};

const initialState = {
  currentPlace: {},
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_NEW_PLACE": {
      localStorage.setItem("currentPlace", JSON.stringify(action.payload));
      return {
        currentPlace: action.payload,
      };
    }
    case "GET_LOCAL_STORAGE": {
      const currentPlace = localStorage.getItem("currentPlace");
      return {
        currentPlace: currentPlace ? JSON.parse(currentPlace) : {},
      };
    }
    case "REMOVE_PLACE": {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
}

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch(actions.getStorage());
  }, []);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [sucess, setSucess] = useState(false);

  const getForecastByPlace = async (queryValue) => {
    setLoading(true);
    setError(null);
    try {
      const placeReponse = await api.get("weather", {
        params: {
          q: queryValue,
          lang: "en",
          appid: process.env.REACT_APP_API_KEY,
          units: "metric",
        },
      });
      const { coord, id, name } = placeReponse.data;
      const forecastReponse = await api.get("onecall", {
        params: {
          ...coord,
          lang: "en",
          appid: process.env.REACT_APP_API_KEY,
          units: "metric",
          exclude: "hourly,minutely",
        },
      });
      dispatch(actions.addHitory({ coord, name }));
      setData({ ...forecastReponse.data, id, name, coord });
      setError(false);
      setSucess(true);
      setLoading(false);
    } catch (error) {
      const errorMessage = error.response.data.message;
      setError(errorMessage);
      setSucess(false);
      setLoading(false);
    }
  };
  useEffect(() => {
    const currentPlaceLocal = localStorage.getItem("currentPlace");
    if (currentPlaceLocal)
      getForecastByPlace(JSON.parse(currentPlaceLocal).name);
  }, []);

  return (
    <DataContext.Provider
      value={{ loading, error, data, getForecastByPlace, state, sucess }}
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
