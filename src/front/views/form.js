let email = 'emBranco';
let passaword = 'emBranco';
let emailRecupera = $("#inputEmailRec");

// Função que completa os campos de endereço com requisição de CEP no API viaCep.
$('#inputCEP').on('focusout', function () {
    if ($(this).val().length == 8) {
        $("#input_validacao_form").css({ 'display': 'none' });
        $("#input_validacao_form").css({ 'color': 'aqua' });
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

        } catch (err) {
            alert(this.val() + `é um CEP inválido`)
        }
    } else {
        const cep = $("#inputCEP").val();
        $("#input_validacao_form").val(cep + " não é um CEP válido!");
        $("#input_validacao_form").css({ 'display': 'block' });
        $("#input_validacao_form").css({ 'color': 'red' });
        $("#inputCEP").val("")
        $("#inputCEP").focus();
    }
});

// Função que esconde os campos de login, para efetuar o cadastro .
$('#cadastre').on('click', function () {
    $('.login').css({ 'display': 'none' })
    $('.form').css({ 'display': 'flex' })
    $('#cadastre').css({ 'border': '#5819ac 2px solid', 'background': 'rgba(255,255,255,0.8)', 'color': 'aqua' })
    $('#logar').css({ 'border': 'none', 'background': 'rgba(255,255,255,0.1)', 'color': 'aqua' })

});

// Função que esconde os campos de cadastro, para efetuar o login.
$('#logar').on('click', function () {
    $('.login').css({ 'display': 'flex' })
    $('.form').css({ 'display': 'none' })
    $('#logar').css({ 'border': '#5819ac 2px solid', 'background': 'rgba(255,255,255,0.8)', 'color': 'aqua' })
    $('#cadastre').css({ 'border': 'none', 'background': 'rgba(255,255,255,0.1)', 'color': 'aqua' })
});

// Função que válida email para recuperação de senha
$('#btn-recuperar').on('click', function (e) {
    e.preventDefault();
    if (emailRecupera.val().includes("@")&& emailRecupera.val().includes('.com') && emailRecupera.val().length > 6) {
        alert(`Operação realizada com sucesso. Digite o codigo recebido no seu email. `);
        $('#codigoRecupera').css({'display':'block'});
    } else {
        alert('Preencha o campo email, com uma conta válida!')
    }
});

//Função redireciona para pagina de login
$('#codigoRecupera').on('focusout', function(){
    window.location.href = './formularios.html';
})

// Função que válida email para login.
$('#btn-entrar').on('click', function (e) {
    e.preventDefault();
    const email = $('#input_login').val();
    const senha = $('#input_senha_login').val();
    if($('#input_login').val().includes("@") && $('#input_login').val().includes(".com") && email.length > 6){
        if(senha.length > 7){
            $('#input_validacao').css({'display': 'block'});
            $('#input_validacao').val(`Login Sucess`);
        } else {
            $('#input_validacao').css({'display': 'block'});            
            $('#input_validacao').css({'border':'red solid 3px'});
            $('#input_validacao').val(`Senha inválida`);
        }
    } else {
        $('#input_validacao').css({'display': 'block'});            
        $('#input_validacao').css({'border':'red solid 3px'});
        $('#input_validacao').val(`Cadastro inválido`);}
});

// Função que válida email de cadastro.
$("#inputEmail").on('focusout', function (e) {
    e.preventDefault();
    const login = $("#inputEmail").val();
    if(login.includes('@') && login.length >= 7 && login.includes('.com')){
        email = 'emailValido'
        $("#inputEmail").css({ 'background-color': "rgb(156, 230, 95, 0.9)" });
    } else {
        $("#inputEmail").css({ 'background-color': "#ff00005d" })
    }
    
});

//Função que confere se senha e confirmação são iguais;
$("#inputConfirma").on('focusout', function (e) {
    e.preventDefault();
    let senha = $('#inputSenha').val();
    let confirmacao = $("#inputConfirma").val();
    if(senha.length < 7 || senha != confirmacao){
        $("#inputSenha").css({ 'background-color': "#ff00005d" });
        $("#inputSenha").focus();
        $("#inputConfirma").val("");
    } else if (confirmacao < 7 || confirmacao != senha){
        $("#inputConfirmacao").css({ 'background-color': "#ff00005d" });
        $("#inputConfirmacao").focus()
    } else {
        $("#inputSenha").css({ 'background-color': "rgb(156, 230, 95, 0.9)" });
        $("#inputConfirma").css({ 'background-color': "rgb(156, 230, 95, 0.9)" });
    }
    // if (senha == confirmacao) {
    //     $("#inputSenha").css({ 'background-color': "rgb(156, 230, 95, 0.9)" });
    //     $("#inputConfirma").css({ 'background-color': "rgb(156, 230, 95, 0.9)" });
    //     passaword = 'senhaValida';
    // } else {
    //     $("#inputSenha").css({ 'background-color': "#ff00005d" });
    //     $("#inputConfirma").css({ 'background-color': "#ff00005d" });

    // }
});

//Função que válida o cadastro.
$('#btn-cadastro').on('click', function (e) {
    e.preventDefault();
    if (email == 'emailValido' && passaword == 'senhaValida' && $("#inputName").val() != "" && $("#inputSobre").val() != "" && $('#inputNum').val() != "") {
        $("#input_validacao_form").css({ 'display': 'block' });
        $("#input_validacao_form").val(`Cadastro efetuado com sucesso.`);
        alert(` Cadastro efetuado com sucesso!
        Efetue login para acompanhar o desenvolvimento de TONY`);
        $('.login').css({ 'display': 'flex' })
        $('.form').css({ 'display': 'none' })
        $('#logar').css({ 'border': '#5819ac 2px solid', 'background': 'rgba(255,255,255,0.8)', 'color': 'aqua' })
        $('#cadastre').css({ 'border': 'none', 'background': 'rgba(255,255,255,0.1)', 'color': 'aqua' })

    } else {
        alert('Dados incompletos! Preencha todos os campos para cadastro!');
        $("#inputName").css({'border': 'red solid 2px'});
        $("#inputName").val("");
        $("#inputSobre").css({'border': 'red solid 2px'});
        $("#inputSobre").val("")
        $("#inputEmail").css({'border': 'red solid 2px'});
        $("#inputEmail").val("");
        $("#inputSenha").css({'border': 'red solid 2px'});
        $("#inputSenha").val("");
        $("#inputConfirma").css({'border': 'red solid 2px'});
        $("#inputConfirma").val("");
        $("#inputCEP").css({'border': 'red solid 2px'});
        $("#inputCEP").val("");
        $("#inputNum").css({'border': 'red solid 2px'});
        $("#inputNum").val("");
    }
})