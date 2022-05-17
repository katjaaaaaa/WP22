function validateForm(){

}

function writeFormData(){
    // TODO: this shit doesnt take input info either
    let form_data = [];

    let curr_data = {
        name: $('#name').val(),
        age: $('#age').val(),
        city: $('#city').val(),
        email: $('#e-mail').val(),
        ph_number: $('#ph-number').val()
    }

    form_data.push(curr_data);
    document.forms[0].reset(); // to clear the form for the further entries
    //document.getElementById("arrPrint").innerHTML = JSON.stringify(form_data, null, 2);
}


function checkFilledData(){
    // TODO: this shit doesnt take input info

    let valid = true;
    let curr_data = [
        $('#name').val(),
        $('#age').val(),
        $('#city').val(),
        $('#e-mail').val(),
        $('#ph-number').val()
    ]

   for (const el in curr_data){
       alert(el.value);
       if (el.length === 0){
           valid = false;
       }
   }

    if (!valid){
        alert("error please fill all fields!");
    }
    else {
        alert('valid');
    }

}

$(function() {
    $('#submit-bt').click(function() {
        writeFormData();
        //checkFilledData();
        alert($("#name").val())
        let name = $('#name').val();
        let age = $('#age').val();
        let city = $('#city').val();
        let emailAdress = $('#e-mail').val();
        let phoneNumber = $('#ph-number').val();
        alert(name + age + city + emailAdress + phoneNumber);
    })
});
