import React from 'react'
import { FaSearch } from "react-icons/fa";
const Search = () => {
  return (
    <div className=" h-[10vh]">
    
    <div className="px- py-3 ml-6">
      <form action="">
      <div className="flex space-x-2">
    <label className="input input-bordered w-[80%] flex items-center gap-2 rounded-full">
      <input type="text" className="grow" placeholder="Search" />
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
