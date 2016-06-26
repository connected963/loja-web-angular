(function(){
  'use strict';

  const URL_REST_CARRINHO = URL_REST + '/carrinho';

  angular
    .module('lojaApp.carrinho')
    .factory('CarrinhoApi', CarrinhoApi);

  CarrinhoApi.$inject = ['$http'];

  function CarrinhoApi($http){

    var factory = {
      adicionarItem: adicionarItem,
      atualizarItens: atualizarItens,
      removerItem: removerItem,
      buscarItensPorUsuario: buscarItensPorUsuario
    };
    return factory;

    function adicionarItem(produtoId, usuarioId, quantidade){
      return $http.put(URL_REST_CARRINHO, {
        produto: {
          id: produtoId
        },
        usuario: {
          id: usuarioId
        },
        quantidade: quantidade
      });
    };

    function atualizarItens(itens){
      return $http.post(URL_REST_CARRINHO, itens);
    };

    function removerItem(id){
      return $http.delete(URL_REST_CARRINHO + '/' + id);
    };

    function buscarItensPorUsuario(usuarioId){
      return $http.get(URL_REST_CARRINHO + '/' + usuarioId);
    };

  }

})();
