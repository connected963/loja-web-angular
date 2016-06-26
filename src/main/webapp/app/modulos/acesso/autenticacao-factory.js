(function(){
  'use strict';

  angular
    .module('lojaApp.acesso')
    .factory('Autenticacao', Autenticacao);

  Autenticacao.$inject = ['$rootScope', '$window'];

  function Autenticacao($rootScope, $window) {

    var factory = {
      setAutenticado: setAutenticado,
      getAutenticado: getAutenticado,
      getUsuarioId: getUsuarioId
    };
    return factory;

    ////////////////////////////////////////////////////////////////////////////

    function setAutenticado(autenticado, usuarioId){
      $window.sessionStorage.autenticado = autenticado;
      $window.sessionStorage.usuarioId = usuarioId;
      $rootScope.$broadcast('autenticacao', autenticado);
    };

    function getAutenticado(){
      return $window.sessionStorage.autenticado === 'true';
    };

    function getUsuarioId(){
      return $window.sessionStorage.usuarioId;
    };

  }

})();
