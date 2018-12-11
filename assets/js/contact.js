function myFunction() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;
  message = message.replace(/(?:\r\n|\r|\n)/g, '%0D%0A');
  var mailto_lnk = 'mailto:mathieu.de.viti@gmail.com?subject=' + subject + '&body=' + message
  window.location.href = mailto_lnk;
  document.getElementById('contactForm').reset();
  location.hash = 'thankyou';
  //alert("Thank you for your email! I will answer as soone as possible. 😸");
  //location.hash = 'intro';
}
