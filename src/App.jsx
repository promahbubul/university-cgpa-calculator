import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Footer";
import Header from "./Header";

function App() {
  const [result, setResult] = useState("");
  const [resultNumber, setResultNumber] = useState([]);

  const handleButton = (e) => {
    const data = e.target.value;

    if (data == "F") {
      return toast.error("You are not promoted");
    }
    if (data == "A+") {
      setResult(result + 4);
    } else if (data == "A") {
      setResult(result + 3.75);
    } else if (data == "A-") {
      setResult(result + 3.5);
    } else if (data == "B+") {
      setResult(result + 3.25);
    } else if (data == "B") {
      setResult(result + 3);
    } else if (data == "B-") {
      setResult(result + 2.75);
    } else if (data == "C+") {
      setResult(result + 2.5);
    } else if (data == "C") {
      setResult(result + 2.25);
    } else if (data == "D") {
      setResult(result + 2);
    } else if (data >= 6 || data <= 8) {
      setResult(result + data);
    }
  };

  const handleEqual = (e) => {
    if (result.charAt(result.length - 1) == "+") {
      return toast.warning("You cannot use + sign of end");
    }
    const newResult = eval(result);
    setResult(newResult.toFixed(2));
  };

  const handlePlus = (e) => {
    const data = e.target.value;
    setResult(result + data);
  };

  const handleClear = () => {
    setResult("");
    setResultNumber("");
  };

  return (
    <>
      <Header />
      <div className="md:w-4/12 w-11/12 mx-auto flex justify-center flex-col my-5">
        <div className="bg-gray-400 flex text-right w-full pl-4 mb-5 rounded-full ">
          <input
            value={result}
            className={`bg-transparent border-none
          outline-none w-full text-lg font-bold ${
            !result == "+" ? "text-orange-700" : "text-white"
          } `}
            onClick={handleEqual}
          />
          <button
            onClick={(e) => handleEqual(e)}
            className="bg-orange-700 py-2 rounded-r-full text-4xl px-5 text-white font-extrabold  "
          >
            =
          </button>
        </div>
        <div className="flex-row-reverse flex gap-2 mb-5">
          <input
            onClick={(e) => handleClear(e)}
            type="button"
            className="bg-orange-700 cursor-pointer w-12 h-12 text-white rounded-xl"
            value="AC"
          />
          <input
            onClick={(e) => handlePlus(e)}
            type="button"
            className="bg-orange-700 cursor-pointer w-12 h-12 text-white rounded-xl"
            value="+"
          />
          <input
            onClick={(e) => handlePlus(e)}
            type="button"
            className="bg-orange-700 cursor-pointer w-12 h-12 text-white rounded-xl"
            value="/"
          />
          <input
            onClick={(e) => setResult(result.slice(0, -1))}
            type="button"
            className="bg-orange-700 cursor-pointer w-20 h-12 text-white rounded-xl"
            value="Remove"
          />
        </div>
        <div className="flex flex-row gap-3 justify-end bg-slate-100 p-3 rounded-md">
          <div className="mb-5 w-full justify-center items-center  flex flex-col gap-5">
            {/* top */}
            <div className="flex flex-row gap-5  w-full">
              <input
                onClick={(e) => handleButton(e)}
                value="A+"
                className="bg-[#7F00FE] text-2xl font-extrabold text-white w-12 h-12 md:w-14 md:h-14 rounded-xl shadow-violet-800 shadow-md cursor-pointer"
                type="button"
              />
              <input
                onClick={(e) => handleButton(e)}
                value="A"
                className="bg-[#7F00FE] text-2xl font-extrabold text-white w-12 h-12 md:w-14 md:h-14 rounded-xl shadow-violet-800 shadow-md cursor-pointer"
                type="button"
              />
              <input
                onClick={(e) => handleButton(e)}
                value="A-"
                className="bg-[#7F00FE] text-2xl font-extrabold text-white w-12 h-12 md:w-14 md:h-14 rounded-xl shadow-violet-800 shadow-md cursor-pointer"
                type="button"
              />
            </div>
            {/* Middle */}
            <div className="flex flex-row gap-5  w-full">
              <input
                onClick={(e) => handleButton(e)}
                value="B+"
                className="bg-[#7F00FE] text-2xl font-extrabold text-white w-12 h-12 md:w-14 md:h-14 rounded-xl shadow-violet-800 shadow-md cursor-pointer"
                type="button"
              />
              <input
                onClick={(e) => handleButton(e)}
                value="B"
                className="bg-[#7F00FE] text-2xl font-extrabold text-white w-12 h-12 md:w-14 md:h-14 rounded-xl shadow-violet-800 shadow-md cursor-pointer"
                type="button"
              />
              <input
                onClick={(e) => handleButton(e)}
                value="B-"
                className="bg-[#7F00FE] text-2xl font-extrabold text-white w-12 h-12 md:w-14 md:h-14 rounded-xl shadow-violet-800 shadow-md cursor-pointer"
                type="button"
              />
            </div>
            {/* Bottom */}
            <div className="flex flex-row gap-5 w-full">
              <input
                onClick={(e) => handleButton(e)}
                value="C+"
                className="bg-[#7F00FE] text-2xl font-extrabold text-white w-12 h-12 md:w-14 md:h-14 rounded-xl shadow-violet-800 shadow-md cursor-pointer"
                type="button"
              />
              <input
                onClick={(e) => handleButton(e)}
                value="C"
                className="bg-[#7F00FE] text-2xl font-extrabold text-white w-12 h-12 md:w-14 md:h-14 rounded-xl shadow-violet-800 shadow-md cursor-pointer"
                type="button"
              />
              <input
                onClick={(e) => handleButton(e)}
                value="D"
                className="bg-[#7F00FE] text-2xl font-extrabold text-white w-12 h-12 md:w-14 md:h-14 rounded-xl shadow-violet-800 shadow-md cursor-pointer"
                type="button"
              />
              <ToastContainer />
            </div>
            <div className="flex ">
              <input
                onClick={(e) => handleButton(e)}
                value="F"
                className="bg-red-700 text-2xl font-extrabold text-white w-12 h-12 md:w-14 md:h-14 rounded-full shadow-violet-800 shadow-md cursor-pointer"
                type="button"
              />
            </div>
          </div>
          <div className="w-2/12">
            <div className="flex flex-col  gap-5 justify-center items-center align-middle ">
              <input
                onClick={(e) => handleButton(e)}
                value="6"
                className="bg-gray-500 text-2xl font-extrabold text-white w-10 h-10 rounded-md shadow-violet-800 shadow-md cursor-pointer"
                type="button"
              />
              <input
                onClick={(e) => handleButton(e)}
                value="7"
                className="bg-gray-500 text-2xl font-extrabold text-white w-10 h-10 rounded-md shadow-violet-800 shadow-md cursor-pointer"
                type="button"
              />
              <input
                onClick={(e) => handleButton(e)}
                value="8"
                className="bg-gray-500 text-2xl font-extrabold text-white w-10 h-10 rounded-md shadow-violet-800 shadow-md cursor-pointer"
                type="button"
              />
              <input
                onClick={(e) => handleButton(e)}
                value="9"
                className="bg-gray-500 text-2xl font-extrabold text-white w-10 h-10 rounded-md shadow-violet-800 shadow-md cursor-pointer"
                type="button"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
