(function(){
  'use strict';

  const URL_REST_BANNERS = URL_REST + '/banners';

  angular
    .module('lojaApp.banner')
    .factory('BannerApi', BannerApi);

  BannerApi.$inject = ['$http'];

  //////////////////////////////////////////////////////////////////////////////

  function BannerApi($http){

    var factory = {
      buscarBanners: buscarBanners
    };
    return factory;

    ////////////////////////////////////////////////////////////////////////////

    function buscarBanners(){
      return $http.get(URL_REST_BANNERS);
    };

  };

})();
