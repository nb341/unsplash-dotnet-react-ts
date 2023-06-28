import React, { PropsWithChildren, useEffect } from "react";
import { Photo } from "../interfaces";
import { Action, reducer } from "./PhotoReducer";
import { ActionType } from "./PhotoReducer";
export interface StateContext {
  isLoading: boolean;
  photos: Photo[];
  error: string | null;
}
export interface Store {
  state: StateContext;
  dispatch: React.Dispatch<Action>;
  deletePhoto?: (photoId: number) => Promise<void>;
}

const defaultState: StateContext = {
  isLoading: false,
  photos: [],
  error: null,
};
const PhotoContext = React.createContext<Store>({
  state: defaultState,
  dispatch: () => null,
});

export const usePhotosContext = () => React.useContext(PhotoContext);

export const StateProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = React.useReducer(reducer, defaultState);
  useEffect(() => {
    async function fetchData() {
      dispatch({ type: ActionType.LOAD_PHOTOS });
      try {
        const response = await fetch(`https://localhost:7170/api/photos`);
        const data = await response.json();
        // setUsers(data);
        dispatch({ type: ActionType.ADD_PHOTOS, payload: data });
        //console.log("Download complete", response);
      } catch (error) {
        dispatch({ type: ActionType.ERROR, payload: "error occurred" });
        //console.error(`Download error: ${error.message}`);
      }
    }
    fetchData();
  }, []);

  const deletePhoto = (photoId: number) => {
    //const bearer = "Bearer " + localStorage.getItem("token");

    return fetch(`https://localhost:7170/api/photos?id=${photoId}`, {
      method: "DELETE",
      credentials: "same-origin",
    })
      .then(
        (response) => {
          if (response.ok) {
            return response;
          } else {
            var error = new Error(
              "Error " + response.status + ": " + response.statusText
            );
            // error.response = response;
            throw error;
          }
        },
        (error) => {
          throw error;
        }
      )
      .then((response) => response.text())
      .then((photo) => {
        console.log("Photo Deleted", photo);
        dispatch({ type: ActionType.DELETE_PHOTO, payload: photoId });
      })
      .catch((error) => dispatch({ type: ActionType.ERROR, payload: error }));
  };
  return (
    <PhotoContext.Provider
      value={{ state, dispatch, deletePhoto }}
      children={children}
    />
  );
};
