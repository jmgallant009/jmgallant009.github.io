function validateForm() {

    //create the form const with form values
    const formEntry = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    }
    console.log(formEntry)

    //Remove all CSS from errors for the retry
    formErrors = document.getElementsByClassName('formError');
    for (index = 0; index < formErrors.length; ++index) {
        formErrors[index].innerHTML = null
    }

    inputs = document.getElementsByTagName('input');
    for (index = 0; index < inputs.length; ++index) {
        inputs[index].style.borderColor = "gray";
    }

    var passes = true; //boolean if form passes validation

    //check if last name length is at least 2 characters
    if (formEntry.name.length < 2) {
        document.getElementById("name").style.borderColor = "red";
        document.getElementById("nameError").innerHTML = 'Name must be at least two characters.';
        passes = false;
        console.log("Name must be 2 characters");
    }

    //check if first only has characters a-z
    if (/[^a-zA-Z]/.test(formEntry.name)) {
        document.getElementById("name").style.borderColor = "red";
        document.getElementById("nameError").innerHTML = 'Please use only characters A through Z.';
        passes = false;
        console.log("Name must be A-Z characters");
    }
    
    //check if email is valid
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(formEntry.email)) {
        document.getElementById("email").style.borderColor = "red";
        document.getElementById("emailError").innerHTML = 'Please enter a valid email.';
        passes = false;
    }

    //check if last message is at least 10 characters
    if (formEntry.message.length < 10) {
        document.getElementById("message").style.borderColor = "red";
        document.getElementById("messageError").innerHTML = 'Message must be at least 10 characters.';
        passes = false;
        console.log("Message must be at least 10 characters");
    }

    return passes;

}