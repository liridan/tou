$(function(){
	$("#txt").keyup(function(){
		$("#show").html("");
		if($(this).val()!=""){
			$.getJSON("https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+$(this).val()+"&cb=?"
			,function(data){
			var datas=data.s;
				var Wt=txt.value;
					var t="<span style='color:red'>"+Wt+"</span>";
				$.each(data.s,function(index,ele){
					$("<li>").html("<img src='img/liridan/homes.png'/><span class='text'>"+ele.replace(new RegExp(Wt,"g"),t)+"</span>").click(function(){
						$("#txt").val(ele);
						$("li").click(function(){
							$("#show").html("");
						})
					}).appendTo($("#show"));
				})
			})
		}
	})	
	
	var newstr="";
	$("#cancel").click(function(){
		$("#show").html("");
		var arr="";
			$.ajax({
				type:"get",
				url:"http://api.search.sina.com.cn/?c=news&q="+$("#txt").val()+"&stime=2016-06-05&etime=2017-06-07&sort=rel&highlight=1&num=10&ie=utf-8&callback",
				dataType:"jsonp",
				success:function(data){
					console.log(data.result.list);
					for(var i=0;i<data.result.list.length;i++){
						var n=data.result.list[i].title;
						var url=data.result.list[i].url;
						arr+="<li><a href="+url+">"+n+"</a></li>";
						
						$("#show").html(arr);
					}
				}
			}); 
		console.log($("#txt").val());
		newstr="<li><span>"+$("#txt").val()+"</span></li>"+newstr;
		console.log(newstr);
		$("#list").html(newstr);
		if($("#list li").length>10){
			$("#list li:gt(9)").remove();
		}
		$("#eliminate").click(function(){
			$("#list").empty("");
		})
		$("#txt").click(function(){
		  $(this).attr("placeholder","");
		})
	  	
	})
})


