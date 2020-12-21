function validate() {
   output.innerHTML = '';
  var email = myForm.email;
     if (email.value == "") {
       document.getElementById("output").innerHTML = "The email is required!";
        email.focus();
  }
}