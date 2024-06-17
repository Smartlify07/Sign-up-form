/* eslint-disable react/prop-types */
import { useField } from "formik";
import { BsExclamationCircle } from "react-icons/bs";

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-1 w-full">
      <label htmlFor={props.name}>{label}</label>
      <input
        className={`px-4 py-3 rounded-sm border border-gray-200 ${
          meta.touched && meta.error && "border-red-500 "
        } focus:outline-none lg:py-3 lg:placeholder:text-sm lg:text-sm`}
        {...props}
        {...field}
      />

      {meta.touched && meta.error && (
        <>
          <p className="px-1 flex items-center gap-1 font-semibold text-red-500 text-sm lg:text-xs">
            <BsExclamationCircle className="font-semibold inline" />
            {meta.error}
          </p>
        </>
      )}
    </div>
  );
};

export default TextInput;
