// ```
// user : {
//     id:0
//     name
//     messages:[],
// }

// messages : {
//     message
//     time 
//     date
// }
// ```;

const messages = [
  { message: "hello world", time: "11:04 am", date: "yesterday", sent: false },
  { message: "hello world", time: "11:04 am", date: "yesterday", sent: true },
  { message: "hello world", time: "11:04 am", date: "yesterday", sent: false },
  { message: "hello world", time: "11:04 am", date: "yesterday", sent: true },
  { message: "hello world", time: "11:04 am", date: "yesterday", sent: false },
  { message: "hello world", time: "11:04 am", date: "yesterday", sent: true },
];
const chatConversations = [
  { id: 0, name: "khaalid", messages: messages },
  { id: 1, name: "john", messages: messages },
  { id: 2, name: "liskov", messages: messages },
];
setTimeout(() => {
  chatConversations[0].messages.forEach((message) => {
    if (message.sent) {
      $("#msg_history").append(`
            <div class="outgoing_msg">
            <div class="sent_msg">
              <p>${message.message}</p>
              <span class="time_date"> ${message.time}   |    ${message.date}</span> </div>
          </div>
            `);
    } else {
      $("#msg_history").append(`
    <div class="incoming_msg">
    <div class="received_msg">
      <div class="received_withd_msg">
        <p>${message.message}</p>
        <span class="time_date"> ${message.time}    |    ${message.date}</span></div>
        </div>
    </div>
        
    `);
    }
  });
}, 3000);
// setTimeout(() => {

// $('#message').append(`
// <div class="bg-secondary h-50 w-25 my-2 px-2 rounded">
// <p class='text-white text-sm' >Hello my friend</p>
// </div>
// `)

// setTimeout(() => {
//     $('#message').append(`
//     <div class="bg-secondary h-50 w-25 my-2 px-2 rounded">
//     <p class='text-white text-sm' >How are you doing today?</p>
//     </div>
//     `)
// },3000)
// }, 3000);

// GET THE INPUT OF THE USER WHEN HE ENTERS
// GET THE FILE THAT HAS BEEN UPLOADED
// HIDE THE CHAT IF THE PAGE IS SMALLER
