/* eslint-disable @typescript-eslint/no-explicit-any */
import { RegisterOptions, UseFormRegister } from 'react-hook-form';

interface InputProps {
  type: string;
  name: string;
  placeholder: string;
  error?: string;
  register: UseFormRegister<any>;
  rules?: RegisterOptions;
}

export const Input = ({ type, name, placeholder, error, rules, register }: InputProps) => {
  return (
    <div>
      <input
        className="w-full border-2 rounded-md h-11 px-2"
        type={type}
        placeholder={placeholder}
        id={name}
        {...register(name, rules)}
      />

      {error && <p className="my-1 text-red-500">{error}</p>}
    </div>
  );
};
