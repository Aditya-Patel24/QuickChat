import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import useConversation from '../../zustand/useConversation';
import useGetAllUsers from '../../context/useGetAllUsers';
import toast from 'react-hot-toast';
import Logo from "../../../src/assets/Q.png"
const Search = () => {
  const [search, setSearch]=useState("");
  const [allUsers] = useGetAllUsers();
  const { setSelectedConversation } = useConversation();
  const handleSubmit =(e)=>{
    e.preventDefault();
    if(!search) return ;
    const conversation = allUsers.find((user)=>
      user.fullname?.toLowerCase().includes(search.toLowerCase())
  );
  if(conversation) {
      toast.success("User found");
      setSelectedConversation(conversation);
      setSearch("");
    }
    else {
      toast.error("User not found");
    }
  }
  return (
    <div className="">
    <div className="px- py-3 ml-6">
      <form onSubmit={handleSubmit}>
      <div className="flex space-x-16">
    {/* <img src={Logo} alt="logo" className="w-16 h-16" /> */}
        <img src={Logo} alt="logo" className="w-24 h-24 absolute mt-[-22px] ml-[-33px]" />
    <label className="input input-bordered w-[75%] flex items-center gap-2 rounded-full">
      <input type="text" className="grow" placeholder="Search" value={search} onChange={(e)=>setSearch(e.target.value)} />
    <button>
      <FaSearch className="text-[45px] p-2 mr-[-10px] mt-1 hover:bg-slate-900 rounded-full duration-300"/>
    </button>
    </label>
      </div>
      </form>
    </div>
    </div>
  )
}

export default Search
