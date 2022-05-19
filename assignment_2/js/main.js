function validateForm(){

    $('#name').keyup(function () {
        checkName();
    });
    $('#age').keyup(function () {
        checkAge();
    });
    $('#city').keyup(function () {
        checkCity();
    });
    $('#e-mail').keyup(function () {
        checkEmail();
    });
    $('#ph-number').keyup(function () {
        checkNumber();
    });

    if (checkName() && checkAge() && checkCity() && checkEmail() && checkNumber)
    {
        return true
    }
    else
    {
        return false
    }
}

function writeFormData(){

    let curr_data = {
        name: $('#name').val(),
        age: $('#age').val(),
        city: $('#city').val(),
        email: $('#e-mail').val(),
        ph_number: $('#ph-number').val()
    }
}

function checkName(){
    let name_input = $('#name');
    let cur_val = name_input.val();
    let name_regex = "^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$";
    if (cur_val.match(name_regex)){
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
    let name_input = $('#age');
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

function checkCity(){
    let name_input = $('#city');
    let cur_val = name_input.val();
    let name_regex = "^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$";
    if (cur_val.match(name_regex) && cur_val !== ''){
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
    let name_input = $('#e-mail');
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

function checkNumber(){
    let name_input = $('#ph-number');
    let cur_val = name_input.val();
    let number_regex = "[0-9][0-9][0-9][0-9][0-9][0-9]+";
    if (cur_val.match(number_regex) && cur_val !== ''){
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

function eraseData(){
    let values_list = $('#name,#age,#city,#e-mail,#ph-number');
    values_list.val("");
    values_list.removeClass('is-valid');
    values_list.removeClass('is-invalid');
    $('#form-alert').hide();
    $('#form-content').hide();
}


function checkFilledData(){

    let valid = true;
    let curr_data = [
        $('#name').val(),
        $('#age').val(),
        $('#city').val(),
        $('#e-mail').val(),
        $('#ph-number').val()
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

function addData(){

    let list = document.getElementById("form-content");

    let curr_data = [
        $('#name').val(),
        $('#age').val(),
        $('#city').val(),
        $('#e-mail').val(),
        $('#ph-number').val()
    ]

    for (let i = 0; i < 5; i++)
    {
        let el = document.getElementsByTagName("td")[i];
        el.innerHTML = curr_data[i];
    }

    list.style.display = "block";

}

$(function() {
    validateForm();
    $('#submit-bt').click(function() {
        if (checkFilledData()){
            writeFormData();
            addData();
            $('#form-alert').hide();
        }
    })
    $('#erase-bt').click(function() {
        eraseData();
    })

    $('#contact-tab').click(function() {
        // adding active classes to contact tab
        $(".tab-pane"). addClass("active");
        $(".nav-link").addClass("active");

        // disabling active classes by links
        $("#links").removeClass("active");
        $("#link-tab").removeClass("active");

    })

    $('#link-tab').click(function() {

        // adding active classes to links tab
        $(".tab-pane"). addClass("active");
        $(".nav-link").addClass("active");

        // disabling active classes by contact tab
        $("#contact").removeClass("active");
        $("#contact-tab").removeClass("active");
    })
});
