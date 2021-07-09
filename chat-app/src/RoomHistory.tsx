import { IncomingChatMessage } from "./Components/ChatRoom/IncomingChatMessage"
import { OutgoingChatMessage } from "./Components/ChatRoom/OutgoingChatMessage"


export const RoomHistory = ({messages,ip_address}) => {
    console.log(messages);
    
    const RenderMesages = ()=>{ 
        return (
            <>
            {messages.map((message)=>{
                if(message.ip_address== ip_address){
                    return  <OutgoingChatMessage input={message.input} key={message.id}  />
                }else{
                    return   <IncomingChatMessage input={message.input} key={message.id} />
                   
                }
            })}
            </>
        )
    }
    return (
        <div id="msg_history" className="msg_history">
           <RenderMesages/>
        </div>
    )
}