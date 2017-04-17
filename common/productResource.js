(function() {
	"use strict";
	angular.module('common.services')
	.factory('productResource', ['$resource', function($resource){
		console.log("common/data.json");
		
		return $resource("common/data.json/:productID");
	}])
}());