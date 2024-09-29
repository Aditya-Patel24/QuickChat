import React,{useState} from 'react'
import { IoIosLogOut } from "react-icons/io";
import { BiLogOutCircle } from "react-icons/bi";
import Cookies from "js-cookie"
import axios from "axios"
const Logout = () => {
  const [loading, setLoading]= useState(false)
  const handleOnClick = async()=>{
    try{
      setLoading(true);
      const res = await axios.post("/api/user/logout");
      localStorage.removeItem("ChatApp");
      Cookies.remove("jwt");
      setLoading(false);
      toast.success("Logged out Successfully");
      window.location.reload();
    }
    catch (error){
      console.log("Logout error", error);
      toast.error("Error in Logging out");
    }
  }
  return (
    <div>
    <hr />
    <div className="bg-transparent">
      <div >
        <BiLogOutCircle
          className="text-5xl text-white hover:bg-slate-900 duration-300 cursor-pointer rounded-full p-2 ml-2 mt-1" onClick={handleOnClick}
        />
      </div>
    </div>
  </div>
  )
}

export default Logout
