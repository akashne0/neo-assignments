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
        document.getElementById("fName-error").innerHTML= "**Please enter your first name";
        valid = false;
    }

    // for last name validation
    var lname = document.getElementById("lName").value;
    if (lname == ""){
        // alert("Last name must be filled out")
        document.getElementById("lName-error").innerHTML= "**Please enter your last name";
       valid = false;
    }

    // for phone number validation
    var phn = document.getElementById("phone").value;
    // // if (phn == (1 > phn.length) || (10 < phn.length)){ 
    //     // if (phn.length !== 10)  {
    // number empty or not validation
    if (phn == ""){
        document.getElementById("phone-error").innerHTML= " **Number cannot be blank ";
        valid = false;
        }

    // number length should only be 10.
     if (phn.length != 10) {
        document.getElementById("phone-error").innerHTML= "**Please enter valid phone number";
        valid = false;
    }

    // only number validation 
    if (isNaN(phn)) {
        document.getElementById("phone-error").innerHTML= "**Please enter only number";
       valid = false;
    }

    
    var poffice = document.getElementById("pOffice").value;
    // office number (only number no other char) validation;
    if (isNaN(poffice)) {
        document.getElementById("pOffice-error").innerHTML= "**Please enter only number";
       valid = false;
    }
    
    var email = document.getElementById("email").value;
    // email id (empty or not) validation
    if (email == ""){
        document.getElementById("email-error").innerHTML= "**Email cannot be blank";
       valid = false;
    }

    // email id (empty or not)format validation
    // var re = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8}+)(\.[a-z]{2,8})?$/;
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!re.test(email)){
        document.getElementById("email-error").innerHTML= "**Email format is not valid";
       valid = false;
    }
    
    
    var pass = document.getElementById("pass").value;
        // password validation
    if (pass == "") {
        document.getElementById("pass-error").innerHTML= "**password cannot be blank";
       valid = false;  
    }   

        // alphanumeric validation;
    var rege = /^\w{8,12}$/;
    if (!rege.test(pass)){
        document.getElementById("pass-error").innerHTML= "**Password should be alpha-numeric and between 8-12 characters";
       valid = false;
    }

    var conpass = document.getElementById("conpass").value;
        // match password
    if (conpass != pass ) {
        document.getElementById("conpass-error").innerHTML= "**password do not match";
       valid = false;  
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
        document.getElementById("date-error").innerHTML= "please select proper date format";
        valid = false;
    }else if (month == "month"){
        document.getElementById("date-error").innerHTML= "please select proper date format";
        valid = false;
    }else if(year == "year" ){
        document.getElementById("date-error").innerHTML= "please select proper date format";
        valid = false;
    }

    // gender validation
    gender = document.forms.radio.value;
    if (gender <= 0) {
        document.getElementById("gender-error").innerHTML = "**please select atleast 1 value";
            valid = false; 
    }
    
    // interest validation
    var check = document.querySelector('input[name="checkbox1"]:checked');
    if (check == null){
        document.getElementById("interest-error").innerHTML = "**please select atleast 1 value";
            valid = false; 
    }

    // textbox validation
    var text = document.getElementById("about").value;
    if (text == "" ){
        document.getElementById("about-error").innerHTML = " **please enter some text ";
       valid = false;
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
