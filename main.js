const userInput = document.querySelector(".user-input");
const passInput = document.querySelector(".pass-input");
const userMsg = document.querySelector(".username-msg");
const passMsg = document.querySelector(".password-msg");
const signMsg = document.querySelector(".signin-status");
const signbtn = document.querySelector(".signin-button");

signbtn.addEventListener("click", signIn);

function signIn(event) {
    event.preventDefault();
    userMsg.innerText = ""; 
    passMsg.innerText = "";
    const userInputValue = userInput.value;
    const passInputValue = passInput.value;

    let ifSendData = true;

    if (userInputValue.length === 0 || userInputValue.indexOf("@") === -1 || userInputValue.indexOf("gmail.com") === -1) {
        userMsg.innerText = "Please enter a valid email address";
        ifSendData = false;
    }
    if(passInputValue.length === 0){
        passMsg.innerText = "Please enter Your password";
        console.log("eror");
        ifSendData = false;

    }else if  (passInputValue.length <= 7 ) {
        passMsg.innerText = "Your password must be at least 8 characters";
        console.log("eror");
        ifSendData = false;
    }
    if(ifSendData) {
        const body = JSON.stringify({
            username: userInputValue,
            password: passInputValue,
        })
        const header = {
            'Content-type': 'application/json; charset=UTF-8',
          }
        fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: body,
  headers: header, 
})
  .then(response => {
    if (response.ok === true){
      signMsg.innerText = "You signed in successfully"
    }
    
  })
    }

}

