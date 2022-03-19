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
    valid = true;
    // for first name validation
    var fname = document.getElementById("fName").value;
    if (fname == ""){
        document.getElementById("fName-error").style.display = "block";
        document.getElementById("fName-error").innerHTML = "**Please enter your first name";
        valid = false;
    }else{
        document.getElementById("fName-error").style.display = "none";
        document.getElementById("fName-error").innerHTML = "";
    }

    // for last name validation
    var lname = document.getElementById("lName").value;
    if (lname == ""){
        // alert("Last name must be filled out")
        document.getElementById("lName-error").style.display = "block";
        document.getElementById("lName-error").innerHTML = "**Please enter your last name";
       valid = false;
    }else{
        document.getElementById("lName-error").style.display = "none";
        document.getElementById("lName-error").innerHTML = "";

    }

    // for phone number validation
    var phone = document.getElementById("phone").value;
    // // if (phn == (1 > phn.length) || (10 < phn.length)){ 
    //     // if (phn.length !== 10)  {
    // number empty or not validation
    if (phone == ""){
        document.getElementById("phone-error").style.display = "block";
        document.getElementById("phone-error").innerHTML = " **Number cannot be blank ";
        valid = false;
    }else if(phone.length != 10){
        document.getElementById("phone-error").style.display = "block";
        document.getElementById("phone-error").innerHTML = "**Please enter valid phone number";
        valid = false;
    }else if (isNaN(phone)) {
        document.getElementById("phone-error").style.display = "block";
        document.getElementById("phone-error").innerHTML = "**Please enter only number";
       valid = false;
    }else{
        document.getElementById("phone-error").style.display = "none";
        document.getElementById("phone-error").innerHTML = "";
    }

    
    var poffice = document.getElementById("pOffice").value;
    // office number (only number no other char) validation;
    if (isNaN(poffice)) {
        document.getElementById("pOffice-error").style.display= "block";
        document.getElementById("pOffice-error").innerHTML= "**Please enter only number";
       valid = false;
    }else{
        document.getElementById("pOffice-error").style.display= "none";
        document.getElementById("pOffice-error").innerHTML= "";
    }
    
    var email = document.getElementById("email").value;
    // email id (empty or not) validation
    if (email == ""){
        document.getElementById("email-error").style.display= "block";
        document.getElementById("email-error").innerHTML= "**Email cannot be blank";
       valid = false;
    }else{
        document.getElementById("email-error").style.display= "none";
        document.getElementById("email-error").innerHTML= "";
    }

    // email id (empty or not)format validation
    // var re = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8}+)(\.[a-z]{2,8})?$/;
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!re.test(email)){
        document.getElementById("email-error").style.display= "block";
        document.getElementById("email-error").innerHTML= "**Email format is not valid";
       valid = false;
    }else{
        document.getElementById("email-error").style.display= "none";
        document.getElementById("email-error").innerHTML= "";
    }
    
    
    var pass = document.getElementById("pass").value;
        // password validation
    if (pass == "") {
        document.getElementById("pass-error").innerHTML= "**password cannot be blank";
       valid = false;  
    }else{
        document.getElementById("pass-error").style.display= "none";
        document.getElementById("pass-error").innerHTML= "";
    }

        // alphanumeric validation;
    var rege = /^\w{8,12}$/;
    if (!rege.test(pass)){
        document.getElementById("pass-error").style.display= "block";
        document.getElementById("pass-error").innerHTML= "**Password should be alpha-numeric and between 8-12 characters";
       valid = false;
    }else{
        document.getElementById("pass-error").style.display= "none";
        document.getElementById("pass-error").innerHTML= "";
    }

    var conpass = document.getElementById("conpass").value;
        // match password
    if (conpass != pass ) {
        document.getElementById("conpass-error").style.display= "block";
        document.getElementById("conpass-error").innerHTML= "**password do not match";
       valid = false;  
    }else{
        document.getElementById("conpass-error").style.display= "none";
        document.getElementById("conpass-error").innerHTML= "";
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
        document.getElementById("date-error").style.display= "block";
        document.getElementById("date-error").innerHTML= "please select proper date format";
        valid = false;
    }else if (month == "month"){
        document.getElementById("date-error").style.display= "block";
        document.getElementById("date-error").innerHTML= "please select proper date format";
        valid = false;
    }else if(year == "year" ){
        document.getElementById("date-error").style.display= "block";
        document.getElementById("date-error").innerHTML= "please select proper date format";
        valid = false;
    }else{
        document.getElementById("date-error").style.display= "none";
        document.getElementById("date-error").innerHTML= "";
    }

    // gender validation
    gender = document.getElementsByName("rdb-gender");
    if (!(gender[0].checked || gender[1].checked)) {
        document.getElementById("gender-error").style.display = "block";
        document.getElementById("gender-error").innerHTML = "**please select atleast 1 value";
            valid = false; 
    }else{
        document.getElementById("gender-error").style.display = "none";
        document.getElementById("gender-error").innerHTML = "";

    }
    
    // interest validation
    var checkboxActivity = document.querySelectorAll('input[name="rdb-gender"]:checked').length;
    if (checkboxActivity < 2){
        document.getElementById("interest-error").style.display = "block";
        document.getElementById("interest-error").innerHTML = "**please select atleast 1 value";
        valid = false; 
    }else{
        document.getElementById("interest-error").style.display = "none";
        document.getElementById("interest-error").innerHTML = "";
    }

    // textbox validation
    var text = document.getElementById("about").value;
    if (text == "" ){
        document.getElementById("about-error").style.display = "block";
        document.getElementById("about-error").innerHTML = " **please enter some text ";
            valid = false;
    }else{
        document.getElementById("about-error").style.display = "none";
        document.getElementById("about-error").innerHTML = "";
    }
    
    return valid;  
}


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
}
