import React, { useState } from 'react';
import { Rooms } from './Components/ChatRoom/Rooms';
import { CurrentRoomConversation } from './Components/CurrentChatConversation/CurrentConversation';



function App() {

  const [currentRoomId, setCurrentRoomId] = useState(1)
  return (
    <div className="App">
      <main className='container h-100'>
        <h2 className='text-center'>Chat</h2>
        <div className="messaging">
          <div className="inbox_msg">
            <Rooms setCurrentRoomId= {setCurrentRoomId}/>
            <CurrentRoomConversation roomId={currentRoomId}/>
          </div>




        </div>

      </main>
    </div>
  );
}

export default App;
