import uuidv4 from "uuidv4";
import { InitialStateType, initialState, candidate } from "../contexts/context";

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
  const filteredCandidatesBySearch = (
    candidates: candidate[],
    searchText: string
  ) => {
    const transformText = searchText.toLowerCase().trim();
    const filteredCandidates = candidates?.filter((candidate) => {
      return (
        candidate.name.toLowerCase().trim().includes(transformText) ||
        candidate.age.toLowerCase().trim().includes(transformText) ||
        candidate.email.toLowerCase().trim().includes(transformText) ||
        candidate.adress.toLowerCase().trim().includes(transformText) ||
        candidate.activeStep?.label.toLowerCase().trim().includes(transformText)
      );
    });
    return filteredCandidates;
  };

  const removeCandidateById = (id: string) => {
    const filteredList = state?.candidates
      ? state.candidates.filter((candidate) => candidate.id !== id)
      : null;
    return filteredList;
  };

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
      const filteredList = removeCandidateById(action.payload.values);

      if (state.searchText.length && filteredList) {
        return {
          ...state,
          candidates: filteredList,
          filteredCandidates: filteredCandidatesBySearch(
            filteredList,
            state.searchText
          ),
        };
      }

      return {
        ...state,
        candidates: filteredList,
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
      return {
        ...state,
        filteredCandidates:
          state.candidates &&
          filteredCandidatesBySearch(
            state.candidates,
            action.payload.values.searchText
          ),
        searchText: action.payload.values.searchText,
      };

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
