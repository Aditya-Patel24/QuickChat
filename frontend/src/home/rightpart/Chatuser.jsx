import React from "react";

const Chatuser = () => {
  return (
    <div className="relative flex items-center h-[8%] justify-center gap-4 bg-slate-800 hover:bg-slate-700 duration-300 rounded-b-sm">
      <div className="avatar online">
        <div className="w-14 rounded-full">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      {/* <div className="avatar offline">
        <div className="w-24 rounded-full">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div> */}
      <div>
        <h1 className="text-xl">Name</h1>
        <span className="text-sm ">offline</span>
      </div>
    </div>
  );
};

export default Chatuser;
