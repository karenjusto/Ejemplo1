/**
 * Created by Karen Justo on 18/02/2017.
 */
angular
  .module('main')
  .controller('maps-ctrl', MapsCtrl);

function MapsCtrl(MapsFactory, $http, uiGmapGoogleMapApi) {
  var vm = this;
  //VARIABLE DE MAPA
  vm.map = { center: { latitude: 19.5063773, longitude: -99.1443311 }, zoom: 15 };

  activate();

  function activate() {
    delete $http.defaults.headers.common['X-Requested-With'];
    MapsFactory.lookup('19.504415, -99.146888',1000,'','gas_station').then(function(res){
      vm.results = res.results;
      vm.coordinates = [];

      _.forEach(vm.results, function (value,key) {
        vm.coordinates.push({
          id:key,
          latitude:value.geometry.location.lat,
          longitude:value.geometry.location.lng,
          title:value.name
        })
      });
      console.log(vm.coordinates);
    }).catch(function(err){
    });

    uiGmapGoogleMapApi.then(function(maps) {

    });

  }
}
