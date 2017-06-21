var hcl = angular.module("hcl", []);
hcl.factory("mydata", function($q) {

	var deferred = $q.defer();
	// 从Github获取打开的angularjs pull请求列表
	$.ajax({
		type: "get",
		url: `http://mobile.video.qq.com/fcgi-bin/getjimudata?type=1&otype=json&timeStamp=1497703567736&platform=103&version=2&ztid=100114&leafids=20131112010793%2B20150226042241%2B20150908053361&callback=jsonp2`,
		dataType: "jsonp",
		success: function(data) {
			var video = data.list[0].ZT_leaf_video;

			deferred.resolve(video);
		}
	});

	return deferred.promise;

})
hcl.controller("circont", ["$scope", "$routeParams", "mydata", function($scope, $routeParams, mydata) {
	mydata.then(function(data) {
		console.log(data);
		$scope.arr = data
	})

}]);