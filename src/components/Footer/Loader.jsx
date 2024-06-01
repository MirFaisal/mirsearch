import { MoonLoader } from "react-spinners";

const Loader = () => {
  return (
    <>
      <div className="w-full h-[400px] flex justify-center items-center">
        <MoonLoader color="#36d7b7" size={120} speedMultiplier={1} />;
      </div>
    </>
  );
};

export default Loader;
