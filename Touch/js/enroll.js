window.onload=function(){
	function $(id){
		return document.querySelector(id);
	}
		var txt=$("#txt");
		var passw=$("#password");
		var btn=$("#btn");
		var zhuc=$("#zhuc");
		var reg=$("#register");
		var dl=$("#denglu");
		var sub=$("#submit");
		var phone=$("#phone");
		var zcword=$("#zcword");
		var fsub=$("#firstsub");
		var indent=$("#indent");
		var db=null;
		db=openDatabase("mytest","2.0","test a command",2*1024*1024);
		    if(!localStorage.getItem("db")){
		    	
		    	db.transaction(function(tx){
					tx.executeSql("create table if not exists zh (zh unique,pass integer)");
				})
		    	localStorage.setItem("db",db);
		    }
		    
		    var data = localStorage.getItem("db");
		    console.log(data)
			
				fsub.onclick=function(){
					db.transaction(function(tx){
		    	 	    tx.executeSql("select * from zh where zh=?",[phone.value],function(tx,rs){
		    	 	   		if(rs.rows.length>0){
		    	 	   			alert("该电话号码已注册")
		    	 	   		}
		    	 	    })
		    	 	})
					if(phone.value!=""&&zcword.value!=""){
						if(/^[1][5,3,,7,8]\d{9}$/.test(phone.value)){
							if(/^[a-zA-Z0-9]{6,12}$/.test(zcword.value)){
								if(zcword.value==indent.value){
									db.transaction(function(tx){
										tx.executeSql("insert into zh (zh,pass) values(?,?)",[phone.value,zcword.value],function(){
											alert("注册成功");
											reg.style.top=3000+"px";
										});
									});	
								}
								else{
									alert("请再次确认密码");
								}
							}
							else{
								alert("密码应为6-12位的数字、字母或符号");
							}
						}
						else{
							alert("请输入正确的电话号码");
						}
					}
					else{
						alert("请输入电话号码或密码");
					}		  
				}
				
		    	
			btn.onclick=function(){
		        db.transaction(function(tx){
	    	 	   tx.executeSql("select * from zh where zh=? and pass=?",[txt.value,passw.value],function(tx,rs){
    	 	   		   	if(rs.rows.length>0){
    	 	   	       		alert("登录成功");
    	 	   	       		window.location.href="index.html";
    	 	   	       	}
    	 	   	       	else{
    	 	   	       		alert("请输入正确的用户名或密码");
    	 	   	       	}
	    	 	   })
		    	})
			}
		
		zhuc.onclick=function(){
			reg.style.top=0;
			txt.value="";
			passw.value="";
		}
		dl.onclick=function(){
			reg.style.top=3000+"px";
			phone.value="";
			passw.value="";
		}
		
		txt.onkeyup=function(){
			passw.value="";
		}
}		