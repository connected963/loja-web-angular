(function(){
  'use strict';

  angular
    .module('lojaApp.pedido')
    .controller('PedidoController', PedidoController);

  PedidoController.$inject = ['$routeParams', 'PedidoApi'];

  function PedidoController($routeParams, PedidoApi){

    var vm = this;

    vm.total = 0;
    vm.pedido = {};

    initialize();

    ///////////////////////////////////////////////////////////////////////////

    function initialize(){
      buscarPedido();
    }

    function buscarPedido(){
      var id = $routeParams.id;
      PedidoApi.buscarPedido(id)
        .then(function(response){
          vm.pedido = response.data;
          calcularTotalPedido();
        })
        .catch(Logger);
    }

    function calcularTotalPedido(){
      var total = 0;
      for (var item of vm.pedido.itens) {
        total += (item.produto.preco * item.quantidade);
      }
      vm.total = total;
    }

  };

})();
