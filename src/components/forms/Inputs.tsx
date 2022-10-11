import React from "react";

import { Controller } from "react-hook-form";
import Select from "react-select";

import { choiceList } from "../utils/choiceList";
import LabelWrapper from "./LabelWrapper";

interface InputsProps {
  register: any;
  name: string;
  label: string;
  type: string;
  errors: any;
  required: boolean;
  control: any;
  defaultValue?: any;
  // defaultValue?: string | number | object | null;
}

const Inputs = ({
  name,
  label,
  type,
  register,
  errors,
  required,
  defaultValue,
  control,
}: InputsProps) => {
  if (name === "activeStep") {
    return (
      <LabelWrapper
        name={name}
        label={label}
        required={required}
        errors={errors}
      >
        <Controller
          name={name}
          control={control}
          className="form-control"
          defaultValue={defaultValue?.[name]}
          rules={{ required: required }}
          render={(field) => (
            <Select
              {...field}
              options={choiceList}
              defaultValue={defaultValue?.[name]}
              placeholder="Välj"
              styles={{
                control: (provided: any) => ({
                  ...provided,
                  borderColor: `${errors?.[name] ? "red" : "#ced4da"}`,
                }),
              }}
            />
          )}
        />
      </LabelWrapper>
    );
  }
  return (
    <LabelWrapper name={name} label={label} required={required} errors={errors}>
      <>
        <input
          className="form-control"
          name={name}
          type={type}
          ref={register({ required })}
          style={{ border: errors?.[name] ? "1px solid red" : "" }}
          defaultValue={defaultValue?.[name]}
        />
      </>
    </LabelWrapper>
  );
};

export default Inputs;
