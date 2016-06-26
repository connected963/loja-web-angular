(function(){
  'use strict';

  const URL_REST_PRODUTO = URL_REST + '/produto';
  const URL_REST_PRODUTOS = URL_REST + '/produtos';
  const URL_REST_AVALIACOES = URL_REST + '/avaliacoes';
  const URL_REST_AVALIACAO = URL_REST + '/avaliacao';
  const URL_REST_CATEGORIAS = URL_REST + '/categoria_produto';

  angular
    .module('lojaApp.produto')
    .factory('ProdutoApi', ProdutoApi);

  ProdutoApi.$inject = ['$http'];

  function ProdutoApi($http){

    var factory = {
      buscarProdutos: buscarProdutos,
      buscarCategorias: buscarCategorias,
      buscarProdutosPorCategoria: buscarProdutosPorCategoria,
      buscarProduto: buscarProduto,
      buscarAvaliacoesPorProduto: buscarAvaliacoesPorProduto,
      enviarAvaliacao: enviarAvaliacao
    };
    return factory;

    ////////////////////////////////////////////////////////////////////////////

    function buscarProdutos(){
      return $http.get(URL_REST_PRODUTOS);
    };

    function buscarCategorias(){
      return $http.get(URL_REST_CATEGORIAS);
    };

    function buscarProdutosPorCategoria(categoria){
      return $http.get(URL_REST_PRODUTOS + '/' + categoria);
    };

    function buscarProduto(id){
      return $http.get(URL_REST_PRODUTO + '/' + id);
    };

    function buscarAvaliacoesPorProduto(produtoId){
      return $http.get(URL_REST_AVALIACOES + '/' + produtoId);
    };

    function enviarAvaliacao(avaliacao){
      return $http.put(URL_REST_AVALIACAO, avaliacao);
    };

  };

})();
