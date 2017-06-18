
var app=angular.module("app",[]);
app.controller("subsp",function($scope){
	$scope.list=[
	"推荐","娱乐","时尚","电影","美食","宠物"];
	$scope.list2=[
	"社会","科技","问答","教育","汽车","财经","军事","文化","体育","段子","美女","股票","国际","健康","历史","政务","搞笑","数码","游戏","养生","手机","旅游","科学","情感","家居","三农","彩票","动漫","辟谣"
		];
				$scope.chan = function(i) {
					$scope.list2.push(this.v);
					$scope.list.splice(i, 1);
					console.log(this);
				}
				$scope.chan1 = function(i) {
					$scope.list.push(this.v)
					$scope.list2.splice(i, 1);
					console.log(this);
				}				
})
