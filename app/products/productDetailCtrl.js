(function () {
	"use strict";
	angular.module('myApp')
	.controller('ProductDetailCtrl', ['$scope','$stateParams','productResource', productDetailCtrl]);
	function productDetailCtrl($scope,$stateParams,productResource){
		productResource.query(function(data){
			$scope.products = data;
			$scope.product = $scope.products[$stateParams.productId-1];
			console.log($stateParams);
			$scope.value1 = $stateParams;
			//console.log($scope.product[$stateParams.productId].productID);
		})
		
		
		
	
	}
}());