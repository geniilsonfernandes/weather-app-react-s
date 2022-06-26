import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import api from "../../services/api";
import P from "prop-types";

const DataContext = createContext();

const actions = {
  addHitory: (item) => ({ type: "ADD_NEW_PLACE", payload: item }),
  getStorage: (item) => ({ type: "GET_LOCAL_STORAGE", payload: item }),
  removePlace: (item) => ({ type: "REMOVE_PLACE", payload: item }),
};

const initialState = {
  history: [],
  currentPlace: {},
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_NEW_PLACE":
      localStorage.setItem(
        "history",
        JSON.stringify([...state.history, action.payload])
      );
      localStorage.setItem("currentPlace", JSON.stringify(action.payload));
      return {
        ...state,
        history: [...state.history, action.payload],
        currentPlace: action.payload,
      };
    case "GET_LOCAL_STORAGE": {
      const currentPlace = localStorage.getItem("currentPlace");
      const storageValue = localStorage.getItem("history");
      return {
        ...state,
        history: storageValue ? storageValue : [],
        currentPlace: currentPlace ? currentPlace : {},
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
  const [data, setData] = useState({});
  const getForecastByPlace = async (queryValue) => {
    setLoading(true);
    setError(null);
    try {
      const placeReponse = await api.get("weather", {
        params: {
          q: queryValue,
          lang: "pt_br",
          appid: process.env.REACT_APP_API_KEY,
          units: "metric",
        },
      });
      const { coord, id, name } = placeReponse.data;
      const forecastReponse = await api.get("onecall", {
        params: {
          ...coord,
          lang: "pt_br",
          appid: process.env.REACT_APP_API_KEY,
          units: "metric",
          exclude: "hourly,minutely",
        },
      });
      dispatch(actions.addHitory({ coord, name }));
      setData({ ...forecastReponse.data, id, name, coord });
      setError(null);
      setLoading(false);
    } catch (error) {
      const errorMessage = error.response.data.message;
      const errorCode = error.code;
      setError({ errorMessage, errorCode });
      setData({});
      setLoading(false);
    }
  };
  const fetchQuery = (query) => {
    getForecastByPlace(query);
  };

  return (
    <DataContext.Provider value={{ loading, error, data, fetchQuery, state }}>
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
