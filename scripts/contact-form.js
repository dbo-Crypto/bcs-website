function getContactFormData() {
  let mail = document.getElementById("mail").value;
  let sujet = document.getElementById("sujet").value;
  let message = document.getElementById("message").value;
  alert(mail)

  Email.send({
    SecureToken: "5021fe60-2829-47a0-b75d-416ef87dee88",
    To: "contact.1e43r@simplelogin.com",
    From: "contact.1e43r@simplelogin.com",
    Subject: "BCS Demande de contact",
    Body: "<html><h2 text-align=center>Demande de contact</h><h4>Demandeur: "+mail+"</h4><br><strong>Sujet: "+ sujet +"</strong><br>><p>Message:</p><p>"+ message +"</p></html>",
  }).then((message) => alert("Message envoyé"));
}

/*
contact.1e43r@simplelogin.com
smtp.elasticemail.com
Port: 2525
A3C756A88747D8641EE112ADF45BEC4ACE97


5021fe60-2829-47a0-b75d-416ef87dee88
*/