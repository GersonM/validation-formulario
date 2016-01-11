$(document).ready(initPage);

function initPage()
{
	var opciones = {
		rules:{
			nombre:{
				required:true,
				minlength:6
			},
			apellidos:"required",
			email:{
				required:true
			},
			password:
			{
				required:true,
				minlength:6,
				maxlength:12
			}
		},
		messages:{
			nombre:"Por favor ingresa tu nombre",
			apellidos:"Tu apellido también pues",
			email:{
				required:"Necesito tu correo"			},
			password:
			{
				required:"Pon tu contraseña",
				minlength:"Tu contraseña debe tener como mínimo 6 caracteres",
				maxlength:"Máximo 12"
			}
		},
		submitHandler: function()
		{
			swal("Es válido", "Todo ok", "success");
		},
		invalidHandler: function()
		{
			swal("Error", "Verifica el fomulario", "warning");
		}
	};


	$("#myForm").validate(opciones);
}