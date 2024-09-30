import React from 'react'
import Search from './Search'
import Users from './Users'
import Logout from './Logout'

const Left = ()=> {
  return (
    // background: #141E30;  /* fallback for old browsers */
    // background: -webkit-linear-gradient(to right, #243B55, #141E30);  /* Chrome 10-25, Safari 5.1-6 */
    // background: linear-gradient(to right, #243B55, #141E30); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    

    <div className="z-2 text-white bg-[#141E30] w-full">
      <Search/>
      <div className="flex-1 overflow-y-auto min-h-[86.5vh] md:min-h-[81.5vh]">
      <Users/>
      </div>
      <Logout/>
    </div>
  )
}

export default Left;
