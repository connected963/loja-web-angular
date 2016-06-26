(function(){

  angular
    .module('lojaApp')
    .controller('LojaAppController', LojaAppController);

  LojaAppController.$inject = ['$scope', '$rootScope', '$location', 'Autenticacao'];

  function LojaAppController($scope, $rootScope, $location, Autenticacao){

    var vm = this;
    vm.autenticado = Autenticacao.getAutenticado();

    $rootScope.$on('autenticacao', function(event, autenticado){
      console.log('Evento de Autenticação: ' + autenticado);
      vm.autenticado = autenticado;
    });

    // if(Autenticacao.getAutenticado() === true){
    //   $location.path( "/home" );
    // } else {
    //   $location.path( "/login" );
    // }

  };

})();
