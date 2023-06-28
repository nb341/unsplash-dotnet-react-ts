import { useReducer, useEffect, useRef, useCallback } from "react";
import { Photo } from "../interfaces";
import { PhotoForm } from "../components/Modal/ModalComponent";
const baseUrl = "https://localhost:7170/api/";
export const LOADING = "LOADING";
export const FAILED = "FAILED";
export const SET = "SET";
type State = {
  isLoading: boolean;
  items: Photo[];
  errMess: null | string;
};
type Action =
  | {
      type: "LOADING";
    }
  | {
      type: "SET";
      payload: Photo[];
    }
  | {
      type: "FAILED";
      payload: string;
    };

function reducer(state: State, action: Action) {
  switch (action.type) {
    case LOADING:
      return { ...state, isLoading: true, errMess: null, items: [] };

    case FAILED:
      return { ...state, isLoading: false, errMess: action.payload };

    case SET:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        items: [...state.items, ...action.payload],
      };

    default:
      return state;
  }
}

function useApp(itemType: string) {
  const initialState = {
    isLoading: false,
    errMess: null,
    items: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const actionRef = useRef<Action>();
  const oldStateRef = useRef<State>();

  const myDispatch = (action: Action) => {
    actionRef.current = action;
    oldStateRef.current = state;
    dispatch(action);
  };

  const loading = () =>
    myDispatch({
      type: LOADING,
    });

  const failed = (errmess: string) =>
    myDispatch({
      type: FAILED,
      payload: errmess,
    });

  const set = (items: Photo[]) =>
    myDispatch({
      type: SET,
      payload: items,
    });

  useEffect(() => {
    const action = actionRef.current;

    if (action) {
      console.group("action: ", itemType, ": ", action.type);
      console.log("Prev State:", oldStateRef.current);
      console.log("Action:", action);
      console.log("Next State:", state);
      console.groupEnd();
    }
  }, [state, itemType]);

  return [state, loading, failed, set] as const;
}

function useThunk(itemType: string) {
  const [state, loading, failed, set] = useApp(itemType);

  const url = baseUrl + itemType;

  const fetchData = () => {
    loading();

    fetch(url)
      .then(
        (response) => {
          if (response.ok) {
            return response;
          } else {
            var error = new Error(
              "Error " +
                response.status +
                ": " +
                response.statusText +
                " " +
                response.url
            );
            throw error;
          }
        },
        (error) => {
          throw error;
        }
      )
      .then((response) => response.json())
      .then((items) => set(items))
      .catch((error) => failed(error.message));
  };

  const addPhoto = (formValues: PhotoForm) => {
    loading();
    fetch("https://localhost:7170/api/photos", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "https://localhost:3000",
      },
      mode: "cors", // no-cors, *cors, same-origin
      method: "POST",
      body: JSON.stringify(formValues),
    })
      .then(
        (response) => {
          if (response.ok) {
            return response;
          } else {
            var error = new Error(
              "Error " +
                response.status +
                ": " +
                response.statusText +
                " " +
                response.url
            );
            throw error;
          }
        },
        (error) => {
          throw error;
        }
      )
      .then((response) => response.json())
      .then((response) => set(response))
      .catch((error) => {
        failed("Post photos " + error.message);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return [state, addPhoto] as const;
}

export const usePhotos = () => useThunk("photos");
