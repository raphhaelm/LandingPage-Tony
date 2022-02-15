try{
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
}
)
}
catch (e){
    console.log('Opsss...')
}
$('#cadastre').mouseenter('click', function () {
    $('.login').css({ 'display': 'none' })
    $('.form').css({ 'display': 'flex' })
    $('#cadastre').css({ 'border': '#5819ac 2px solid','background':'rgba(255,255,255,0.8)' })
    $('#logar').css({ 'border': 'none','background':'rgba(255,255,255,0.1)' })

})
$('#logar').mouseenter('click', function () {
    $('.login').css({ 'display': 'flex' })
    $('.form').css({ 'display': 'none' })
    $('#logar').css({ 'border': '#5819ac 2px solid','background':'rgba(255,255,255,0.8)' })
    $('#cadastre').css({ 'border': 'none','background':'rgba(255,255,255,0.1)' })
})
