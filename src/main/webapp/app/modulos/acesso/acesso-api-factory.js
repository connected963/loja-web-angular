(function(){
  'use strict';

  const URL_REST_AUTENTICACAO = URL_REST + '/autenticacao';
  const URL_REST_RECUPERAR_SENHA = URL_REST + '/recuperar_senha';
  const URL_REST_TROCAR_SENHA = URL_REST + '/trocar_senha';

  angular
    .module('lojaApp.acesso')
    .factory('AcessoApi', AcessoApi);

  AcessoApi.$inject = ['$http'];

  function AcessoApi($http){

    var factory = {
      login: login,
      recuperarSenha: recuperarSenha,
      trocarSenha: trocarSenha
    };
    return factory;

    //////////////////////////////////////////////////////////////////////////

    function login(email, senha){
      return $http.post(URL_REST_AUTENTICACAO, {
        email: email,
        senha: senha
      });
    };

    function recuperarSenha(email){
      return $http.post(URL_REST_RECUPERAR_SENHA, {
        email: email
      });
    };

    function trocarSenha(usuarioId, atual, nova, confirmacao){
      return $http.post(URL_REST_TROCAR_SENHA, {
        usuarioId: usuarioId,
        atual: atual,
        nova: nova,
        confirmacao: confirmacao
      });
    };

  }

})();
