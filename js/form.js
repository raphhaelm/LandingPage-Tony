$('#inputCEP').on('focusout', function () {
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
});

$('#cadastre').mouseenter('click', function () {
    $('.login').css({ 'display': 'none' })
    $('.form').css({ 'display': 'flex' })
    $('#cadastre').css({ 'border': '#5819ac 2px solid' })
    $('#logar').css({ 'border': 'none' })

})
$('#logar').mouseenter('click', function () {
    $('.login').css({ 'display': 'flex' })
    $('.form').css({ 'display': 'none' })
    $('#logar').css({ 'border': '#5819ac 2px solid' })
    $('#cadastre').css({ 'border': 'none' })
})
