import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import useConversation from '../../zustand/useConversation';
import useGetAllUsers from '../../context/useGetAllUsers';
import toast from 'react-hot-toast';
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
      <div className="flex space-x-2">
    <label className="input input-bordered w-[80%] flex items-center gap-2 rounded-full">
      <input type="text" className="grow" placeholder="Search" value={search} onChange={(e)=>setSearch(e.target.value)} />
    </label>
    <button>
      <FaSearch className="text-[45px] p-2 mt-1 hover:bg-slate-900 rounded-full duration-300"/>
    </button>
      </div>
      </form>
    </div>
    </div>
  )
}

export default Search
