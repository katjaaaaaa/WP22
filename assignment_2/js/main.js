function validateForm(){

}

function writeFormData(){

    let form_data = [];

    let curr_data = {
        name: $('#name').val(),
        age: $('#age').val(),
        city: $('#city').val(),
        email: $('#e-mail').val(),
        ph_number: $('#ph-number').val()
    }

    form_data.push(curr_data);
    //document.forms[0].reset(); // to clear the form for the further entries
    //document.getElementById("arrPrint").innerHTML = JSON.stringify(form_data, null, 2);
}

function checkName(){
    let name_input = $('#name');
    let cur_val = name_input.val();
    let name_regex = "^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$";
    if (cur_val.match(name_regex) && cur_val !== ''){
        name_input.removeClass('is-invalid');
        name_input.addClass('is-valid');
        return true;
    } else{
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
    } else{
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
    } else{
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
    } else{
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
    } else{
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
        alert("error please fill all fields!");
    }
    else {
        alert('valid');
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
    //TODO: show the alert form when one of the fields is not filled

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
    /*
    if (checkName() && checkAge() && checkCity() && checkEmail() && checkNumber){
        addData();
    } */
    $('#submit-bt').click(function() {
        writeFormData();
        checkFilledData();
        addData();
    })
    $('#erase-bt').click(function() {
        eraseData();
    })

    $('#contact-tab').on("click", function() {
        //TODO: show info and hide links (in html)
        alert(document.getElementById("contact").innerHTML)
    })
});
