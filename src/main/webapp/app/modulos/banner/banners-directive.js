(function(){
  'use strict';

  angular
    .module('lojaApp.banner')
    .directive('lojaBanners', BannerDirective);

  BannerDirective.$inject = [];

  function BannerDirective(){

    var directive = {
      restrict: 'A',
      controller: ['$scope', '$location', 'BannerApi', BannerDirectiveController],
      controllerAs: 'vmBanner',
      templateUrl: 'app/modulos/banner/banners.html'
    };
    return directive;

    ////////////////////////////////////////////////////////////////////////////

    function BannerDirectiveController($scope, $location, BannerApi) {

      var vm = this;
      vm.banners = [];

      initialize();

      //////////////////////////////////////////////////////////////////////////

      function initialize(){
        BannerApi.buscarBanners()
          .then(BuscarBannersSuccess)
          .catch(BuscarBannersError);
      };

      function BuscarBannersSuccess(response){
        vm.banners = response.data;
      };

      function BuscarBannersError(){
        vm.banners = [];
      };

    };

  };

})();
