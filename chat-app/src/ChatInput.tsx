import { useState } from "react"

export const ChatInput = ({setMessage}) => {
const [input, setInput] = useState('')
    return (
        <div className="type_msg">
            <div className="form-row mt-3 ">
                <div className="form-group  col-md-10">
                    <input value={input} onChange={(e)=>setInput(e.target.value)} id="send_message" type="text" className="write_msg form-control" placeholder="Type a message" />
                  
                </div>
                <div className="form-group">
                    <label className="custom-file-upload">
                        <input type="file" />
                        <img style={{height:'25px', cursor: 'pointer'}} src="/assets/svg/file.svg" alt=""></img>
                    </label>

                    <img id='send' style={{height:'25px', cursor: 'pointer'}} src="/assets/svg/send.svg" alt="" onClick={(e)=>{
                        setMessage(input)
                        setInput('')
                        }} />
                </div>
            </div>
        </div>
    )
}
