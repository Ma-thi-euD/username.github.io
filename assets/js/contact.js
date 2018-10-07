function myFunction() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  message = message.replace(/(?:\r\n|\r|\n)/g, '%0D%0A')
  window.open('mailto:mathieu.de.viti@gmail.com?subject=' + name + ' reaching out&body=' + message);
}
