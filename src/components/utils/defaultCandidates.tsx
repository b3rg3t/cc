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
  {
    id: uuid(),
    name: "Pelle",
    age: "19",
    email: "pelle@mail.com",
    adress: "",
    activeStep: choiceList[4],
  },
  {
    id: uuid(),
    name: "Karl",
    age: "31",
    email: "karl@mail.com",
    adress: "",
    activeStep: choiceList[1],
  },
  {
    id: uuid(),
    name: "Gunnar",
    age: "",
    email: "gunnar@mail.com",
    adress: "",
    activeStep: choiceList[0],
  },
];
