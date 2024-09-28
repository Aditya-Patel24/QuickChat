import React from 'react'
import Message from './Message'
import useGetMessage from '../../context/useGetMessage'
import Loading from "../../components/Loading"
const Messages = () => {
  const { loading,messages } = useGetMessage();
  console.log(messages);
  return (
    <div className="flex-1 overflow-y-auto"
    style={{ minHeight: "calc(92vh - 8vh)" }}>
    {loading ? (<Loading/>) : (messages.length>0 && messages.map((message)=>(
    <Message key={message._id} message={message}/>
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
