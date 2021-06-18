import axios from './conf'

export * from './conf'
export interface Message {
    ip_address:string;
    input:string
    created_at: Date|null
    id:number
}
export interface Room {
    id: number
    name: string
    image: string,
    created_at: Date | null
}
export const createMessage = (data:{ip_address:string, input:string,room:number}) =>{
    try {
        return axios.post<Message>('api/chats',
        data
        )
    } catch (error) {
        throw new Error(error)
    }
}
export const getMessages = (roomId:number) =>{
    try {
        return axios.get<Message[]>(`api/chats/${roomId}`)
    } catch (error) {
        throw new Error(error)
    }
}
// export const getMessage = (chatId:number) =>{
//     try {
//         return axios.post<Message>(`/chats/${roomId}`)
//     } catch (error) {
//         throw new Error(error)
//     }
// }
export const getRooms = () =>{ 
    try {
        return axios.get<Room[]>(`api/rooms/`)
    } catch (error) {
        throw new Error(error)
    }
}
export const getRoom = (id:number) =>{ 
    try {
        return axios.get<Room>(`api/rooms/${id}`)
    } catch (error) {
        throw new Error(error)
    }
}