import React, { useEffect, useState, useContext } from "react";

import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import Inputs from "./Inputs";
import { Context } from "../../store/contexts/context";

type InputValues = {
  label: string;
  name: string;
  type: string;
  required: boolean;
};

const inputs: InputValues[] = [
  {
    label: "Namn",
    name: "name",
    type: "text",
    required: true,
  },
  {
    label: "Email",
    name: "email",
    type: "email",
    required: true,
  },
  {
    label: "Ålder",
    name: "age",
    type: "number",
    required: false,
  },
  {
    label: "Adress",
    name: "adress",
    type: "text",
    required: false,
  },
  {
    label: "Aktuellt rekryteringssteg",
    name: "activeStep",
    type: "text",
    required: true,
  },
];

interface MainFormProps {
  id?: string;
}

const MainForm = ({ id }: MainFormProps) => {
  const { handleSubmit, register, errors, control } = useForm();
  const { state } = useContext(Context);
  const [activeCandidate, setActiveCandidate] = useState(null as any);
  const navigate = useNavigate();

  const { candidates } = state;

  useEffect(() => {
    if (id) {
      const candidateExist = candidates?.find(
        (candidate) => candidate.id === id
      );
      if (candidateExist) {
        setActiveCandidate(candidateExist);
      }
    }
  }, [id, candidates]);

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form
      id=""
      className="bg-light border rounded p-2 d-flex flex-column"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h6 className="border-bottom pb-1">Kandidatformulär</h6>
      {inputs.map((input, index) => (
        <Inputs
          key={index}
          {...input}
          control={control}
          register={register}
          errors={errors}
          defaultValue={activeCandidate}
        />
      ))}
      <div className="d-flex justify-content-center">
        <button
          className="btn btn-primary mx-1"
          type="submit"
          title="Spara formulär"
        >
          Spara
        </button>
        <button
          className="btn btn-secondary mx-1"
          type="button"
          title="Avbryt formulär"
          onClick={() => navigate(-1)}
        >
          Avbryt
        </button>
      </div>
    </form>
  );
};

export default MainForm;
