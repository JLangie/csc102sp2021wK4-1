//Sets first name,last name, full name, and badge number for credential validation.
function checkCreds() {

    var firstName = document.getElementById("fName").value;
    var lastName = document.getElementById("lName").value;
    var badgeNumb = document.getElementById("badgeID").value;
    var fullName = firstName + " " + lastName
//If/else statements setting parameters for valid credentials. Full name between 1 - 20 characters. Badge number 1 - 999.
    if (fullName.length > 20 || fullName.length == 1) {
        // if true,
        document.getElementById("loginStatus").innerHTML = "Full name invalid!"
    } else if (badgeNumb > 999 || badgeNumb < 1) {
        document.getElementById("loginStatus").innerHTML = "Invalid Badge Number!"
    }
    else {
        alert("Acess Granted!! Welcome" + " " + fullName + "!");
        location.replace("index.html");
    }
}