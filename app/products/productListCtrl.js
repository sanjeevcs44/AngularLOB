//Product List controller Which will genrate List of Product
(function () {
	"use strict"
	angular.module('myApp')
	//Cotroller name should be capatalize for best practice 
	.controller('ProductListCtrl', ['$scope','productResource', productListCtrl]);
	function productListCtrl($scope,productResource){

		productResource.query(function(data){
					console.log(data);
					$scope.products = data;

				});
		$scope.showImg = true;
		$scope.toggleImg = function(){
			this.showImg = !$scope.showImg;
		}
	}
	
}());