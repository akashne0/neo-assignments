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

function validation() {

    validationFlag = true;
    
    // for first name validation
    var firstName = document.getElementById("txt-firstname").value;
    if (firstName == ""){
        document.getElementById("sp-firstname-error").style.display = "block";
        document.getElementById("sp-firstname-error").innerHTML = "**Please enter your first name";
        validationFlag = false;

    }else{
        document.getElementById("sp-firstame-error").style.display = "none";
        document.getElementById("sp-firstname-error").innerHTML = "";
    }

    // for last name validation
    var lastname = document.getElementById("txt-lastname").value;
    if (lastname == ""){
        // alert("Last name must be filled out")
        document.getElementById("sp-lastname-error").style.display = "block";
        document.getElementById("sp-lastname-error").innerHTML = "**Please enter your last name";
        validationFlag = false;

    }else{
        document.getElementById("sp-lastname-error").style.display = "none";
        document.getElementById("sp-lastname-error").innerHTML = "";

    }

    // for phone number validation
    var phone = document.getElementById("txt-phone").value;
    // // if (phn == (1 > phn.length) || (10 < phn.length)){ 
    //     // if (phn.length !== 10)  {
    // number empty or not validation
    if (phone == ""){
        document.getElementById("sp-phone-error").style.display = "block";
        document.getElementById("sp-phone-error").innerHTML = " **Number cannot be blank ";
        validationFlag = false;

    }else if(phone.length != 10){
        document.getElementById("sp-phone-error").style.display = "block";
        document.getElementById("sp-phone-error").innerHTML = "**Please enter valid phone number";
        validationFlag = false;

    }else if (isNaN(phone)) {
        document.getElementById("sp-phone-error").style.display = "block";
        document.getElementById("sp-phone-error").innerHTML = "**Please enter only number";
        validationFlag = false;

    }else{
        document.getElementById("sp-phone-error").style.display = "none";
        document.getElementById("sp-phone-error").innerHTML = "";
    }

    
    var phoneNumberOffice = document.getElementById("txt-phone-number-office").value;
    // office number (only number no other char) validation;
    if (isNaN(phoneNumberOffice)) {
        document.getElementById("sp-phone-number-offic-error").style.display= "block";
        document.getElementById("sp-phone-number-offic-error").innerHTML= "**Please enter only number";
        validationFlag = false;

    }else{
        document.getElementById("sp-phone-number-offic-error").style.display= "none";
        document.getElementById("sp-phone-number-offic-error").innerHTML= "";
    }
    
    var email = document.getElementById("txt-email").value;
    // email id (empty or not) validation
    if (email == ""){
        document.getElementById("sp-email-error").style.display= "block";
        document.getElementById("sp-email-error").innerHTML= "**Email cannot be blank";
        validationFlag = false;

    }else{
        document.getElementById("sp-email-error").style.display= "none";
        document.getElementById("sp-email-error").innerHTML= "";
    }

    // email id (empty or not)format validation
    // var re = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8}+)(\.[a-z]{2,8})?$/;
    var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!regEmail.test(email)){
        document.getElementById("sp-email-error").style.display= "block";
        document.getElementById("sp-email-error").innerHTML= "**Email format is not valid";
        validationFlag = false;

    }else{
        document.getElementById("sp-email-error").style.display= "none";
        document.getElementById("sp-email-error").innerHTML= "";
    }
    
    
    var password = document.getElementById("txt-password").value;
    // password validation
    if (password == "") {
        document.getElementById("sp-password-error").innerHTML= "**password cannot be blank";
        validationFlag = false;

    }else{
        document.getElementById("sp-password-error").style.display= "none";
        document.getElementById("sp-password-error").innerHTML= "";
    }

    // alphanumeric validation;
    var regPassword = /^\w{8,12}$/;
    if (!regPassword.test(pass)){
        document.getElementById("sp-password-error").style.display= "block";
        document.getElementById("sp-password-error").innerHTML= "**Password should be alpha-numeric and between 8-12 characters";
        validationFlag = false;

    }else{
        document.getElementById("sp-password-error").style.display= "none";
        document.getElementById("sp-password-error").innerHTML= "";
    }

    var confirmPassword = document.getElementById("txt-confirm-password").value;
    // match password
    if (confirmPassword != password ) {
        document.getElementById("sp-confirm-password-error").style.display= "block";
        document.getElementById("sp-confirm-password-error").innerHTML= "**password do not match";
        validationFlag = false;

    }else{
        document.getElementById("sp-confirm-password-error").style.display= "none";
        document.getElementById("sp-confirm-password-error").innerHTML= "";
    }

    // DOB validation
    var  day= document.getElementById("birth-day").value;
    var  month= document.getElementById("birth-month").value;
    var   year= document.getElementById("birth-year").value;

    // if (day == "day" && month == "month" && year == "year"){
    //     document.getElementById("demo7").innerHTML= "please select proper date format";
    //     valid = false;
    // }else if (day != "day" && month == "month" && year == "year"){
    //     document.getElementById("demo7").innerHTML= "please select proper date format";
    //     valid = false;
    // }else if (day != "day" && month != "month" && year == "year"){
    //     document.getElementById("demo7").innerHTML= "please select proper date format";
    //     valid = false;
    // }else if{

    // }

    if (day == "day"){
        document.getElementById("sp-date-error").style.display= "block";
        document.getElementById("sp-date-error").innerHTML= "please select proper date format";
        validationFlag = false;

    }else if (month == "month"){
        document.getElementById("sp-date-error").style.display= "block";
        document.getElementById("sp-date-error").innerHTML= "please select proper date format";
        validationFlag = false;

    }else if(year == "year" ){
        document.getElementById("sp-date-error").style.display= "block";
        document.getElementById("sp-date-error").innerHTML= "please select proper date format";
        validationFlag = false;

    }else{
        document.getElementById("sp-date-error").style.display= "none";
        document.getElementById("sp-date-error").innerHTML= "";
    }

    // gender validation
    gender = document.getElementsByName("rdb-gender");
    if (!(gender[0].checked || gender[1].checked)) {
        document.getElementById("sp-gender-error").style.display = "block";
        document.getElementById("sp-gender-error").innerHTML = "**please select atleast 1 value";
        validationFlag = false;

    }else{
        document.getElementById("sp-gender-error").style.display = "none";
        document.getElementById("sp-gender-error").innerHTML = "";

    }
    
    // interest validation
    var checkboxActivity = document.querySelectorAll('input[name="chkbx-activity"]:checked').length;
    if (checkboxActivity < 2){
        document.getElementById("sp-interest-error").style.display = "block";
        document.getElementById("sp-interest-error").innerHTML = "**please select atleast 1 value";
        validationFlag = false;

    }else{
        document.getElementById("sp-interest-error").style.display = "none";
        document.getElementById("sp-interest-error").innerHTML = "";
    }

    // textbox validation
    var text = document.getElementById("txt-about").value;
    if (text == "" ){
        document.getElementById("sp-about-error").style.display = "block";
        document.getElementById("sp-about-error").innerHTML = " **please enter some text ";
        validationFlag = false;

    }else{
        document.getElementById("sp-about-error").style.display = "none";
        document.getElementById("sp-about-error").innerHTML = "";
    }
    return validationFlag;  
};


function calculateAge(){
    let  day= document.getElementById("birth-day").value;
    let  month= document.getElementById("birth-month").value;
    let   year= document.getElementById("birth-year").value;

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
