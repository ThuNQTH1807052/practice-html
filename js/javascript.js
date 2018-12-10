var btnSubmit = document.forms['register-form']['btnSubmit'];
btnSubmit.onclick = function () {
    if (validateForm()) {
        displayInfor();
    }
}

function displayInfor() {
    document.getElementById("name").textContent = document.forms['register-form']['fullName'].value;
    document.getElementById("email").textContent = document.forms['register-form']['email'].value;
    document.getElementById("phone").textContent = document.forms['register-form']['phone'].value;
    document.getElementById("intro").textContent = document.getElementById("introinput").value;
    document.getElementById("c1i").checked = document.getElementById("c1").checked;
    document.getElementById("c2i").checked = document.getElementById("c2").checked;
    document.getElementById("c3i").checked = document.getElementById("c3").checked;
    document.getElementById("c4i").checked = document.getElementById("c4").checked;
    document.getElementById("c5i").checked = document.getElementById("c5").checked;
    document.getElementById("other").textContent = document.getElementById("otherinput").value;
    document.getElementById("sli").selectedIndex = document.getElementById("sl").selectedIndex;
    document.getElementById("inputform").style.display = "none";
    document.getElementById("inforform").style.display = "block";
}

function validateForm() {
    var isValid = true;
    var isValidFullName = true;
    var isValidEmail = true;
    var isValidPhone = true;

    var txtFullName = document.forms['register-form']['fullName'];
    var msgFullName = txtFullName.nextElementSibling;
    if (txtFullName.value == null || txtFullName.value.length == 0 || txtFullName.value.length > 50) {
        msgFullName.classList.remove('msg-success');
        msgFullName.classList.add('msg-error');
        msgFullName.innerHTML = 'Full name is required!';
    } else {
        msgFullName.classList.remove('msg-error');
        msgFullName.classList.add('msg-success');
        msgFullName.innerHTML = 'Full name is valid.';
    }
    var emailEmail = document.forms['register-form']['email'];
    var msgEmail = emailEmail.nextElementSibling;
    if (emailEmail.value == null || emailEmail.value.length == 0) {
        msgEmail.classList.remove('msg-success');
        msgEmail.classList.add('msg-error');
        msgEmail.innerHTML = 'Email is required!';
        isValidEmail = false;
    } else {
        msgEmail.classList.remove('msg-error');
        msgEmail.classList.add('msg-success');
        msgEmail.innerHTML = 'Email is valid.';
    }
    var txtPhone = document.forms['register-form']['phone'];
    var msgPhone = txtPhone.nextElementSibling;
    if (txtPhone.value == null || txtPhone.value.length == 0) {
        msgPhone.classList.remove('msg-success');
        msgPhone.classList.add('msg-error');
        msgPhone.innerHTML = 'Phone is required!';
        isValidPhone = false;
    } else {
        msgPhone.classList.remove('msg-error');
        msgPhone.classList.add('msg-success');
        msgPhone.innerHTML = 'Phone is valid.';
    }

    isValid = isValidFullName && isValidEmail && isValidPhone
    return isValid;
}