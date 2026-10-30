function sendMessage() {

    let customerName = document.getElementById("name").value;

    if (customerName === "") {

        alert("Please enter your name.");

    } else {

        alert("Thank you " + customerName +
              "! Your message has been received.");

    }

}