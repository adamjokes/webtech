import { useEffect, useState } from "react"
import { Room as IRoom,getRooms } from "../../services/index"
import { Room } from "./Room"
import { SearchField } from "./SearchField"


export const Rooms = ({setCurrentRoomId}) => {
    const [rooms, setRooms] = useState([]as IRoom[])
    useEffect(() => {
       getRooms().then(response =>{
           const rooms =  response.data
           setRooms(rooms)
       }) 
    }, [])

    const RenderRooms = () => {
        console.log(rooms);
        
        return (
            <>
            {rooms.map(room =>{
                return <Room {...room} key={room.id}/>    
            })}
            </>
        )
    }

    return (
        <div className="inbox_people">
            <div className="headind_srch">
                <div className="recent_heading">
                    <h4>Recent</h4>
                </div>
                <SearchField />

            </div>

            <div id='inbox' className="inbox_chat">
                <RenderRooms/>
            </div>
        </div>
    )

}
