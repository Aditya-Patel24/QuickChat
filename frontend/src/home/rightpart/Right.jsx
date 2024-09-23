import React from 'react'
import Chatuser from './Chatuser'
import Messages from './Messages'
import Typetext from './Typetext'

const Right = () => {
  return (
    <div className="text-white w-[70%] bg-slate-900">
      <Chatuser/>
      <div className="flex-1 overflow-y-auto" style={{maxHeight: "calc(89vh - 8vh)"}}>
      <Messages/>
      </div>
      <Typetext/>
    </div>
  )
}

export default Right
