function validateForm() {

    //create the form const with form values
    const formEntry = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    }
    console.log(formEntry)

    var passes = true; //boolean if form passes validation

    //check if last name length is at least 2 characters
    if (formEntry.name.length < 2) {
        document.getElementById("name").style.borderColor = "red";
        document.getElementById("nameError").innerHTML = 'Name must be at least two characters.';
        passes = false;
        console.log("Name must be 2 characters");
    }

    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(formEntry.email)) {
        document.getElementById("email").style.borderColor = "red";
        document.getElementById("emailError").innerHTML = 'Please enter a valid email.';
        passes = false;
    }

    return passes;

}