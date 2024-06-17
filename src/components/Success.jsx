import { BiCheckCircle } from "react-icons/bi";

const Success = () => {
  return (
    <div className="px-5 py-5 rounded-sm w-4/12 h-auto self-center bg-green-600">
      <p className=" font-bold text-white text-lg flex items-center gap-4">
        <BiCheckCircle className="inline text-2xl" />
        You&apos;ve successfully signed up
      </p>
      <p className="text-white mt-4 text-sm font-semibold">Redirecting...</p>
    </div>
  );
};

export default Success;
