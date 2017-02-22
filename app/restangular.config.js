/**
 * Created by Karen Justo on 18/02/2017.
 */
angular
  .module('main')
  .config(RestangularConfig);

function RestangularConfig(RestangularProvider, $httpProvider){
  $httpProvider.defaults.useXDomain = true;
  $httpProvider.defaults.withCredentials = true;
  delete $httpProvider.defaults.headers.common["X-Requested-With"];
  $httpProvider.defaults.headers.common["Accept"] = "application/json";
  $httpProvider.defaults.headers.common["Content-Type"] = "application/json";
  RestangularProvider.setBaseUrl('https://maps.googleapis.com/maps/api/place/nearbysearch');
}

angular
  .module('main')
  .config(MapsConfig);

function MapsConfig(uiGmapGoogleMapApiProvider){
  uiGmapGoogleMapApiProvider.configure({
    key: 'AIzaSyCAicRHW2n-RvxwG3DHy8eKTSezsHMo9ro',
    v: '3.20', //defaults to latest 3.X anyhow
    libraries: 'weather,geometry,visualization'
  });
}



