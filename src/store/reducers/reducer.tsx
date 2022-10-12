import uuidv4 from "uuidv4";
import { InitialStateType, initialState } from "../contexts/context";

export type ActionType = {
  type: string;
  payload: {
    values: any;
  };
};

// different reducer action keys
export const [
  CREATE_NEW_CANDIDATE,
  REMOVE_CANDIDATE,
  UPDATE_CANDIDATE_INFO,
  SET_FILTERED_CANDIDATE_LIST,
  REMOVE_FILTERED_CANDIDATE_LIST,
] = [
  "CREATE_NEW_CANDIDATE",
  "REMOVE_CANDIDATE",
  "UPDATE_CANDIDATE_INFO",
  "SET_FILTERED_CANDIDATE_LIST",
  "REMOVE_FILTERED_CANDIDATE_LIST",
];

export const reducer = (
  state: InitialStateType["state"],
  action: ActionType
) => {
  switch (action.type) {
    case CREATE_NEW_CANDIDATE:
      const newCandidate = { id: uuidv4(), ...action.payload.values };
      return {
        ...state,
        candidates: state?.candidates?.length
          ? [newCandidate, ...state.candidates]
          : [newCandidate],
      };
    case REMOVE_CANDIDATE:
      const filteredList = state?.candidates
        ? state.candidates.filter(
            (candidate) => candidate.id !== action.payload.values
          )
        : null;

      return {
        ...state,
        candidates: filteredList,
        filteredCandidates: initialState.state.filteredCandidates,
        searchText: initialState.state.searchText,
      };
    case UPDATE_CANDIDATE_INFO:
      return {
        ...state,
        candidates: state?.candidates
          ? state.candidates.map((candidate) => {
              if (candidate.id === action.payload.values.id) {
                return action.payload.values;
              } else {
                return candidate;
              }
            })
          : [],
      };
    case SET_FILTERED_CANDIDATE_LIST:
      return { ...state, ...action.payload.values };

    case REMOVE_FILTERED_CANDIDATE_LIST:
      return {
        ...state,
        filteredCandidates: initialState.state.filteredCandidates,
        searchText: initialState.state.searchText,
      };

    default:
      return state;
  }
};
