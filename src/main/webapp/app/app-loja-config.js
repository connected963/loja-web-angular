// const URL_REST = 'http://192.168.1.53:8080/loja-web-rest/rest';
// const URL_REST = 'http://192.168.0.9:8080/loja-web-rest/rest';
const URL_REST = 'http://lojawebrest-diegokeller.rhcloud.com/rest';

angular
  .module('lojaApp')
  .config(['$locationProvider', '$routeProvider', '$httpProvider',
    function config($locationProvider, $routeProvider, $httpProvider) {
      $locationProvider.hashPrefix('!');
      $routeProvider.
        when('/', {
          templateUrl : "app/modulos/acesso/login.html",
          controller: 'LoginController',
          controllerAs: 'vmLogin'
        }).
        when('/login', {
          templateUrl : "app/modulos/acesso/login.html",
          controller: 'LoginController',
          controllerAs: 'vmLogin'
        }).
        when('/trocar-senha', {
          templateUrl : "app/modulos/acesso/senha.html",
          controller: 'SenhaController',
          controllerAs: 'vmSenha'
        }).
        when('/home', {
          templateUrl : "app/modulos/home/home.html"
        }).
        when('/produtos', {
          templateUrl : "app/modulos/produto/produtos.html",
          controller: 'ProdutosController',
          controllerAs: 'vmProdutos'
        }).
        when('/produtos/:categoria', {
          templateUrl : "app/modulos/produto/produtos.html",
          controller: 'ProdutosController',
          controllerAs: 'vmProdutos'
        }).
        when('/produto/:id', {
          templateUrl : "app/modulos/produto/produto.html",
          controller: 'ProdutoController',
          controllerAs: 'vmProduto'
        }).
        when('/carrinho', {
          templateUrl : "app/modulos/carrinho/carrinho.html",
          controller: 'CarrinhoController',
          controllerAs: 'vmCarrinho'
        }).
        when('/pedidos', {
          templateUrl : "app/modulos/pedido/pedidos.html",
          controller: 'PedidosController',
          controllerAs: 'vmPedidos'
        }).
        when('/pedido/:id', {
          templateUrl : "app/modulos/pedido/pedido.html",
          controller: 'PedidoController',
          controllerAs: 'vmPedido'
        });
    }
  ]);
