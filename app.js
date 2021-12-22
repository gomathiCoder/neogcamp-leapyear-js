var username = document.querySelector("#name");
var dob = document.querySelector("#dob");
var btnSubmit = document.querySelector("#btn-submit");
var output = document.querySelector("#output");
var warningName = document.querySelector("#warning-username");
var warningDob = document.querySelector("#warning-dob");

function inputValidation(){
    if(username.value == ""){
        warningName.style.display = "block";
    }
    else if(dob.value == ""){
        warningName.style.display = "none";
        warningDob.style.display = "block";
    }
    else{
        warningName.style.display = "none";
        warningDob.style.display = "none";
        leapYearCheck();
    }
}

function leapYearCheck(){
    let inputYear = dob.value.slice(0,4);

    console.log(inputYear);
    if( (inputYear % 4 === 0 && inputYear % 100 !== 0) || (inputYear % 400 === 0)){
        console.log("Leap year");
        output.style.display = "block";
        output.innerHTML = "Wow " + username.value + "! You have born on <span id='result'>leap year!!</span>";
    }
    else{
        output.style.display = "block";
        output.innerHTML = "Hey " + username.value + "! Your birth year is <span id='result'>not a leap year</span>";
        console.log("Not leap year");
    }
}

btnSubmit.addEventListener("click", inputValidation);