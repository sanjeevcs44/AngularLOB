(function () {
	"use strict";
	var app= angular.module('myApp', ["common.services","ui.router"]);

	app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
		$urlRouterProvider.otherwise("/")
		$stateProvider
		.state("home",{
			url : "/",
			templateUrl:"app/welcomeView.html"
		})
		//producList
		.state("productList",{
			url : "/product",
			templateUrl : "app/products/productListView.html",
			controller : "ProductListCtrl"
		})
		.state("productDetail",{
			url : "/product/:productId",
			templateUrl : "app/products/productDetailView.html",
			controller : "ProductDetailCtrl"
		})
		.state("productEdit",{
			url : "/product/edit/:productId",
			templateUrl : "app/products/productEditView.html",
			controller : "ProductEditCtrl"
		})
		.state("productEdit.info",{
			url : "/info",
			templateUrl : "app/products/productEditInfoView.html",
			controller : "ProductEditInfoCtrl"
		})
		.state("productEdit.price",{
			url : "/price",
			templateUrl : "app/products/productEditPriceView.html",
			controller : "ProductEditPriceCtrl"
		})
		.state("productEdit.tag",{
			url : "/tag",
			templateUrl : "app/products/productEditTagView.html",
			controller : "ProductEditTagCtrl"
		})
	}]);

}());
