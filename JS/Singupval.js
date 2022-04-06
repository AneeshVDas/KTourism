    //Password Validation
    var reTyePwd = document.getElementById("form3Example4cdg");
    var myInput = document.getElementById("psw");
    var letter  = document.getElementById("letter");
    var capital = document.getElementById("capital");
    var number  = document.getElementById("number");
    var length  = document.getElementById("length");
    var specialchar = document.getElementById("specialchar");
    
    // When the user clicks on the password field, show the message box
    myInput.onfocus = function() {
      document.getElementById("message").style.display = "block";
    }
    // When the user clicks outside of the password field, hide the message box
    myInput.onblur = function() {
      document.getElementById("message").style.display = "none";
    }
    // When the user starts to type something inside the password field
    myInput.onkeyup = function() {
      validatePassword();
    }

    function validatePassword(){
      var password_strength = document.getElementById("password-text");
        //TextBox left blank.
      if (myInput.length == 0) {
        password_strength.innerHTML = "";
        return false;
      }
      var passed = 0;
      // Validate lowercase letters 1
      var lowerCaseLetters = /[a-z]/g;
      if(myInput.value.match(lowerCaseLetters)) {  
        letter.classList.remove("invalid");
        letter.classList.add("valid");
        passed++;
      } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
      }
      
      // Validate capital letters 2
      var upperCaseLetters = /[A-Z]/g;
      if(myInput.value.match(upperCaseLetters)) {  
        capital.classList.remove("invalid");
        capital.classList.add("valid");
        passed++;
      } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
      }
    
      // Validate numbers 3
      var numbers = /[0-9]/g;
      if(myInput.value.match(numbers)) {  
        number.classList.remove("invalid");
        number.classList.add("valid");
        passed++;
      } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
      }
      
      // Validate length 4
      if(myInput.value.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
        passed++;
      } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
      }


      

      // Validate Special Character 5
      var specialcharacter = /[!@#\$%\^&\*_]/g;
      if(myInput.value.match(specialcharacter)) {  
        specialchar.classList.remove("invalid");
        specialchar.classList.add("valid");
        passed++;
      } else {
        specialchar.classList.remove("valid");
        specialchar.classList.add("invalid");
      }


      //Display status.
      var strength = "";
      switch (passed) {
        case 0:
        case 1:
          strength = "<small class='progress-bar bg-danger' style='width: 20%'>Weak</small>";
          break;
        case 2:
          strength = "<small class='progress-bar bg-danger' style='width: 40%'>Weak</small>";
          break;
        case 3:
          strength = "<small class='progress-bar bg-warning' style='width: 60%'>Medium</small>";
          break;
        case 4:
          strength = "<small class='progress-bar bg-success' style='width: 80%'>Medium</small>";
          break;
        case 5:
          strength = "<small class='progress-bar bg-success' style='width: 100%'>Strong</small>";
          break;
      }
      password_strength.innerHTML = strength;
      if (passed==5){
          return true;
      }
      else{
        return false;
      }
    }



    //Email Validation
    let email = document.getElementById("form3Example3cg");
    let pwdMessageD = document.getElementById("pwdMessageD");
    // When the user clicks on the email field, show the message box
     email.onfocus = function() {
     document.getElementById("pwdmessage").style.display = "block";
     }
     // When the user clicks outside of the email field, hide the message box
     email.onblur = function() {
     document.getElementById("pwdmessage").style.display = "none";
     }

    email.onkeyup = function() {
        validateEmail();
     }

     function validateEmail(){
      var strength = "";
      //TextBox left blank.
      if (email.length == 0) {
          strength = "Email cannot be blank";
          pwdMessageD.innerHTML = strength;
          return false
      }
      let regexp = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
      if(regexp.test(email.value)){
          strength = "<small class='progress-bar bg-success' style='width: 100%'>Valid Email</small>";
          pwdMessageD.innerHTML = strength;
          pwdMessageD.classList.remove("invalid");
          pwdMessageD.classList.add("valid");
          return true;
      }
      else{
          strength = "<small class='progress-bar bg-danger' style='width: 100%'>Invalid Email</small>";
          pwdMessageD.innerHTML = strength;
          pwdMessageD.classList.remove("valid");
          pwdMessageD.classList.add("invalid");
          return false;
      }
    }

    //Phone Validation Start
      let phoneno = document.getElementById("form3Example5cg");
      let phoneMessageD = document.getElementById("phoneMessageD");

    // When the user clicks on the email field, show the message box
     phoneno.onfocus = function() {
        document.getElementById("phonemessage").style.display = "block";
     }
      // When the user clicks outside of the email field, hide the message box
      phoneno.onblur = function() {
        document.getElementById("phonemessage").style.display = "none";
      }
    phoneno.onkeyup = function() {
      validatePhoneNo();
     }
     function validatePhoneNo(){
      var strength = "";
      //TextBox left blank.
      if (phoneno.length == 0) {
          phoneMessageD.innerHTML = "Phone NO cannot be blank";
          return false
      }
      let regexp =  /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
      if(regexp.test(phoneno.value)){
          strength = "<small class='progress-bar bg-success' style='width: 100%'>Valid Phone NO</small>";
          phoneMessageD.innerHTML = strength;
          phoneMessageD.classList.remove("invalid");
          phoneMessageD.classList.add("valid");
          return true;
      }
      else{
          strength = "<small class='progress-bar bg-danger' style='width: 100%'>Invalid Phone No. Acceptable formats XXX-XXX-XXXX, XXX.XXX.XXXX, XXX XXX XXXX</small>";
          phoneMessageD.innerHTML = strength;
          phoneMessageD.classList.remove("valid");
          phoneMessageD.classList.add("invalid");
          return false;
      }
     }

     function ValidateLogin(){
        if (validateEmail() == false)
        {
          document.getElementById("form3Example3cg").focus();
          return false;
        }
        else if (validatePhoneNo() == false)
        {
          document.getElementById("form3Example5cg").focus();
          return false; 
        }
        else if(validatePassword() == false)
        {
          document.getElementById("psw").focus();
          return false;
        }
        else if (myInput.value != reTyePwd.value)
        {
          alert("password and repeat password not maching");
          document.getElementById("form3Example4cdg").focus();
          return false;
        }
        else
        {
          return true;
        }
     }

     function isNumber(evt) 
     {
      evt = (evt) ? evt : window.event;
      var charCode = (evt.which) ? evt.which : evt.keyCode;
      //alert(charCode);
      if (charCode > 31 && (charCode < 48 || charCode > 57)){
        if((charCode == 45) || (charCode == 46) || (charCode == 32))
        {
          return true
        }   
        else{
          return false;
        }
      }
      return true;
    }
