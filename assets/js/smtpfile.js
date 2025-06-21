function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "learnifyresearchlab@gmail.com",
        Password: "chUd!gElAmt0h",
        To: 'learnifyresearchlab@gmail.com',
        From: document.getElementById("eEmail").value,
        Subject: document.getElementById("eSubject").value,
        Body: "Name: " + document.getElementById("eFirstName").value + " " + document.getElementById("eLastName").value +
            "<br> Email: " + document.getElementById("eEmail").value +
            "<br> Message: " + document.getElementById("eMessage").value
    }).then(
        message => {
            alert("Message Sent Successfully");
            resetForm();
        }
    );
}

function resetForm() {
    document.getElementById("contactForm").reset();
}
