$('#inputCEP').on('focusout', function () {
    try {
        $.ajax({
            url: 'https://viacep.com.br/ws/' + $(this).val() + '/json/unicode/',
            dataType: 'json',
            success: function (resposta) {
                $("#inputEndereco").val(resposta.logradouro);
                $("#inputComplemento").val(resposta.complemento);
                $("#inputBairro").val(resposta.bairro);
                $("#inputCidade").val(resposta.localidade);
                $("#inputUf").val(resposta.uf);
                $("#inputNum").focus();
            }
        });
    }catch (e) {
        alert('Opsss... Preencha manualmente as informações')
    }
    
})

$('#cadastre').on('click', function () {
    $('.login').css({ 'display': 'none' })
    $('.form').css({ 'display': 'flex' })
    $('#cadastre').css({ 'border': '#5819ac 2px solid', 'background': 'rgba(255,255,255,0.8)', 'color': 'aqua' })
    $('#logar').css({ 'border': 'none', 'background': 'rgba(255,255,255,0.1)', 'color': 'aqua' })

});
$('#logar').on('click', function () {
    $('.login').css({ 'display': 'flex' })
    $('.form').css({ 'display': 'none' })
    $('#logar').css({ 'border': '#5819ac 2px solid', 'background': 'rgba(255,255,255,0.8)', 'color': 'aqua' })
    $('#cadastre').css({ 'border': 'none', 'background': 'rgba(255,255,255,0.1)', 'color': 'aqua' })
});

$('#btn-cadastro').on('click', function (e) {
    e.preventDefault();
    console.log('Olá Rapha');



    $("#inputName").val("");
    $("#inputSobre").val("");
    $("#inputEmail").val("");
    $("#inputSenha").val("");
    $("#inputConfirma").val("");
    $("#input_RG").val("");
    $("#inputCEP").val("");
    $("#inputEndereco").val("");
    $("#inputComp").val("");
    $("#inputNum").val("");
    $("#inputPais").val("");
    $("#inputBairro").val("");
    $("#inputCidade").val("");
    $("#inputUf").val("");
})

$('#btn-recuperar').on('click', function (e) {
    e.preventDefault();
    let emailRec = $('#inputEmailRec');
    if (emailRec.val().includes("@") && emailRec.val().includes('.com')) {
        alert(`Operação realizada com sucesso. Digite o codigo recebido no seu email. `)

    } else {
        alert('Preencha o campo email, com uma conta válida!')
    }
})
$('#btn-enviar').on('click', function (e) {
    e.preventDefault();
    if ($('inputLogin').val().includes("@", ".com")) {

        alert(`Operação realizada com sucesso. Digite o codigo recebido no seu email. `)

    } else {
        alert('Preencha o campo email, com uma conta válida!')
    }
})
