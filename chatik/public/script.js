var socket = new WebSocket("ws://localhost:8081");
function myFunction() {
  var outgoingMessage = $("#msg").val();
  var asdname = $("#name").val();
  var Text = asdname+": "+outgoingMessage;
  console.log("sasdasdasdasd")
  socket.send(JSON.stringify({
    name: asdname,
    msg: outgoingMessage,
  }));
  return false;
};

socket.onmessage = function(event) {
  var message=JSON.parse(event.data);
  var b = moment().format('LTS');
  var dt ="";
  if (message.name==""){
	  dt="";
  }
  else {dt = ": ";}
  console.log(message.name)
  if (message.name=="Server"){
	  $('#demo').append(b+": "+message.msg);;
	  $("#online").html("")
	  $('#online').append(message.online) ;
  }
  else {
  $('#demo').append(b+" "+message.name+dt+message.msg + "</br>");
  console.log(message.online)
  $("#online").html("")
  $('#online').append(message.online) ;
  var element = document.getElementById("demo");
  element.scrollTop = element.scrollHeight;
  }
};