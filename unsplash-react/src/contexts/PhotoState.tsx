import React, { PropsWithChildren } from "react";
import { Photo } from "../interfaces";
import { Action, reducer } from "./PhotoReducer";

export interface StateContext {
  isLoading: boolean;
  photos: Photo[];
  error: string | null;
}
export interface Store {
  state: StateContext;
  dispatch: React.Dispatch<Action>;
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

export const usePhotos = () => React.useContext(PhotoContext);

export const StateProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = React.useReducer(reducer, defaultState);
  return (
    <PhotoContext.Provider value={{ state, dispatch }} children={children} />
  );
};
