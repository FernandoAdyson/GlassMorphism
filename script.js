


function enviar(){
    var email = document.querySelector('input#info_text').value
    window.alert(`Seu Email: ${email} foi cadastrado com sucesso!`)
    
    $("#info_button").bind('click', function() {
        $("input[type=text], textarea").val("");
      });
}
