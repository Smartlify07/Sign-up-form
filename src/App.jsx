import { useState } from "react";
import SignUpForm from "./components/SignUpForm";
import Success from "./components/Success";

function App() {
  const [success, setSuccess] = useState(false);

  return (
    <>
      <main className="flex flex-col py-6 justify-center min-h-screen lg:flex-row overflow-hidden">
        {!success && (
          <>
            <div className="hidden rounded-s-xl relative w-1/3 bg-center bg-[url(./images/leaves.jpg)] before:rounded-s-xl before:bg-[#012622] before:absolute before:w-full before:h-full before:opacity-70  items-center justify-center  lg:flex lg:flex-col">
              <h1 className="z-10 text-3xl w-9/12  text-[#fff] font-bold tracking-wide lg:text-4xl lg:leading-[1.2em]">
                Let&apos;s get started on your commitment journey
              </h1>
              <p className="z-10 text-gray-100 text-base w-9/12 mt-4 font-semibold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Impedit, omnis.
              </p>
            </div>

            <SignUpForm setSuccess={setSuccess} />
          </>
        )}

        {success && <Success />}
      </main>
    </>
  );
}

export default App;
