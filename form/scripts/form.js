const LOGIN_CHECK_RULE = /^[-._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}$/;
const PASSWORD_CHECK_RULE = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/;
var LOGIN_CORRECT;
var PASSWORD_CORRECT;

function validationInputData(inputType){
    if(inputType == 'login'){
        LOGIN_CORRECT = LOGIN_CHECK_RULE.test(document.getElementById('login').value);
        highlightingInput(LOGIN_CORRECT);
    }else if(inputType == 'password'){
        PASSWORD_CORRECT = PASSWORD_CHECK_RULE.test(document.getElementById('password').value);
        highlightingInput(PASSWORD_CORRECT);
    }

    function highlightingInput(choice) {
        if (choice) {
            document.getElementById(inputType).style.borderColor = '#9EFFB6';
            document.getElementById(inputType + "Error").style.display = 'none';
        } else {
            document.getElementById(inputType).style.borderColor = 'red';
            document.getElementById(inputType + "Error").style.display = 'block';
        }
    }
}

function buttonLock(){
    if(LOGIN_CORRECT == false && PASSWORD_CORRECT == false){
        alert('no');
        document.getElementById('button').setAttribute("disabled", "disabled");
    }}


