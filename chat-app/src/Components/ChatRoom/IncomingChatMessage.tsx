export const IncomingChatMessage = ({input}) => {
  return (

    <div className="incoming_msg">
      <div className="received_msg">
        <div className="received_withd_msg">
          <p>{input}</p>
          <span className="time_date"> 11:01 AM | June 9</span>
        </div>
      </div>
    </div>

  )
}