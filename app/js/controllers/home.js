'use strict';

/**
 * @author Camilo da Silveira
 * @name silveiracamilo.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the silveiracamilo
 */


var HomeCtrl = CC.controller('HomeCtrl', ['$scope', function ($scope) {
	log("HomeCtrl");

	var w = 8, h = 5, i, b;

	$scope.bytes = new Array(w);
	for (i=0; i<w; i++){ 
		$scope.bytes[i] = new Array(h);
		for (b=0; b<h; b++){
			$scope.bytes[i][b] = b;  
		}
  	}

	$scope.clickToogleByte = function(line, column){
		console.log(line, column);
	};	
}]);