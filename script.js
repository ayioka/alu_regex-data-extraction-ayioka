document.getElementById("submissionForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let email = document.getElementById("email").value;
    let url = document.getElementById("url").value;
    let phone = document.getElementById("phone").value;
    let creditCard = document.getElementById("creditCard").value;
    let message = document.getElementById("message");

    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let urlPattern = /^https?:\/\/[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\/\S*)?$/;
    let phonePattern = /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
    let creditCardPattern = /^\d{4}[-\s]?\d{4}[-\s]?\d{4}[-\s]?\d{4}$/;

    if (!emailPattern.test(email)) {
        message.textContent = "Invalid email address!";
        return;
    }

    if (!urlPattern.test(url)) {
        message.textContent = "Invalid website URL!";
        return;
    }

    if (!phonePattern.test(phone)) {
        message.textContent = "Invalid phone number!";
        return;
    }

    if (!creditCardPattern.test(creditCard)) {
        message.textContent = "Invalid credit card number!";
        return;
    }

    message.style.color = "green";
    message.textContent = "Form submitted successfully!";
});
