var socket = io();
socket.on("connect", function() {
  console.log("connected to server");
  socket.emit("createMessage", {
    from: "jen@example.com",
    text: "hey, its Rik"
  });
});

socket.on("newMessage", function(message) {
  console.log("New Message", message);
});
