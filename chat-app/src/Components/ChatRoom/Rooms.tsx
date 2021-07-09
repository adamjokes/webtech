import { useEffect, useState } from "react"
import { Room as IRoom,getRooms } from "../../services/index"
import { Room } from "./Room"
import { SearchField } from "./SearchField"


export const Rooms = ({setCurrentRoomId}) => {
    const [rooms, setRooms] = useState([]as IRoom[])
    const [filteredRooms, setFilteredRooms] = useState([]as IRoom[])
    const [search, setSearch] = useState('')
    useEffect(() => {
       getRooms().then(response =>{
           const rooms =  response.data
           setRooms(rooms)
           setFilteredRooms(filteredRooms)
       }) 
    }, [])
    useEffect(() =>{
        // console.log(search);
        
            const result = rooms.filter((room)=>room.name.includes(search.toLowerCase()))
            // console.log('result',result);
            setFilteredRooms(result)
      

    },[search,rooms])
    const RenderRooms = () => {
        // console.log('rooms',filteredRooms);
        
        return (
            <>
            {filteredRooms.map(room =>{
                return <Room setCurrentRoom={setCurrentRoomId} {...room} key={room.id}/>    
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
                <SearchField setSearch={setSearch} search={search} />

            </div>

            <div id='inbox' className="inbox_chat">
                <RenderRooms/>
            </div>
        </div>
    )

}
