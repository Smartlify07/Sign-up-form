/* eslint-disable react/prop-types */
import { Form, Formik } from "formik";
import * as Yup from "yup";
import TextInput from "./TextInput";
import { useState } from "react";

const SignUpForm = ({ setSuccess }) => {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <Formik
        validationSchema={Yup.object({
          name: Yup.string()
            .min(3, "Invalid name")
            .required("Name is required"),
          email: Yup.string()
            .email("This isn't an email address. Try again")
            .required("Email address is required"),
          age: Yup.number().min(10, "You must be up to 10 years old"),
          street: Yup.string().required("Street name is required"),
          city: Yup.string().required("City name is required"),
          friend: Yup.string().required("You must have at least one friend"),
        })}
        initialValues={{
          name: "",
          email: "",
          age: "",
          street: "",
          city: "",
          friend: "",
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(false);
          console.log(values);
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
            resetForm();
            setSuccess(true);
          }, 2000);
        }}
      >
        <Form className=" border rounded-sm flex px-4 flex-col items-center justify-center gap-[16px] lg:px-6 lg:w-2/4">
          <h1 className="text-3xl font-bold mb-2 text-[#012622]">Sign Up</h1>

          <div className="flex w-full flex-col  gap-3 lg:items-center lg:flex-row lg:justify-center">
            <TextInput
              placeholder="John Doe"
              label={"Name"}
              type="text"
              name="name"
            />
            <TextInput
              placeholder="john@example.com"
              label={"Email Address"}
              type="email"
              name="email"
            />
          </div>

          <div className="flex flex-col w-full  gap-3 lg:items-center lg:flex-row lg:justify-center">
            <TextInput
              placeholder="Street"
              label={"Street"}
              type="text"
              name="street"
            />
            <TextInput
              placeholder="City"
              label={"City"}
              type="text"
              name="city"
            />
          </div>

          <div className="flex flex-col w-full  gap-3 lg:items-center lg:flex-row lg:justify-center">
            <TextInput
              placeholder="Age"
              label={"Age"}
              type="number"
              name="age"
            />

            <TextInput
              placeholder="Friend e.g John"
              label={"Friend"}
              type="text"
              name="friend"
            />
          </div>
          <button
            type="submit"
            className="mt-3 flex items-center justify-center gap-4 w-full text-white font-semibold py-3 px-5 rounded-md transition-all bg-[#012622] hover:opacity-95 lg:w-10/12"
          >
            {loading && (
              <svg
                aria-hidden="true"
                className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="#012622"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="#fff"
                />
              </svg>
            )}
            Create Account
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default SignUpForm;
