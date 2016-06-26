(function(){
  'use strict';

  angular
    .module('lojaApp.produto')
    .directive('lojaCategorias', CategoriasDirective);

  CategoriasDirective.$inject = [];

  function CategoriasDirective(){

    var directive = {
      restrict: 'A',
      controller: ['ProdutoApi', '$routeParams', CategoriasDirectiveController],
      controllerAs: 'vmCategorias',
      templateUrl: 'app/modulos/produto/categorias.html'
    };
    return directive;

    function CategoriasDirectiveController(ProdutoApi, $routeParams){

      var vm = this;

      vm.categoria = $routeParams.categoria;
      vm.categorias = [];

      vm.categoriaSelecionada = categoriaSelecionada;

      initialize();

      function initialize(){

        ProdutoApi.buscarCategorias()
        .then(function(response){
          vm.categorias = response.data;
        })
        .catch(function(){
          console.log('Erro ao buscar categorias.');
          vm.categorias = response.data;
        });

      };

      function categoriaSelecionada(categoria){
        return vm.categoria == categoria;
      };
    };

  };

})();
