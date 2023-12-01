// Scripts specific to the contacts page!

// Called when the form is submitted to validate whether the form was 
// filled out correctly
function validate() {
    console.log("validate called");

    var err_found = false;

    var fault_list = [];

    if ($("#name").val() === "") {
        err_found = true;
        fault_list.push("name")
    }

    var email_re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!email_re.test($("#email").val())) {
        err_found = true;
        fault_list.push("email");
    }

    if ($("#question").val() === "") {
        err_found = true;
        fault_list.push("question")
    }

    display_errors(fault_list);

    console.log(fault_list);

    return !err_found;
}

// Displays the errors made in the form
// fault_list is an array of strings representing faults
function display_errors(fault_list) {
    
    // Hide or display name field error
    if (fault_list.includes("name")) {
        $("#name").val("");
        $("#name").attr("placeholder", "Name is required");
    }
    else {
        $("#name").attr("placeholder", "");
    }

    // Hide or display email field error
    if (fault_list.includes("email")) {
        $("#email").val("");
        $("#email").attr("placeholder", "Please enter a valid email");
    }
    else {
        $("#email").attr("placeholder", "");
    }

    // Hide or display question field error
    if (fault_list.includes("question")) {
        $("#question").attr("placeholder", "You must ask something");
    }
    else {
        $("#question").attr("placeholder", "");
    }
 
}

