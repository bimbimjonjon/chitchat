import React from 'react'
import ChatWindow from './ChatWindow'
import SideBar from './SideBar'

function ChatRoom() {
    return (
        <div className='grid grid-cols-4  overflow-hidden h-[100vh]  '>
            <SideBar />
            <ChatWindow />
        </div>
    )
}

export default ChatRoom