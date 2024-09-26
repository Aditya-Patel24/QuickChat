import React from "react";
import { IoSend } from "react-icons/io5";

const Typetext = () => {
  return (
    <div className="flex space-x-4 h-[8vh] bg-gray-800 items-center pl-8 ">
      <div className="w-[90%]">
        <input
          type="text"
          placeholder="Type here"
          className="bg-gray-600 rounded-xl outline-none items-center pl-4 w-full p-2"
        />
      </div>
      <button>
        <IoSend className="text-3xl" />
      </button>
    </div>
  );
};

export default Typetext;