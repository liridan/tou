var hmd=angular.module("hmd",[]);
		hmd.controller("homecont",["$scope","$routeParams","$http",function($scope,$routeParams,$http){
			$http.get(`http://proxy.e12e.com/?http://cre.mix.sina.com.cn/api/v3/get?
			callback=`).then(function(data){
					$scope.list=data.data.data;
					console.log(data.data.data)
					if(!$scope.list.comment_count_show){
						$scope.list.comment_count_show=0;
					};
			});
			
			$scope.remove=function(i){
				angular.forEach($scope.list,function(row){
					if($scope.list[i]==row){
						$scope.list.splice(i,1)
					}
				})
			}
		}]);
		



