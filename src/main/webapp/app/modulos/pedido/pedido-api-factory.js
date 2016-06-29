(function(){
  'use strict';

  const URL_REST_PEDIDO = URL_REST + '/pedido';
  const URL_REST_PEDIDOS = URL_REST + '/pedidos';

  angular
    .module('lojaApp.pedido')
    .factory('PedidoApi', PedidoApi);

  PedidoApi.$inject = ['$http'];

  function PedidoApi($http){

    var factory = {
      salvarPedido: salvarPedido,
      buscarPedidosUsuario: buscarPedidosUsuario,
      buscarPedido: buscarPedido,
      getURLDownloadXML: getURLDownloadXML
    };
    return factory;

    ////////////////////////////////////////////////////////////////////////////

    function salvarPedido(pedido){
      return $http.put(URL_REST_PEDIDO, pedido);
    }

    function buscarPedidosUsuario(usuarioId){
      return $http.get(URL_REST_PEDIDOS + '/' + usuarioId);
    }

    function buscarPedido(id){
      return $http.get(URL_REST_PEDIDO + '/' + id);
    }
    
    function getURLDownloadXML(pedidoId){
    	return URL_REST_PEDIDO + '/' + pedidoId + '/xml';
    }

  }

})();
