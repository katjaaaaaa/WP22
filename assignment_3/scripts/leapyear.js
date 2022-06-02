function validateForm(){

    $('#name-l').keyup(function () {
        checkName();
    });
    $('#age-l').keyup(function () {
        checkAge();
    });
    $('#place-l').keyup(function () {
        checkPlace();
    });
    $('#e-mail-l').keyup(function () {
        checkEmail();
    });

    if (checkName() && checkAge() && checkPlace() && checkEmail())
    {
        return true
    }
    else
    {
        return false
    }
}

function checkName(){
    let name_input = $('#name-l');
    let cur_val = name_input.val();
    let name_regex = "^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$";
    if (cur_val.match(name_regex) && cur_val !== ''){
        name_input.addClass('is-valid');
        name_input.removeClass('is-invalid');
        return true;
    }
    else if (cur_val === ''){
        name_input.removeClass('is-valid');
        name_input.removeClass('is-invalid');
    }
    else{
        name_input.removeClass('is-valid');
        name_input.addClass('is-invalid');
        return false;
    }
}

function checkAge(){
    let name_input = $('#age-l');
    let cur_val = name_input.val();
    let age_regex = "^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|120)$";
    if (cur_val.match(age_regex) && cur_val !== ''){
        name_input.removeClass('is-invalid');
        name_input.addClass('is-valid');
        return true;
    }
    else if (cur_val === ''){
        name_input.removeClass('is-valid');
        name_input.removeClass('is-invalid');
    }
    else{
        name_input.removeClass('is-valid');
        name_input.addClass('is-invalid');
        return false;
    }
}

function checkPlace(){
    let name_input = $('#place-l');
    let cur_val = name_input.val();
    let place_regex = "^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$";
    if (cur_val.match(place_regex) && cur_val !== ''){
        name_input.removeClass('is-invalid');
        name_input.addClass('is-valid');
        return true;
    }
    else if (cur_val === ''){
        name_input.removeClass('is-valid');
        name_input.removeClass('is-invalid');
    }
    else{
        name_input.removeClass('is-valid');
        name_input.addClass('is-invalid');
        return false;
    }
}

function checkEmail(){
    let name_input = $('#e-mail-l');
    let cur_val = name_input.val();
    let mail_regex = "^([a-zA-Z0-9_\\-\\._]+)@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.)|(([a-zA-Z0-9\\-_]+\\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\\]?)$";
    if (cur_val.match(mail_regex) && cur_val !== ''){
        name_input.removeClass('is-invalid');
        name_input.addClass('is-valid');
        return true;
    }
    else if (cur_val === ''){
        name_input.removeClass('is-valid');
        name_input.removeClass('is-invalid');
    }
    else{
        name_input.removeClass('is-valid');
        name_input.addClass('is-invalid');
        return false;
    }
}

function checkFilledData(){

    let valid = true;
    let curr_data = [
        $('#name-l').val(),
        $('#place-l').val(),
        $('#age-l').val(),
        $('#e-mail-l').val()
    ]

    if (curr_data.includes("")){
        valid = false;
    }

    if (valid === false){
        let content = document.getElementById("form-alert");
        content.style.display = 'block';
        return false
    }
    else {
        return true
    }
}

$(function() {
    validateForm();
    $('#submit').click(function() {
        if (checkFilledData()){
            $('#form-alert').hide(); // DO WE NEED IT??
            $("form").submit();
        }
    })
});