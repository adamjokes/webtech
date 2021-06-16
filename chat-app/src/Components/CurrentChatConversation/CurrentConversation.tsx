import { ChatInput } from "../../ChatInput"
import { RoomHistory } from "../../RoomHistory"

export const CurrentRoomConversation = ()=>{
    return (
        <div className="mesgs">
            <RoomHistory/>
            <ChatInput/>
      </div>
    )
}


