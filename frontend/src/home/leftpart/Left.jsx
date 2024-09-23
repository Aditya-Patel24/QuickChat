import React from 'react'
import Search from './Search'
import Users from './Users'
import Logout from './Logout'

const Left = ()=> {
  return (
    <div className="text-white bg-black w-[30%]">
      <Search/>
      <Users/>
      <Logout/>
    </div>
  )
}

export default Left
