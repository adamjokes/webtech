import React from 'react';
import { Rooms } from './Components/ChatRoom/Rooms';
import { CurrentRoomConversation } from './Components/CurrentChatConversation/CurrentConversation';



function App() {
  return (
    <div className="App">
      <main className='container h-100'>
        <h2 className='text-center'>Chat</h2>
        <div className="messaging">
          <div className="inbox_msg">
            <Rooms/>
            <CurrentRoomConversation/>
          </div>




        </div>

      </main>
    </div>
  );
}

export default App;
