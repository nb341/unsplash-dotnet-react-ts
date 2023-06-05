import { StateContext } from "./PhotoState";
import { Photo } from "../interfaces";
export enum ActionType {
  ADD_PHOTOS = "ADD_PHOTO",
  LOAD_PHOTOS = "LOAD_PHOTOS",
  DELETE_PHOTO = "DELETE_PHOTO",
  ERROR = "ERROR",
}

export type Action =
  | { type: ActionType.ADD_PHOTOS; payload: Photo[] }
  | { type: ActionType.LOAD_PHOTOS }
  | { type: ActionType.DELETE_PHOTO; payload: number }
  | { type: ActionType.ERROR; payload: string };

export const reducer = (state: StateContext, action: Action) => {
  switch (action.type) {
    case ActionType.LOAD_PHOTOS:
      return { ...state, isLoading: true };
    case ActionType.ADD_PHOTOS:
      return { ...state, isLoading: false, photos: action.payload };
    case ActionType.DELETE_PHOTO:
      return {
        ...state,
        photos: state.photos?.filter((ph, idx) => ph.id === action.payload),
      };
    default:
      throw new Error("Not among actions");
  }
};
