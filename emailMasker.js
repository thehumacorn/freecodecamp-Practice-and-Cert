let email = "myEmail@email.com";
function maskEmail(email){
   const emailFirstLetter = email.slice(0,1);
   const emailToBeMasked = email.slice(1 , email.indexOf("@") - 1);
   const replace = emailToBeMasked.replaceAll(/[a-zA-Z.]/g,"*");
   const emailLastLetter = email.slice(email.indexOf("@") - 1, email.indexOf("@"));
   const emailAdd = email.slice(email.indexOf("@"));
   email = emailFirstLetter + replace + emailLastLetter + emailAdd;
   return email;
}
console.log(maskEmail(email));
console.log(maskEmail("apple.pie@example.com"));
console.log(maskEmail("freecodecamp@example.com"));
console.log(maskEmail("info@test.dev"));
console.log(maskEmail("user@domain.org"));
