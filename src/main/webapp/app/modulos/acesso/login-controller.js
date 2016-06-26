(function(){
  'use strict';
  angular
    .module('lojaApp.acesso')
    .controller('LoginController', LoginController);

  LoginController.$inject = ['$scope', '$rootScope', '$http', '$location', '$window', 'AcessoApi', 'Autenticacao'];

  function LoginController($scope, $rootScope, $http, $location, $window, AcessoApi, Autenticacao) {
    var vm = this;

    vm.email = 'keller.diego+joao@gmail.com';
    vm.senha = 'senha';
    vm.processando = false;

    vm.entrar = entrar;
    vm.recuperarSenha = recuperarSenha;

    ////////////////////////////////////////////////////////////////////////////

    function entrar(){

      AcessoApi.login(vm.email, vm.senha)
      .then(function(response) {
        Autenticacao.setAutenticado(true, response.data.usuarioId);
        $location.path( "/home" );
        notificar('Bem vindo ao sistema', 'success');
      })
      .catch(function(response){
        Logger(response);
        notificar(response.data.error, 'error');
      });

    };

    function recuperarSenha(){

      if(vm.email.trim().length === 0){
        notificar('Informe seu endereço de e-mail no campo abaixo e clique novamente para gerar uma nova senha.', 'error');
        return;
      }

      if(!$window.confirm('Uma nova senha será gerada e enviada para o seu e-mail cadastrado. Você confirma?')){
        return;
      }

      notificar('Aguarde! Estamos gerando uma nova senha.', 'warn');
      AcessoApi.recuperarSenha(vm.email)
      .then(function(response) {
        notificar('Uma nova senha foi enviada para seu e-mail.', 'success');
      }, function(response){
        Logger(response);
        notificar(response.data.error, 'error');
      });

    };
  }
})();
