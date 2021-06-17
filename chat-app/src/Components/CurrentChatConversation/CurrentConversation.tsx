import { useEffect, useState } from "react"
import { ChatInput } from "../../ChatInput"
import { RoomHistory } from "../../RoomHistory"
import { Room as IRoom,getMessages,createMessage } from "../../services/index"
const ip = require('ip');
export const CurrentRoomConversation = ({roomId})=>{
    const [messages, setMessages] = useState([])
    const [message, setMessage] = useState(null)
    const [ip_address, setIp_address] = useState(ip.address())
    useEffect(() => {
       handleMessages()
    }, [roomId])

    const handleMessages = async()=>{
        try {
           const response = await getMessages(roomId)
            setMessages(response.data)
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        if (message) {
           handleCreateMessage()

        }
    },[message])

    const handleCreateMessage = async ()=>{
        try {
           const result =  createMessage({ip_address:ip_address as string,input:message as string, room:roomId})
            handleMessages()
           setMessage(null)
        } catch (error) {
            console.log(error);
            
        }
       
    }
    return (
        <div className="mesgs">
            <RoomHistory messages={messages} ip_address={ip_address} />
            <ChatInput setMessage={setMessage}/>
      </div>
    )
}


