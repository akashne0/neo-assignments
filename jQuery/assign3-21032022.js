
// document is ready
$(document).ready(function(){

    // validate firstname
    $("#sp-firstname-error").hide();
    let firstNameError = true;
    $("#txt-firstname").keyup(function(){
        validateFirstName();    
    });

    function validateFirstName(){
        let firstNameValue = $("#txt-firstname").val();

        if (firstNameValue.length == ''){
            $("#sp-firstname-error").show();
            $('#sp-firstname-error').html("**Length of first-name cannot be empty.");
            $("#sp-firstname-error").focus();
            firstNameError = false;   
            return false;
        }else{
            $("#sp-firstname-error").hide();
        };
    };


    // validate lastname
    $("#sp-lastname-error").hide();
    let lastNameError = true;
    $("#txt-lastname").keyup(function(){
        validateLastName();    
    });

    function validateLastName(){
        let lastNameValue = $("#txt-lastname").val();

        if (lastNameValue.length == ''){
            $("#sp-lastname-error").show();
            $('#sp-lastname-error').html("**length of last-name cannot be empty.");
            $("#sp-lastname-error").focus();
            lastNameError = false;   
            return false;
        }else{
            $("#sp-lastname-error").hide();
        };
    };


    // validate phone number
    $("#sp-phone-error").hide();
    let phoneNumberError = true;
    $("#txt-phone").keyup(function(){
        validatePhoneNumber();    
    });

    function validatePhoneNumber(){
        let phoneNumberValue = $("#txt-phone").val();

        if (phoneNumberValue.length == ''){
            $("#sp-phone-error").show();
            $('#sp-phone-error').html("**Phone number cannot be empty.");
            $("#sp-phone-error").focus();
            phoneNumberError = false;   
            return false;

        }else if(phoneNumberValue.length != 10){
            $("#sp-phone-error").show();
            $('#sp-phone-error').html("**Please enter valid phone number.");
            $("#sp-phone-error").focus();
            phoneNumberError = false;   
            return false;

        }else if(isNaN(phoneNumberValue)){
            $("#sp-phone-error").show();
            $('#sp-phone-error').html("**Please enter only number.");
            $("#sp-phone-error").focus();
            phoneNumberError = false;   
            return false;

        }else{
            $("#sp-phone-error").hide();
        };
    };


    // validate office phone number
    $("#sp-phone-number-office-error").hide();
    let officePhoneNumberError = true;
    $("#txt-phone-number-office").keyup(function(){
        validateOfficePhoneNumber();    
    });

    function validateOfficePhoneNumber(){
        let officePhoneNumberValue = $("#txt-phone-number-office").val();
        var regNumber = /^[0-9]{0,10}$/
        if((isNaN(officePhoneNumberValue)) || (!regNumber.test(officePhoneNumberValue))){
            $("#sp-phone-number-office-error").show();
            $('#sp-phone-number-office-error').html("**Please enter only number or 10 digits number.");
            $("#sp-phone-number-office-error").focus();
            officePhoneNumberError = false;   
            return false;

        }else if(officePhoneNumberValue.length == null){
            $("#sp-phone-number-office-error").hide();
        }else{
            $("#sp-phone-number-office-error").hide();
        };
    };


    // validate email
    $("#sp-email-error").hide();
    let emailError = true;
    $("#txt-email").keyup(function(){
        validateEmail();    
    });

    function validateEmail(){
        let emailValue = $("#txt-email").val();
        let regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (emailValue.length == ''){
            $("#sp-email-error").show();
            $('#sp-email-error').html("**Email cannot be blank.");
            $("#sp-email-error").focus();
            emailError = false;   
            return false;

        }else if(!(regEmail.test(emailValue))){
            $("#sp-email-error").show();
            $('#sp-email-error').html("**Email format is not valid.");
            $("#sp-email-error").focus();
            emailError = false;   
            return false;

        }else{
            $("#sp-email-error").hide();
        }
    };


    // validate password
    $("#sp-password-error").hide();
    let passwordError = true;
    $("#txt-password").keyup(function(){
        validatePassword();    
    });

    function validatePassword(){
        var passwordValue = $("#txt-password").val();
        let regPassword = /^\w{8,12}$/;

        if (passwordValue.length == ''){
            $("#sp-password-error").show();
            $('#sp-password-error').html("**Password cannot be blank.");
            $("#sp-password-error").focus();
            passwordError = false;   
            return false;

        }else if(!(regPassword.test(passwordValue))){
            $("#sp-password-error").show();
            $('#sp-password-error').html("**Password format is not valid (alpha-numeric between 8 - 12).");
            $("#sp-password-error").focus();
            passwordError = false;   
            return false;

        }else{
            $("#sp-password-error").hide();
        }
    };


    // validate confirm password
    $("#sp-confirm-password-error").hide();
    let confirmPasswordError = true;
    $("#txt-confirm-password").keyup(function(){
        validateConfirmPassword();    
    });

    function validateConfirmPassword(){
        let confirmPasswordValue = $("#txt-confirm-password").val();
        var passwordValue = $("#txt-password").val();

        if (confirmPasswordValue != passwordValue){
            $("#sp-confirm-password-error").show();
            $('#sp-confirm-password-error').html("**Passwords do not match.");
            $("#sp-confirm-password-error").focus();
            confirmPasswordError = false;   
            return false;

        }else{
            $("#sp-confirm-password-error").hide();
        }
    };


    // validate month
    $("#sp-date-error").hide();
    var dateError = true;
    $("#birth-month").click(function(){
        validateMonth();    
    });

    function validateMonth(){
        var birthMonthValue = $("#birth-month").val();

        if (birthMonthValue  == 'month'){
            $("#sp-date-error").show();
            $('#sp-date-error').html("**Please select proper date format.");
            $("#sp-date-error").focus();
            dateError = false;   
            return false;
        }else{
            $("#sp-date-error").hide();
        }
    };


    // validate day
    $("#sp-date-error").hide();
    var dateError = true;
    $("#birth-day").click(function(){
        validateDay();    
    });

    function validateDay(){
        var birthDayValue = $("#birth-day").val();

        if (birthDayValue  == 'day'){
            $("#sp-date-error").show();
            $('#sp-date-error').html("**Please select proper date format.");
            $("#sp-date-error").focus();
            dateError = false;   
            return false;
        }else{
            $("#sp-date-error").hide();
        }
    };


    // validate year
    $("#sp-date-error").hide();
    var dateError = true;
    $("#birth-year").click(function(){
        validateYear();    
    });

    function validateYear(){
        var birthYearValue = $("#birth-year").val();

        if (birthYearValue  == 'year'){
            $("#sp-date-error").show();
            $('#sp-date-error').html("**Please select proper date format.");
            $("#sp-date-error").focus();
            dateError = false;   
            return false;
        }else{
            $("#sp-date-error").hide();
        }
    };


    // validate gender
    $("#sp-gender-error").hide();
    let genderError = true;
    $("#btn-submit").click(function(){
        validateGender();    
    });

    function validateGender(){
        var genderValue = $("input[name = 'rdb-gender']:checked").val();

        if (genderValue == null){
            $("#sp-gender-error").show();
            $('#sp-gender-error').html("**please select your gender.");
            genderError = false;   
            return false;

        }else{
            $("#sp-gender-error").hide();
        }
    };
    

    // validate interest
    $("#sp-interest-error").hide();
    let interestError = true;
    $("#btn-submit").click(function(){
        validateInterest();    
    });

    function validateInterest(){
        var interestValue = $("input[name = 'chkbx-activity']:checked").val();

        if (interestValue == null){
            $("#sp-interest-error").show();
            $('#sp-interest-error').html("**please select atleast 1 activity.");
            interestError = false;   
            return false;

        }else{
            $("#sp-interest-error").hide();
        }
    };


    // validate about you
    $("#sp-about-error").hide();
    let aboutYouError = true;
    $("#txt-about").keyup(function(){
        validateAboutYou();    
    });

    function validateAboutYou(){
        let aboutYouValue = $("#txt-about").val();

        if (aboutYouValue.length == ''){
            $("#sp-about-error").show();
            $("#sp-about-error").html("**please enter some text. ");
            $("#sp-about-error").focus();
            aboutYouError = false;   
            return false;
        }else{
            $("#sp-about-error").hide();
        };
    };


    // Submit button
    $('#btn-submit').click(function(){
        firstNameError == true;
        lastNameError == true;
        phoneNumberError = true;
        officePhoneNumberError = true;
        emailError = true;
        passwordError = true;
        confirmPasswordError = true;
        genderError = true;
        interestError = true;
        aboutYouError = true;
        dateError = true;

        validateFirstName();
        validateLastName();
        validatePhoneNumber();
        validateOfficePhoneNumber();
        validateEmail();
        validatePassword();
        validateConfirmPassword();
        validateGender();
        validateMonth();
        validateDay();
        validateYear();
        validateInterest();
        validateAboutYou();
        
        if((firstNameError == true) && (lastNameError == true) 
            && (phoneNumberError = true) && (officePhoneNumberError = true) 
            && (emailError = true) && ( passwordError = true) 
            && (confirmPasswordError = true) && (dateError = true)
            && (genderError = true) && (interestError = true) 
            && (aboutYouError = true)){
                return true;    
        }else{
            return false;
        }
    });

});


window.onload = function () {
    //Reference the DropDownList.
    var years = document.getElementById("birth-year");

    //Determine the Current Year.
    var currentYear = (new Date()).getFullYear();

    //Loop and add the Year values to DropDownList.
    for (var year = 1950; year <= currentYear; year++) {
        var option = document.createElement("option");
        option.innerHTML = year;
        option.value = year;
        years.appendChild(option);
    }
};

// validate age
function calculateAge(){
    let day= document.getElementById("birth-day").value;
    let month= document.getElementById("birth-month").value;
    let year= document.getElementById("birth-year").value;
        
    document.getElementById("day-29").style.display = "block";
    document.getElementById("day-30").style.display = "block";
    document.getElementById("day-31").style.display = "block";

    if(month == "4"){
        document.getElementById("day-31").style.display = "none";
    };
    if(month == "6" ){
        document.getElementById("day-31").style.display = "none";
    };
    if(month == "9" ){
        document.getElementById("day-31").style.display = "none";
    };
    if(month == "11"){
        document.getElementById("day-31").style.display = "none";
    };

    if(month == "2" && (year % 4 == 0)){
        // if(year % 4 == 0){
            document.getElementById("day-30").style.display = "none";
            document.getElementById("day-31").style.display = "none";
    }else if(month == "2" && (year % 4 != 0)){
            document.getElementById("day-29").style.display = "none";
            document.getElementById("day-30").style.display = "none";
            document.getElementById("day-31").style.display = "none";
    };

    

    if( day != "day" && month != "month" && year != "year" ){
        var stringDate = month + "/" + day + "/" + year 
        var timestamp = Date.parse(stringDate);
        var dateObject = new Date(timestamp);

        var currentYear = new Date().getFullYear();
        var birthYear = dateObject.getFullYear();
        var age = currentYear - birthYear;
        
        // alert(age);
        // var msg = "You are " + age + " years old";
        document.getElementById("txt-age").value = age;
    }
};


