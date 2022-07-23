const pass = document.getElementById("password");
const conf = document.getElementById("confirm");

function passCheck() {

    if (pass.value == '' || conf.value == ''){
        document.querySelector('#password ~ .help').style.display = 'block';
        pass.style.borderColor = 'red';
        conf.style.borderColor = 'red';
        pass.setCustomValidity('Please fill field');
        conf.setCustomValidity('Please fill field');
        return;
    }
    else{
        document.querySelector('#password ~ .help').style.display = 'none';
        pass.style.borderColor = 'lightgray';
        conf.style.borderColor = 'lightgray';
        pass.setCustomValidity('');
        conf.setCustomValidity('');
    };
    
    if(pass.value == conf.value){
        document.querySelector('#password ~ .match').style.display = 'none';
        pass.setCustomValidity('');
        conf.setCustomValidity('');
        pass.style.borderColor = 'lightgray';
        conf.style.borderColor = 'lightgray';
    }
    else{
        document.querySelector('#password ~ .match').style.display = 'block';
        pass.setAttribute("isValid", false)
        pass.style.borderColor = 'red';
        conf.style.borderColor = 'red';
        pass.setCustomValidity('Passwords do not match');
        conf.setCustomValidity('Passwords do not match');
    }

}
pass.addEventListener("change", passCheck);
conf.addEventListener("change", passCheck);
