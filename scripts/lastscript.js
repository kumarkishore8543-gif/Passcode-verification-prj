let storedGmail = localStorage.getItem("gmail");
let storedPass = localStorage.getItem("passWord");

let lastGmail = document.querySelector(".js-gmail");
let lastPass = document.querySelector(".js-pass");
let lastPara = document.querySelector(".js-para");

document.querySelector('.js-verify')
    .addEventListener('click', () => {

  let gmail = String(lastGmail.value).trim();
  let pass = String(lastPass.value).trim();
  if(!gmail.endsWith("@gmail.com")){
      lastPara.innerHTML = 'Enter a valid Email address must ends with (@gmail.com)';
      lastGmail.value ='';
      return;
  }else if(pass.length !== 6){
      lastPara.innerHTML = 'Password must be exactly 6 digit';
      lastPass.value ='';
  }
    if(gmail === storedGmail && pass === storedPass){
        lastPara.innerHTML = 'Verification completed Successfully';
        lastGmail.value = "";
        lastPass.value = "";
    }else{
        lastPara.innerHTML = 'Invalid email or password';
    }
});

