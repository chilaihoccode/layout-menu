const formLogin = document.forms.Login;
const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const rules = {
    email : {
        required : true,
        minlength : 3 ,
        regex : mailFormat
    },
    password : {
        required : true,
        minlength : 8
    }
}

const methodRules = {
    required : (inputText,param) => {
        return inputText ? true : false
    },
    minlength : (inputText,param) => {
        return inputText.length >= param ? true:false
    },
    regex : (inputText,param) => {
        return mailFormat.test(inputText)
    }
}

const messageError = {
    email_required : 'Email ko dc bo trong',
    email_minlength : 'Email co it nhat 3 ki tu',
    email_regex : 'Email phai dung dinh dang',
    password_required : 'Password ko dc bo trong',
    password_minlength : 'Password co it nhat 8 ki tu'

}


const handleValdate = (e) => {
    for ( let ruleName in rules) {
        // console.log(ruleName)
        const inputSelector = document.getElementById(ruleName);
        const inputText = inputSelector.value;
        // console.log(inputText)
        inputSelector.classList.remove('error');
        inputSelector.nextElementSibling.innerText = "";
        const validate = rules[ruleName];
        for ( let valName in validate) {
            // console.log(valName)
            const param = validate[valName];
            const result = methodRules[valName](inputText,param);           
            if (!result) {         
                const message = messageError[`${ruleName}_${valName}`];      
                inputSelector.classList.add('error');
                inputSelector.nextElementSibling.innerText = message
                break;
            }
          
        }
       
    }
    e.preventDefault();
}

formLogin.addEventListener('submit',handleValdate)