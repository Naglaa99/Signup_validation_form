let form = document.querySelector("form");
let emailField=form.querySelector('.email-field');
let emailInp=emailField.querySelector('.email');
let passField=form.querySelector('.create-password');
let passInp=passField.querySelector('.password');
let cpassField=form.querySelector('.confirm-password');
let cpassInp=cpassField.querySelector('.cpassword')
let eyeIcons=document.querySelectorAll('.show-hide')

//eyeicon show-hide
eyeIcons.forEach((eyeIcon)=>{
  eyeIcon.addEventListener('click',()=>{
    const pInp=eyeIcon.parentElement.querySelector("input")
    if(pInp.type==="password"){
      eyeIcon.classList.replace('bx-hide','bx-show')
      return (pInp.type="text")
    }
    eyeIcon.classList.replace('bx-show','bx-hide')
    pInp.type="password";
  })
})


// email_validation
 function checkEmail(){
     let  emailPattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
     if(!emailInp.value.match(emailPattern)){
       return emailField.classList.add("invalid")
     }
     emailField.classList.remove("invalid");
     emailField.classList.add("valid")
 }
 //create password
 function createPassword(){
    passPattern=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if(!passInp.value.match(passPattern)){
      return passField.classList.add("invalid")
    }
    passField.classList.remove("invalid");
    passField.classList.add("valid")
 }
 //confirm password
 function confirmPassword(){
   if(passInp.value!==cpassInp.value||cpassInp.value===""){
      return cpassField.classList.add("invalid")
   }
     cpassField.classList.remove("invalid");
     cpassField.classList.add("valid")
 }
 form.addEventListener("submit", (e) => {
    e.preventDefault(); //preventing form submitting
    checkEmail();
    createPassword()
    confirmPassword()
    //calling function on key up
    emailInp.addEventListener("keyup", checkEmail);
    passInp.addEventListener("keyup",createPassword);
    cpassInp.addEventListener("keyup",confirmPassword)
    if (
      !emailField.classList.contains("invalid") &&
      !passField.classList.contains("invalid")&&
      !cpassField.classList.contains("invalid")
      
    ) {
      location.href = form.getAttribute("action");
    }
  });