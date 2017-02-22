angular
  .module('main')
  .factory('MapsFactory',MapsFactory);

function MapsFactory(Restangular) {
  return {
    lookup:lookup
  };

  function lookup(location, radius, keyword, type) {
    return Restangular.all('json').customGET('',{
      'key':'AIzaSyCAicRHW2n-RvxwG3DHy8eKTSezsHMo9ro',
      'location':location,
      'radius':radius,
      'keyword': keyword,
      'type':type
    });
    }}
