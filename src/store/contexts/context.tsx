import React, { createContext, useReducer } from "react";

import { reducer } from "../reducers/reducer";

import { choiceListValue } from "../../components/utils/choiceList";
import { defaultCandidates } from "../../components/utils/defaultCandidates";

export type candidate = {
  id: string;
  name: string;
  age: number | string;
  email: string;
  adress: string;
  activeStep: choiceListValue | null;
};

export type InitialStateType = {
  candidates: candidate[] | null;
};

export const initialState = {
  candidates: defaultCandidates,
};

const Context = createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

const mainReducer = ({ candidates }: InitialStateType, action: any) => ({
  candidates: reducer(candidates, action),
});

const Provider = ({ children }: any) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export { Context, Provider };
