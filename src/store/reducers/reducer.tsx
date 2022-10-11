import { InitialStateType } from "../contexts/context";

// different reducer action keys
export const [CREATE_NEW_CANDIDATE, REMOVE_CANDIDATE, UPDATE_CANDIDATE_INFO] = [
  "CREATE_NEW_CANDIDATE",
  "REMOVE_CANDIDATE",
  "UPDATE_CANDIDATE_INFO",
];

export const reducer = (state: InitialStateType["candidates"], action: any) => {
  switch (action.type) {
    case CREATE_NEW_CANDIDATE:
      return { ...state, ...action.payload.values };
    case REMOVE_CANDIDATE:
      return { ...state, ...action.payload.values };
    case UPDATE_CANDIDATE_INFO:
      return { ...state, ...action.payload.values };
    default:
      return state;
  }
};
