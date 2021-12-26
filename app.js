/*  Creating references for the following HTML elements:
    1. for input - username and date of birth
    2. for processing - submit button and elements to display warning message
    3. for output - output div element
*/
var username = document.querySelector("#name");
var dob = document.querySelector("#dob");
var btnSubmit = document.querySelector("#btn-submit");
var output = document.querySelector("#output");
var warningName = document.querySelector("#warning-username");
var warningDob = document.querySelector("#warning-dob");

/* inputValidation() method is used to check whether the input is provided or not.
    - There are 2 input fields in our case that is, 
        * username
        * date of birth.
    - This method displays warning message to user if the input is not provide and
    - if the input is provided, it calls another method leapYearCheck() to check for leap year.
*/
function inputValidation() {
    if (username.value == "") {
        warningName.style.display = "block";
    } else if (dob.value == "") {
        warningName.style.display = "none";
        warningDob.style.display = "block";
    } else {
        warningName.style.display = "none";
        warningDob.style.display = "none";
        leapYearCheck();
    }
}

/* leapYearCheck() method is used check whether the user has born on leap year or not.
    Let us explain this function with a sample input say 12th Dec 2012.
    Step 1 : The input returns date of birth in the format dd-mm-yyyy(here 12-12-2012) but we just need year part(yyyy) to analyse.
             Since the last 4 digits indicates the year, we are slicing the last 4 digit from the input(i.e. 2012).
    Step 2 : Check whether the year is leap year or not. The logic to find a leap year is explained in line-48.
    Step 3 : Display the result to the user in the output div element. (i.e. 2012 is a leap year)         
*/
function leapYearCheck() {
    // Step 1
    let inputYear = dob.value.slice(0, 4);
    console.log(inputYear);

    // Step 2
    /*  A normal year has 365 days and a leap year has 366 days( extra day is Feb 29).
        A leap year is checked differently for century years(year which is divisible by 100 like 1800,1900,2000) 
        and non-century years(year which is not divisible by 100 like 1992,2003,2021) as given below.
            - For non century year, it must be divisible by 4.
            - For century years, it must be divisible by 400 
        A year is said to be a leap year only if the above conditions are satisfied.*/
    if ((inputYear % 4 === 0 && inputYear % 100 !== 0) || (inputYear % 400 === 0)) {
        console.log("Leap year");
        output.style.display = "block";
        // Step 3
        output.innerHTML = "Wow " + username.value + "! You have born on <span id='result'>leap year!!</span>"; //Step 3
    } else {
        console.log("Not leap year");
        output.style.display = "block";
        // Step 3
        output.innerHTML = "Hey " + username.value + "! Your birth year is <span id='result'>not a leap year</span>"; //Step 3
    }
}

/* Before processing the input, it is very important to validate the user input. And thus we are triggering inputValidation() method
 when submit button is clicked. 
 Note : inputValidation() method internally calls leapYearCheck method() if input is valid. */
btnSubmit.addEventListener("click", inputValidation);