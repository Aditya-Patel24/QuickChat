import React, { useEffect } from 'react'
import Chatuser from './Chatuser'
import Messages from './Messages'
import Typetext from './Typetext'
import useConversation from '../../zustand/useConversation.js'
import Loading from '../../components/Loading.jsx'

const Right = () => {
  const {selectedConversation, setSelectedConversation}= useConversation();
  useEffect(() => {
    return setSelectedConversation(null)  },[setSelectedConversation])
  return (
    <div className="z-5 text-white w-full bg-slate-900 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] ,transparent_100%)] h-screen">
      <>
        {!selectedConversation ? (
          <div className="text-white flex flex-col items-center justify-center">
          <Loading />
          <p className="flex text-center justify-center text-green-500">No chat selected, Please start conversation by selecting anyone from
            your contacts</p>
          </div>
        ) : (
          <>
            <Chatuser />
            <div className="flex-1 overflow-y-auto" style={{ maxHeight: 'calc(92vh - 10vh)' }}>
              <Messages />
            </div>
              <Typetext />
          </>
        )}
    </>
      </div>
  );
};
export default Right;