var username = document.querySelector("#name");
var dob = document.querySelector("#dob");
var btnSubmit = document.querySelector("#btn-submit");
var output = document.querySelector("#output");

function leapYearCheck(){
    let inputYear = dob.value.slice(0,4);

    console.log(inputYear);
    if( (inputYear % 4 === 0 && inputYear % 100 !== 0) || (inputYear % 400 === 0)){
        console.log("Leap year");
        output.innerText = "Wow " + username.value + "! You have born on leap year!!";
    }
    else{
        output.innerText = "Hey " + username.value + "! Your birth year is not a leap year";
        console.log("Not leap year");
    }
}

btnSubmit.addEventListener("click", leapYearCheck);