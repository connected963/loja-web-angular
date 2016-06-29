(function(){
  'use strict';

  angular
    .module('lojaApp.pedido')
    .controller('PedidosController', PedidosController);

  PedidosController.$inject = ['$window', 'PedidoApi', 'Autenticacao'];

  function PedidosController($window, PedidoApi, Autenticacao){

    var vm = this;

    vm.pedidos = [];
    vm.totalizarPedido = totalizarPedido;
    vm.downloadXML = downloadXML;

    initialize();

    ////////////////////////////////////////////////////////////////////////////

    function initialize(){
      PedidoApi.buscarPedidosUsuario(Autenticacao.getUsuarioId())
        .then(function(response){
          vm.pedidos = response.data;
        })
        .catch(function(response){
          console.log('Erro ao buscar os pedidos.');
          console.log(response);
        });
    }

    function totalizarPedido(pedido){
      var total = 0;
      for (var item of pedido.itens) {
        total += (item.produto.preco * item.quantidade);
      }
      return total;
    }
    
    function downloadXML(id){
    	$window.open(PedidoApi.getURLDownloadXML(id));
    }
  }


})();
