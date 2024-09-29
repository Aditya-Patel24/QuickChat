import React from 'react'
import Search from './Search'
import Users from './Users'
import Logout from './Logout'

const Left = ()=> {
  return (
    <div className="text-white bg-black w-full md:w-[30%]">
      <Search/>
      <div className="flex-1 overflow-y-auto" style={{minHeight: "calc(81.5vh)"}}>
      <Users/>
      </div>
      <Logout/>
    </div>
  )
}

export default Left;

