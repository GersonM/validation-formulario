function initPage() {
    Parse.initialize("5I2wzgofeQj5dcXGKEdeS77MJ3uwMXixefKk8gHI", "tTly4wCBQacqCJ5MEPCbrV3ZO7htcEuMo9NhUJ0e");


    $('#myForm').validate({
        submitHandler: function(form) {
            enviarFormulario();

            return false;
        },
        invalidHandler: function(event, validator) {
            console.log(validator);
            swal('Error!', 'sd', 'warning');
        }
    });
}

function enviarFormulario()
{
    var Cliente = Parse.Object.extend("Cliente");

    var instancia = new Cliente();

    instancia.save({
        nombre:$('#nombre').val(),
        apellido:$('#apellido').val()
    }).then(function(){
        $('#nombre').val("");
        $('#apellido').val("");
        swal('Ya está mi amo', 'tus ordenes fueron realizadas', 'success');
    });
}

$(document).ready(initPage);

