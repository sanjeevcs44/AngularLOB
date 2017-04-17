(function () {
	"use strict";
	angular.module('myApp')
	.controller('ProductEditCtrl', ['$scope','$stateParams','productResource', productEditCtrl]);
	function productEditCtrl($scope,$stateParams,productResource){
		productResource.query(function(data){
			$scope.products = data;
			$scope.productEdit = $scope.products[$stateParams.productId-1];

			console.log($scope.products);
			console.log($scope.productEdit);
		})
		
		
		
	
	}
}());


