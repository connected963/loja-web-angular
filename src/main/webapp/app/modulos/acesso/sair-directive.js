(function(){
  'use strict';

  angular
    .module('lojaApp.acesso')
    .directive('sair', SairDirective);

  SairDirective.$inject = ['$rootScope', 'Autenticacao'];

  function SairDirective($rootScope, Autenticacao){

    return {
      restrict: 'A',
      controller: ['$scope', '$location', 'Autenticacao', SairDirectiveController],
      template: '<a href="#" ng-click="vm.sair()">Sair</a>',
      controllerAs: 'vm'
    };

    //////////////////////////////////////////////////////////////////////////////

    function SairDirectiveController($scope, $location, Autenticacao) {

      var vm = this;
      vm.sair = sair;

      ///////////////////////////////////////////////////////////////////////////

      function sair(){
        Autenticacao.setAutenticado(false, null);
        $location.path( "/login" );
      };
    }

  }

})();
