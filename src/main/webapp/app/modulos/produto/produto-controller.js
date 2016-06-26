(function(){
  'use strict';

  angular
    .module('lojaApp.produto')
    .controller('ProdutoController', ProdutoController);

  ProdutoController.$inject = ['$routeParams', '$timeout', 'ProdutoApi', 'Autenticacao', 'CarrinhoApi'];

  function ProdutoController($routeParams, $timeout, ProdutoApi, Autenticacao, CarrinhoApi){

    var vm = this;

    vm.produto = {};
    vm.avaliacoes = [];
    vm.novaAvaliacao = {};

    vm.enviarAvaliacao = enviarAvaliacao;
    vm.adicionarAoCarrinho = adicionarAoCarrinho;

    initialize();

    function initialize(){

      var id = $routeParams.id;

      buscarProduto(id);
      buscarAvaliacoesDoProduto(id);

    };

    function buscarProduto(id){
      if(id !== undefined && id !== null){
        ProdutoApi.buscarProduto(id)
          .then(function(response){
            vm.produto = response.data;
          })
          .catch(function(response){
            console.log('Erro ao buscar produto.');
            console.log(response);
            vm.produto = {};
          });
      }
    }

    function buscarAvaliacoesDoProduto(id){
      ProdutoApi.buscarAvaliacoesPorProduto(id)
        .then(function(response){
          vm.avaliacoes = response.data;
        })
        .catch(function(response){
          console.log('Erro ao buscar avaliações do produto.');
          console.log(response);
          vm.avaliacoes = [];
        });
    }

    function enviarAvaliacao(){

      vm.novaAvaliacao.usuario = {
        id: Autenticacao.getUsuarioId()
      };
      vm.novaAvaliacao.produtoId = vm.produto.id;

      ProdutoApi.enviarAvaliacao(vm.novaAvaliacao)
        .then(function(){
          limparFormularioAvaliacao();
          buscarAvaliacoesDoProduto(vm.produto.id);
          notificar('Avaliação enviada com sucesso!', 'success');
        })
        .catch(function(response){
          notificar(response.data.error, 'error');
        });

    };

    function limparFormularioAvaliacao(){
      vm.novaAvaliacao = {};
    }

    function adicionarAoCarrinho(){
      CarrinhoApi.adicionarItem(vm.produto.id, Autenticacao.getUsuarioId(), 1)
        .then(function(){
          notificar('Produto adicionado ao carrinho!', 'success');
        })
        .catch(function(response){
          notificar(response.data.error, 'error');
        });
    }

  };

})();
