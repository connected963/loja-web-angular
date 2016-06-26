(function(){
  'use strict';

  angular
    .module('lojaApp.acesso')
    .controller('SenhaController', SenhaController);

  SenhaController.$inject = ['$scope', '$rootScope', '$http', '$location', '$window', 'AcessoApi', 'Autenticacao'];

  function SenhaController($scope, $rootScope, $http, $location, $window, AcessoApi, Autenticacao) {

    var vm = this;

    vm.atual = null;
    vm.nova = null;
    vm.confirmacao = null;
    notificar('Informe sua senha atual e a nova senha.');

    vm.trocar = trocar;

    ////////////////////////////////////////////////////////////////////////////

    function trocar(){

      AcessoApi.trocarSenha(Autenticacao.getUsuarioId(), vm.atual, vm.nova, vm.confirmacao)
        .then(TrocarSenhaSuccess)
        .catch(TrocarSenhaError);

      //////////////////////////////////////////////////////////////////////////

      function TrocarSenhaSuccess(response){
        notificar('Senha alterada com sucesso!', 'success');
        vm.atual = '';
        vm.nova = '';
        vm.confirmacao = '';
      };

      function TrocarSenhaError(response){
        notificar(response.data.error, 'error');
      };

    };

  };

})();
