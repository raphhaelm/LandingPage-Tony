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