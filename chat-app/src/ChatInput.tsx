export const ChatInput = () => {
    return (
        <div className="type_msg">
            <div className="form-row mt-3 ">
                <div className="form-group  col-md-10">
                    <input id="send_message" type="text" className="write_msg form-control" placeholder="Type a message" />
                  
                </div>
                <div className="form-group">
                    <label className="custom-file-upload">
                        <input type="file" />
                        <img style={{height:'25px', cursor: 'pointer'}} src="/assets/svg/file.svg" alt=""></img>
                    </label>

                    <img id='send' style={{height:'25px', cursor: 'pointer'}} src="/assets/svg/send.svg" alt="" />
                </div>
            </div>
        </div>
    )
}
