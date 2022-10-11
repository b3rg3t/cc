import React from "react";

interface LabelWrapperProps {
  children: React.ReactElement;
  label: string;
  name: string;
  required?: boolean;
  errors?: any;
}

const LabelWrapper = ({
  children,
  label,
  required,
  name,
  errors,
}: LabelWrapperProps) => (
  <label htmlFor={name}>
    {`${label}${required ? " *" : ""}`}
    {children}
    {errors?.[name] && (
      <div className="d-flex w-100 justify-content-center">
        <p className="text-danger mb-0">
          * Detta fältet är obligatoriskt att fylla i
        </p>
      </div>
    )}
  </label>
);

export default LabelWrapper;
