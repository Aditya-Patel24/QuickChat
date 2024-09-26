import React from 'react'
import Search from './Search'
import Users from './Users'
import Logout from './Logout'

const Left = ()=> {
  return (
    <div className="text-white bg-black w-[30%]">
      <Search/>
      <div className="flex-1 overflow-y-auto" style={{minHeight: "calc(86vh-10vh)"}}>
      <Users/>
      </div>
      <Logout/>
    </div>
  )
}

export default Left
