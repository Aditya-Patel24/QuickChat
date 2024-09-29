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
    <div className="text-white w-[70%] bg-slate-900">
      <div>
        {!selectedConversation ? (
          <>
          <Loading />
          <p className="flex text-center justify-center text-green-500">No chat selected, Please start conversation by selecting anyone from
            your contacts</p>
          </>
        ) : (
          <>
            <Chatuser />
            <div className="flex-1 overflow-y-auto" style={{ maxHeight: 'calc(92vh - 10vh)' }}>
              <Messages />
            </div>
              <Typetext />
          </>
        )}
    </div>
      </div>
  );
};

export default Right;
