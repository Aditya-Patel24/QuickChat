import React from 'react'
import { IoIosLogOut } from "react-icons/io";
import { BiLogOutCircle } from "react-icons/bi";
const Logout = () => {
  return (
    <>
    <hr />
    <div className="bg-transparent">
      <div>
        <BiLogOutCircle
          className="text-5xl text-white hover:bg-slate-900 duration-300 cursor-pointer rounded-full p-2 ml-2 mt-1"
        />
      </div>
    </div>
  </>
  )
}

export default Logout
