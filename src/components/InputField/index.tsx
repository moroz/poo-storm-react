import { HTMLProps } from "react";
import { UseFormRegister } from "react-hook-form";
import clsx from "clsx";
import classes from "./InputField.module.sass";

interface Props extends HTMLProps<HTMLInputElement> {
  register: UseFormRegister<any>;
  label: string;
  name: string;
}

const InputField = ({ label, required, id, name, register }: Props) => {
  return (
    <div className={clsx(classes.root, { [classes.required]: required })}>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...register(name)} />
    </div>
  );
};

export default InputField;
