/**
 * Created by Karen Justo on 31/01/2017.
 */
angular.module('main').controller('GaugeCtrl',GaugeCtrl);

function GaugeCtrl() {
  var vm = this;
  vm.gauge ={
    value: 50,
    intervals : {
      values: [0,10,20,30] // The interval is sorted and repeated values are removed
    },
    options : {
      needleColor: 'grey',
      min: 0,
      max: 30,
      unit: 'l',
      intervalFormatter: function(v){return v;}
    }
  };
}
