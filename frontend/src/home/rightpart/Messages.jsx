import React, { useEffect, useRef } from 'react'
import Message from './Message'
import useGetMessage from '../../context/useGetMessage.js'
import Loading from "../../components/Loading"
const Messages = () => {
  const { loading,messages } = useGetMessage();
  console.log(messages);
  const lastMsgRef = useRef();
  useEffect(()=>{
setTimeout(()=>{
  if(lastMsgRef.current){
    lastMsgRef.current.scrollIntoView({behavior : "smooth"})
  }
},100);
  },[])
  return (
    <div className="flex-1 overflow-y-auto"
    style={{ minHeight: "calc(92vh - 10vh)" }}>
    {loading ? (<Loading/>) : (messages.length>0 && messages.map((message, index)=>(
    <Message key={message._id || index} message={message}/>
    )))}

    {!loading && messages.length == 0 && (
      <div className=" text-center mt-[25%]">
        <p>Say! Hi to Start the Conversation </p>
        </div>
    )}
    </div>
  )
}

export default Messages
