var app = angular.module('myModule', []);

app.controller('myController', function($scope){
	$scope.groceries = [
	{name: "apples", price: 3.25, quantity: 1},
	{name: "eggs", price: 4.15, quantity: 4},
	{name: "bread", price: 2.55, quantity: 3},
	{name: "milk", price: 3.67, quantity: 2}];



$scope.addGroceries = function(){
	$scope.groceries.push({name: "", price: 0, quantity: 0});
}

$scope.total = function(){
    var priceTotal = 0;
    angular.forEach($scope.groceries, function(item){
   		priceTotal+=parseFloat(item.price*item.quantity);
   	});
   	return priceTotal;
}

});
