var socket = new io.Socket("localhost");
socket.connect();
socket.on("message", function(message){
              message = JSON.parse(message);
              if (message.message) {
                  $("#chat").append(
                      ["<p>",message.message.name,"「",message.message.text,"」</p>"].join("")
                  );
              }
});

function send() {
    var name = $("#name").val();    
    var text = $("#text").val();    
    if (name && text) {
        socket.send(JSON.stringify(
                    {
                        message: {
                            name: name,
                            text: text
                        }
                    }
                    ));
        $("text").val("");
    }
}
