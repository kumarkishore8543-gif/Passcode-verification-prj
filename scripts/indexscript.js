let passWordInput = document.querySelector(".js-pass");
let created = document.querySelector(".js-verify");
let gmailInput = document.querySelector(".js-gmail");

document.querySelector('.js-submit')
    .addEventListener('click', () =>{
        let gmail = String(gmailInput.value).trim();
        let passWord = String(passWordInput.value).trim();

        if(!gmail.endsWith("@gmail.com")){
            created.innerHTML = 'Enter a valid Email address must ends with (@gmail.com)';
            gmailInput.value = '';
            return;
        } else if(passWord.length !==6){
            created.innerHTML = 'Password must be exactly 6 digits';
            passWordInput.value = '';
            return;
        }
        localStorage.setItem("gmail",gmail);
        localStorage.setItem("passWord",passWord);
        created.innerHTML = 'You have created an Account successfully';
        gmailInput.value ='';
        passWordInput.value ='';
        document.querySelector(".js-next").innerHTML = '<a href="last.html">Go to next Page</a>'
    })



