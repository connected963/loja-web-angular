angular.module('lojaApp.banner', []);

angular.module('lojaApp.acesso', []);

angular.module('lojaApp.pedido', []);

angular.module('lojaApp.carrinho', ['lojaApp.pedido']);

angular.module('lojaApp.produto', ['lojaApp.banner', 'lojaApp.carrinho']);

angular.module('lojaApp', ['ngRoute', 'lojaApp.acesso', 'lojaApp.produto']);
