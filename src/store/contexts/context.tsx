import React, { createContext, useReducer } from "react";

import { ActionType, reducer } from "../reducers/reducer";

import { choiceListValue } from "../../components/utils/choiceList";
import { defaultCandidates } from "../../components/utils/defaultCandidates";

export type candidate = {
  id: string;
  name: string;
  age: string;
  email: string;
  adress: string;
  activeStep: choiceListValue | null;
};

export type InitialStateType = {
  state: {
    candidates: candidate[] | null;
    filteredCandidates: candidate[] | null;
    searchText: string;
  };
};

export const initialState = {
  state: {
    candidates: defaultCandidates,
    filteredCandidates: null,
    searchText: ""
  },
};

const Context = createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

const mainReducer = ({ state }: InitialStateType, action: ActionType) => ({
  state: reducer(state, action),
});

const Provider = ({ children }: any) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export { Context, Provider };
