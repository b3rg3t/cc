import uuid from "uuidv4";

import { candidate } from "../../store/contexts/context";
import { choiceList } from "./choiceList";

export const defaultCandidates: candidate[] = [
  {
    id: uuid(),
    name: "Per Persson",
    age: "",
    email: "",
    adress: "",
    activeStep: null,
  },
  {
    id: uuid(),
    name: "Anders Andersson",
    age: "",
    email: "",
    adress: "",
    activeStep: choiceList[1],
  },
];
