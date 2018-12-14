var nameInput = document.getElementById("formGroupExampleInput");
var phoneNumber = document.getElementById("formGroupExampleInput2");
var email = document.getElementById("formGroupExampleInput3");
var uniqueID = document.getElementById("formGroupExampleInput4");
var submitButton = document.getElementById("submitButton");


submitButton.onclick = function(event){
    console.log(nameInput.value);
    console.log(phoneNumber.value);
    console.log(email.value);
    console.log(uniqueID.value);
    event.preventDefault();
};

