import uuid from "uuidv4";

import { candidate } from "../../store/contexts/context";
import { choiceList } from "./choiceList";

export const defaultCandidates: candidate[] = [
  {
    id: uuid(),
    name: "Per Persson",
    age: "",
    email: "per@mail.com",
    adress: "",
    activeStep: choiceList[3],
  },
  {
    id: uuid(),
    name: "Anders Andersson",
    age: "",
    email: "anders@mail.com",
    adress: "",
    activeStep: choiceList[1],
  },
];
