(function(){
  'use strict';

  angular
    .module('lojaApp.produto')
    .controller('ProdutosController', ProdutosController);

  ProdutosController.$inject = ['$routeParams', 'ProdutoApi'];

  function ProdutosController($routeParams, ProdutoApi){

    var vm = this;

    vm.categoria = $routeParams.categoria;
    vm.ordem = 'nome';
    vm.produtos = [];

    initialize();

    ////////////////////////////////////////////////////////////////////////////

    function initialize(){

      // Verifica se tem categoria selecionada
      if(vm.categoria !== undefined){

        // Produtos da categoria selecionada
        ProdutoApi.buscarProdutosPorCategoria(vm.categoria)
        .then(function(response){
          vm.produtos = response.data;
        })
        .catch(function(){
          vm.produtos = [];
        });

      } else {

        // Todos os produtos
        ProdutoApi.buscarProdutos()
        .then(function(response){
          vm.produtos = response.data;
        })
        .catch(function(){
          vm.produtos = [];
        });

      }

    };

  };
})();
