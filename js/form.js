try {
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
catch (e) {
    console.log('Opsss...')
}
$('#cadastre').on('click', function () {
    $('.login').css({ 'display': 'none' })
    $('.form').css({ 'display': 'flex' })
    $('#cadastre').css({ 'border': '#5819ac 2px solid', 'background': 'rgba(255,255,255,0.8)' })
    $('#logar').css({ 'border': 'none', 'background': 'rgba(255,255,255,0.1)' })

});
$('#logar').on('click', function () {
    $('.login').css({ 'display': 'flex' })
    $('.form').css({ 'display': 'none' })
    $('#logar').css({ 'border': '#5819ac 2px solid', 'background': 'rgba(255,255,255,0.8)' })
    $('#cadastre').css({ 'border': 'none', 'background': 'rgba(255,255,255,0.1)' })
});
class Usuarios {
    constructor(nome, sobrenome, email, senha, confirmacao, rg, endereco, num, complemento, bairro, cidade, uf, pais){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.email = email;
    this.senha = senha;
    this.confirmacao = confirmacao;
    this.rg = rg;
    this.endereco = endereco;
    this.num = num;
    this.complemento = complemento;
    this.bairro = bairro;
    this.cidade = cidade;
    this.uf = uf;
    this.pais = pais;
    }
}
$('#btn-cadastro').on('click', function (e) {
    e.preventDefault();
    console.log('Olá Rapha');
    let user = new Usuarios ( 
    $("#inputName").val(""),
    $("#inputSobre").val(""),
    $("#inputEmail").val(""),
    $("#inputSenha").val(""),
    $("#inputConfirma").val(""),
    $("#input_RG").val(""),
    $("#inputCEP").val(""),
    $("#inputEndereco").val(""),
    $("#inputComp").val(""),
    $("#inputNum").val(""),
    $("#inputPais").val(""),
    $("#inputBairro").val(""),
    $("#inputCidade").val(""),
    $("#inputUf").val(""),
    $("#inputPais").val("")
    )



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
    if (emailRec.val().includes("@", ".com")) {
        alert(`Operação realizada com sucesso. Digite o codigo recebido no seu email. `)

    } else {
        alert('Preencha o campo email, com uma conta válida!')
    }
})
$('#btn-entrar').on('click', function(e){
    e.preventDefault();
    if($('#loginEntrar').val().includes("@", ".com") && $('#loginSenha').val().length >= 6){
    alert('Login efetuado com sucesso! ')
    } else {
        alert('Utilize seu email e senha para efetuar login!')
    }
})
