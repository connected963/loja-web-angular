(function(){
  'use strict';

  angular
    .module('lojaApp.carrinho')
    .controller('CarrinhoController', CarrinhoController);

  CarrinhoController.$inject = ['$scope', '$location', '$window', 'Autenticacao', 'CarrinhoApi', 'PedidoApi'];

  function CarrinhoController($scope, $location, $window, Autenticacao, CarrinhoApi, PedidoApi){

    var vm = this;

    vm.itens = [];
    vm.total = 0;

    vm.removerItem = removerItem;
    vm.alterarQuantidade = alterarQuantidade;
    vm.salvar = salvar;
    vm.confirmar = confirmar;

    $scope.$watch(function(){
      return vm.itens;
    }, atualizarTotalizadores, true);

    initialize();

    ////////////////////////////////////////////////////////////////////////////

    function initialize(){
      atualizarItens();
    }

    function atualizarItens(){
      CarrinhoApi.buscarItensPorUsuario(Autenticacao.getUsuarioId())
        .then(function(response){
          vm.itens = response.data;
        })
        .catch(function(response){
          console.log('Erro ao buscar itens do carrinho');
          console.log(response);
          vm.itens = [];
        });
    }

    function atualizarTotalizadores(){
      var total = 0;
      for (var item of vm.itens) {
        total += (item.produto.preco * item.quantidade);
      }
      vm.total = total;
    }

    function removerItem(id){
      CarrinhoApi.removerItem(id)
      .then(function(){
        notificar('Removido com sucesso!', 'success');
        atualizarItens();
      })
      .catch(function(response){
        notificar('Erro ao remover: ' + response.error, 'error');
      });
    }

    function alterarQuantidade(item, quantidade){
      var novaQuantidade = item.quantidade + quantidade;
      if(novaQuantidade === 0){
        return;
      }
      item.quantidade = novaQuantidade;
    }

    function salvar(){
      CarrinhoApi.atualizarItens(vm.itens)
        .then(function(response){
          notificar('Salvo com sucesso!', 'success');
        })
        .catch(function(response){
          notificar('Erro ao atualizar: ' + response.error, 'error');
        });
    }

    function confirmar(){

      if(!$window.confirm('Seu pedido será enviado e o carrinho será limpo. Você confirma?')){
        return;
      }

      var pedido = {
        usuario: {
          id: Autenticacao.getUsuarioId()
        },
        itens: vm.itens
      };

      PedidoApi.salvarPedido(pedido)
        .then(function(response){
          notificar('Pedido enviado com sucesso!', 'success');
          $location.path( "/pedidos" );
        })
        .catch(function(response){
          notificar('Erro ao enviar: ' + response.error, 'error');
        });
    }
  }

})();
