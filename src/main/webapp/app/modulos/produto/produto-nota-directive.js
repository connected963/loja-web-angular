(function(){
  'use strict';

  angular
    .module('lojaApp.produto')
    .directive('lojaProdutoNota', ProdutoNotaDirective);

  ProdutoNotaDirective.$inject = [];

  function ProdutoNotaDirective(){

    var avaliacoes = null;
    var nota = null;

    var directive = {
      restrict: 'E',
      templateUrl: 'app/modulos/produto/produto-nota.html',
      scope: {
        avaliacoes: '@avaliacoes',
        nota: '@nota'
      }
    };
    return directive;

  };

})();
