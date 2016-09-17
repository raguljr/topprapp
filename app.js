var app=angular.module("toppr",[]);

app.controller("getdata",function($scope,$http){
	$http.get("https://hackerearth.0x10.info/api/one-push?type=json&query=list_websites").success(function(res){
		$scope.total=res;
	});
});