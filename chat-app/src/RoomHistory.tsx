import { IncomingChatMessage } from "./Components/ChatRoom/IncomingChatMessage"
import { OutgoingChatMessage } from "./Components/ChatRoom/OutgoingChatMessage"


export const RoomHistory = () => {
    return (
        <div id="msg_history" className="msg_history">

            <OutgoingChatMessage />
            <IncomingChatMessage />

        </div>
    )
}