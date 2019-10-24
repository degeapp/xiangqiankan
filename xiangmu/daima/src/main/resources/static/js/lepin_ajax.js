
$(document).ready(function(){
	/**鐧婚檰**/
	$('#login').click(function (){
		var username = $('#username').val();
		var pwd = $('#pwd').val();
		var remember = $('#remember').val();
		var equip = $('#equip').val();
		var utype = $('#utype').val();
        
		if(username == "" || pwd == ""){
			if(equip == "wx"){
				dialogShow('鎵嬫満鍙凤紙鐢ㄦ埛鍚嶏級瀵嗙爜涓嶈兘涓虹┖');
			}else{
				alert('鎵嬫満鍙凤紙鐢ㄦ埛鍚嶏級瀵嗙爜涓嶈兘涓虹┖');
			}
			
			return false;
		}else{
			mobile = /^(13|14|15|16|17|18|19)[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/;
			if(!mobile.test(username)){
				if(equip == "wx"){
					dialogShow('璇锋纭～鍐欐墜鏈哄彿锛堢敤鎴峰悕锛�');
				}else{
					alert('璇锋纭～鍐欐墜鏈哄彿锛堢敤鎴峰悕锛�');
				}
				
				return false;
			}
		}
		
		$("#login").attr('disabled',true);

		var ajax_url = "?act=login_do&utype="+utype;
		if(typeof equip != 'undefined'){
			ajax_url = ajax_url+"&equip="+equip;
		}
		ajax_url = ajax_url+"&remember="+remember+"&pwd="+pwd+"&username="+username+"&t="+new Date().getTime();

		$.ajax({
			url: ajax_url,
			timeout: 5000,
			type: "post",
			dataType: "json",
			error:function(){
				if(equip == "wx"){
					dialogShow('鐧诲綍澶辫触');
				}else{
					alert('鐧诲綍澶辫触');
				}
				$("#login").attr('disabled',false);
			},
			success:function(rs){
				
				if(rs[0]==0){
					if(equip == "wx"){
						dialogShow(rs[1]);
					}else{
						alert(rs[1]);
					}
					$("#login").attr('disabled',false);
				}else{
                    var wechat = $("#wechat").val();
                    if(wechat){
                        location.href="banner.php?act=calendar"; 
                    }else{
					    location.href=rs[1];
                    }
					
				}
			}
		});
	});
    
    /**鏂扮増浼佷笟绔櫥闄�**/
	$('#company_login').click(function (){
		var username = $('#company_username').val();
		var pwd = $('#company_pwd').val();
		var remember = $('#remember').val();
        var yzm = $("#company_yzm").val();
        
		if(username == "" || pwd == ""){
		    alert('鎵嬫満鍙凤紙鐢ㄦ埛鍚嶏級瀵嗙爜涓嶈兘涓虹┖');
			return false;
		}else{
            mobile = /^(13|14|15|16|17|18|19)[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/;
            if(!mobile.test(username)){
                alert('璇锋纭～鍐欐墜鏈哄彿锛堢敤鎴峰悕锛�');
                return false;
            }
		}
        
        if(!yzm){
            alert('璇峰～鍐欓獙璇佺爜');
            return false;
        }
		
		$("#login").attr('disabled',true);

		var ajax_url = "login.php?act=login_do&utype=2&needyzm=1&yzm="+yzm;
		ajax_url = ajax_url+"&remember="+remember+"&pwd="+pwd+"&username="+username+"&t="+new Date().getTime();

		$.ajax({
			url: ajax_url,
			timeout: 5000,
			type: "post",
			dataType: "json",
			error:function(){
				alert('鐧诲綍澶辫触');
				$("#login").attr('disabled',false);
			},
			success:function(rs){
				
				if(rs[0]==0){
					alert(rs[1]);
					$("#login").attr('disabled',false);
				}else{
				    location.href=rs[1];
				}
			}
		});
	});

	/**娉ㄥ唽**/
	$('#regist').click(function(){
		var username = $('#username').val();
		var pwd = $('#pwd').val();
		var repwd = $('#repwd').val();
		var auth = $('#auth').val();
		var equip = $('#equip').val();
		var utype = $('#utype').val();

		
		if(username == ""){
			if(equip == "wx"){
				dialogShow('鎵嬫満鍙凤紙鐢ㄦ埛鍚嶏級涓嶈兘涓虹┖');
			}else{
				alert('鎵嬫満鍙凤紙鐢ㄦ埛鍚嶏級涓嶈兘涓虹┖');
			}
			
			return false;
		}
		if(pwd == ""){
			if(equip == "wx"){
				dialogShow('瀵嗙爜涓嶈兘涓虹┖');
			}else{
				alert('瀵嗙爜涓嶈兘涓虹┖');
			}
			
			return false;
		}
		if(repwd == ""){
			if(equip == "wx"){
				dialogShow('纭瀵嗙爜涓嶈兘涓虹┖');
			}else{
				alert('纭瀵嗙爜涓嶈兘涓虹┖');
			}
			
			return false;
		}
		if(auth == ""){
			if(equip == "wx"){
				dialogShow('鎵嬫満楠岃瘉鐮佷笉鑳戒负绌�');
			}else{
				alert('鎵嬫満楠岃瘉鐮佷笉鑳戒负绌�');
			}
			
			return false;
		}

		if(pwd != repwd){
			if(equip == "wx"){
				dialogShow('瀵嗙爜涓嶄竴鑷达紝璇烽噸鏂板～鍐�');
			}else{
				alert('瀵嗙爜涓嶄竴鑷达紝璇烽噸鏂板～鍐�');
			}
			
			return false;
		}

		mobile = /^(13|14|15|16|17|18|19)[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/;
		if(!mobile.test(username)){
			if(equip == "wx"){
				dialogShow('璇锋纭～鍐欐墜鏈哄彿锛堢敤鎴峰悕锛�');
			}else{
				alert('璇锋纭～鍐欐墜鏈哄彿锛堢敤鎴峰悕锛�');
			}

			return false;
		}

		var ajax_url = "?act=regist_do";
		if(typeof equip != 'undefined'){
			ajax_url = ajax_url+"&equip="+equip;
		}
		ajax_url = ajax_url+"&utype="+utype+"&auth="+auth+"&pwd="+pwd+"&username="+username+"&t="+new Date().getTime();

		$.ajax({
			url: ajax_url,
			timeout: 5000,
			type: "post",
			dataType: "json",
			error:function(){
				if(equip == "wx"){
					dialogShow("娉ㄥ唽澶辫触");
				}else{
					alert("娉ㄥ唽澶辫触");
				}
			},
			success:function(rs){
				
				if(rs[0]==0){
					if(equip == "wx"){
						dialogShow(rs[1]);
					}else{
						alert(rs[1]);
					}
				}else{
					//location.href=rs[1];
					$.ajax({
						url: rs[1],
						timeout: 5000,
						type: "post",
						dataType: "json",
						error:function(){
							if(equip == "wx"){
								dialogShow('鐧诲綍澶辫触');
							}else{
								alert('鐧诲綍澶辫触');
							}
						},
						success:function(rs){
							
							if(rs[0]==0){
								if(equip == "wx"){
									dialogShow(rs[1]);
								}else{
									alert(rs[1]);
								}
							}else{
								location.href=rs[1];
								
							}
						}
					});
				}
			}
		});

	});
	/**閲嶈瀵嗙爜**/
	$('#setpwd').click(function(){
		var username = $('#username').val();
		var pwd = $('#pwd').val();
		var repwd = $('#repwd').val();
		var auth = $('#auth').val();
		var equip = $('#equip').val();

		if(username == ""){
			if(equip == "wx"){
				dialogShow('鎵嬫満鍙凤紙鐢ㄦ埛鍚嶏級涓嶈兘涓虹┖');
			}else{
				alert('鎵嬫満鍙凤紙鐢ㄦ埛鍚嶏級涓嶈兘涓虹┖');
			}
			return false;
		}
		if(pwd == ""){
			if(equip == "wx"){
				dialogShow('瀵嗙爜涓嶈兘涓虹┖');
			}else{
				alert('瀵嗙爜涓嶈兘涓虹┖');
			}
			return false;
		}
		if(repwd == ""){
			if(equip == "wx"){
				dialogShow('纭瀵嗙爜涓嶈兘涓虹┖');
			}else{
				alert('纭瀵嗙爜涓嶈兘涓虹┖');
			}
			return false;
		}
		if(auth == ""){
			if(equip == "wx"){
				dialogShow('鎵嬫満楠岃瘉鐮佷笉鑳戒负绌�');
			}else{
				alert('鎵嬫満楠岃瘉鐮佷笉鑳戒负绌�');
			}
			return false;
		}

		if(pwd != repwd){
			if(equip == "wx"){
				dialogShow('瀵嗙爜涓嶄竴鑷达紝璇烽噸鏂板～鍐�');
			}else{
				alert('瀵嗙爜涓嶄竴鑷达紝璇烽噸鏂板～鍐�');
			}
			return false;
		}

		mobile = /^(13|14|15|16|17|18|19)[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/;
		if(!mobile.test(username)){
			if(equip == "wx"){
				dialogShow('璇锋纭～鍐欐墜鏈哄彿锛堢敤鎴峰悕锛�');
			}else{
				alert('璇锋纭～鍐欐墜鏈哄彿锛堢敤鎴峰悕锛�');
			}
			return false;
		}

		var ajax_url = "?act=setpwd_do";
		if(typeof equip != 'undefined'){
			ajax_url = ajax_url+"&equip="+equip;
		}
		ajax_url = ajax_url+"&auth="+auth+"&pwd="+pwd+"&username="+username+"&t="+new Date().getTime();

		$.ajax({
			url: ajax_url,
			timeout: 5000,
			type: "post",
			dataType: "json",

			error:function(){
				if(equip == "wx"){
					dialogShow('閲嶈瀵嗙爜澶辫触');
				}else{
					alert('閲嶈瀵嗙爜澶辫触');
				}
			},

			success:function(rs){
				if(rs[0]==0){
					if(equip == "wx"){
						dialogShow(rs[1]);
					}else{
						alert(rs[1]);
					}
				}else{
					location.href=rs[1];
				}
			}
		});

	});
	/**鑾峰彇楠岃瘉鐮�**/
	$('#send_auth').click(function(){
		var mobile = $("#username").val();
		var equip = $('#equip').val();
        var yzm = $("#yzm").val();

        if(yzm == ""){
			if(equip == "wx"){
				dialogShow("鍥惧舰楠岃瘉鐮佷笉鑳戒负绌�");
			}else{
				alert("鍥惧舰楠岃瘉鐮佷笉鑳戒负绌�");
			}
            return false;
		}

		if(mobile==""){
			if(equip == "wx"){
				dialogShow("鎵嬫満鍙蜂笉鑳戒负绌�");
			}else{
				alert("鎵嬫満鍙蜂笉鑳戒负绌�");
			}
			
		}else{
			mobile_ze = /^(13|14|15|16|17|18|19)[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/;
			if(!mobile_ze.test(mobile)){
				if(equip == "wx"){
					dialogShow("璇锋纭～鍐欐墜鏈哄彿锛堢敤鎴峰悕锛�");
				}else{
					alert("璇锋纭～鍐欐墜鏈哄彿锛堢敤鎴峰悕锛�");
				}
				return false;
			}
			var pwd = $("#pwd").val();
			var repwd = $("#repwd").val();
			if(pwd== ""){
                if(equip == "wx"){
                    dialogShow("璇峰厛濉啓瀵嗙爜");
                }else{
                    alert("璇峰厛濉啓瀵嗙爜");
                }

				//alert("璇峰厛濉啓瀵嗙爜");
				return false;
			}
			if(repwd== ""){
                if(equip == "wx"){
                    dialogShow("璇峰厛濉啓纭瀵嗙爜");
                }else{
                    alert("璇峰厛濉啓纭瀵嗙爜");
                }

				//alert("璇峰厛濉啓纭瀵嗙爜");
				return false;
			}
			//娲诲姩鎶ュ悕
			var panduan=$("#panduan").val();
			if(panduan==1) {
				var ajax_url = "baoming.php?act=yz&username=" + mobile;
				$.ajax({
					url: ajax_url,
					timeout: 5000,
					type: "post",
					dataType: "json",
					error: function () {
						$("#yz").html('鏈煡閿欒锛岃鑱旂郴绠＄悊鍛�');
						return false;
					},
					success: function (rs) {
						if (rs == 1) {
							alert("鎮ㄥ凡鎶ヨ繃鍚嶏紝璇峰嬁閲嶅鎶ュ悕");
						}else{
							var ajax_url = "login.php?act=send_auth&mobile="+mobile+"&t="+new Date().getTime();
							$.ajax({
								url: ajax_url,
								timeout: 5000,
								type: "POST",
								dataType: "html",
								error: function(){
									if(equip == "wx"){
										dialogShow("鍙戦€佸け璐�");
									}else{
										alert("鍙戦€佸け璐�");
									}
								},
								success:function(){
                                    var count = 60;
                                    var countdown = setInterval(CountDown, 1000);
                                    function CountDown() {
                                        $("#send_auth").attr("disabled", true);
                                        if(equip == "wx"){
                                            $("#send_auth").val(count + " 绉掑悗閲嶆柊鑾峰彇");
                                            if (count == 0) {
                                                $("#send_auth").val("閲嶆柊鑾峰彇").removeAttr("disabled");
                                                clearInterval(countdown);
                                            }
                                        }else{
                                            $("#send_auth").html(count + " 绉掑悗閲嶆柊鑾峰彇");
                                            if (count == 0) {
                                                $("#send_auth").html("閲嶆柊鑾峰彇").removeAttr("disabled");
                                                clearInterval(countdown);
                                            }
                                        }

                                        count--;
                                    }

								}
							});
						}
					}
				});
			}else{
				var ajax_url = "login.php?act=send_auth&mobile="+mobile+"&t="+new Date().getTime()+"&yzm="+yzm+'&pwd='+pwd+'&repwd='+repwd;
				$.ajax({
					url: ajax_url,
					timeout: 5000,
					type: "POST",
					dataType: "json",
					error: function(){
						if(equip == "wx"){
							dialogShow("鍙戦€佸け璐�");
						}else{
							alert("鍙戦€佸け璐�");
						}
					},
					success:function(rs){
                        if(rs.sta == 0){
                            if(equip == "wx"){
                                dialogShow(rs.msg);
                            }else{
                                alert(rs.msg);
                            }
                        }else{ 
                            var count = 60;
                            function CountDown() {
                                var equip = $('#equip').val();
                                $("#send_auth").attr("disabled", true);
                                if(equip == "wx"){
                                    $("#send_auth").val(count + " 绉掑悗閲嶆柊鑾峰彇");
                                    if (count == 0) {
                                        $("#send_auth").val("閲嶆柊鑾峰彇").removeAttr("disabled");
                                        clearInterval(countdown);
                                    }
                                }else{
                                    $("#send_auth").html(count + " 绉掑悗閲嶆柊鑾峰彇");
                                    if (count == 0) {
                                        $("#send_auth").html("閲嶆柊鑾峰彇").removeAttr("disabled");
                                        clearInterval(countdown);
                                    }
                                }

                                count--;
                            }
                            var countdown = setInterval(CountDown, 1000);

                        }
                    }
				});
			}
		}

	});
	/**閫氳繃uid鑾峰彇楠岃瘉鐮�**/
	$('#send_auth_id').click(function(){
		var equip = $('#equip').val();
		var uid= $("#uid").val();
		var active=$("#active_1").val();
		//if(active==1){ //璐︽埛鎻愮幇 楠岃瘉鐮佸彂閫佸強楠岃瘉
			var yanzhengma=$("#yanzhengma").val();
			if(!yanzhengma){
				alert('璇峰～鍐欏浘鐗囬獙璇佺爜');
				return false;
			}
			$.ajax({
				type: "POST",
				url: "my.php?act=panduan_yzm"+'&yanzhengma='+yanzhengma,
				dataType:"json",
				success: function(data){
					if(data==1){
						var ajax_url = "login.php?act=send_auth_id&uid="+uid+"&t="+new Date().getTime()+'&yzm='+yanzhengma;

						$.ajax({
							url: ajax_url,
							timeout: 5000,
							type: "POST",
							dataType: "json",
							error: function(){
								if(equip == "wx"){
									dialogShow("鍙戦€佸け璐�");
								}else{
									alert("鍙戦€佸け璐�");
								}
							},
							success:function(rs){
                                if(rs.sta == 0){
                                    if(equip == "wx"){
                                        dialogShow(rs.msg);
                                    }else{
                                        alert(rs.msg);
                                    }
                                }else{ 

                                    var count = 60;
                                    function CountDown() {
                                        $("#send_auth_id").attr("disabled", true);
                                        if(equip == "wx"){
                                            $("#send_auth_id").val(count + "s鍚庤幏鍙�");
                                            if (count == 0) {
                                                $("#send_auth_id").val("閲嶆柊鑾峰彇").removeAttr("disabled");
                                                clearInterval(countdown);
                                            }
                                        }else{
                                            $("#send_auth_id").val(count + "s鍚庤幏鍙�");
                                            if (count == 0) {
                                                $("#send_auth_id").val("閲嶆柊鑾峰彇").removeAttr("disabled");
                                                clearInterval(countdown);
                                            }
                                        }

                                        count--;
                                    }
                                    var countdown = setInterval(CountDown, 1000);
                                }
                            }
						});
					}else{
						alert('鍥剧墖楠岃瘉鐮侀敊璇�');
						return false;
					}
				}
			});

		/*}else{
			var ajax_url = "login.php?act=send_auth_id&uid="+uid+"&t="+new Date().getTime();

			$.ajax({
				url: ajax_url,
				timeout: 5000,
				type: "POST",
				dataType: "html",
				error: function(){
					if(equip == "wx"){
						dialogShow("鍙戦€佸け璐�");
					}else{
						alert("鍙戦€佸け璐�");
					}
				},
				success:function(){
					var count = 60;
					var countdown = setInterval(CountDown, 1000);
					function CountDown() {
						$("#send_auth_id").attr("disabled", true);
						if(equip == "wx"){
							$("#send_auth_id").val(count + "s鍚庤幏鍙�");
							if (count == 0) {
								$("#send_auth_id").val("閲嶆柊鑾峰彇").removeAttr("disabled");
								clearInterval(countdown);
							}
						}else{
							$("#send_auth_id").val(count + "s鍚庤幏鍙�");
							if (count == 0) {
								$("#send_auth_id").val("閲嶆柊鑾峰彇").removeAttr("disabled");
								clearInterval(countdown);
							}
						}

						count--;
					}
				}
			});
		}*/


	});
	/**鏀惰棌/鍙栨秷鏀惰棌浼佷笟**/
	$('#collect_company').click(function(){
		var state_tmp = $("#collect_company_state").val();
		var company_id = $("#company_id").val();
		var equip = $('#equip').val();
		/**鍔ㄤ綔**/
		if(state_tmp == 1){
			state = 2;
		}else{
			state = 1;
		}

		var ajax_url = "index.php?act=collect_company&state="+state+"&company_id="+company_id+"&equip="+equip+"&t="+new Date().getTime();

		$.ajax({
			url: ajax_url,
			//timeout: 5000,
			type: "POST",
			dataType: "json",
			error: function(){
				dialogShow('鎿嶄綔澶辫触锛侊紒锛�');
			},
			success:function(rs){
				if(rs[0]==1){
					if(equip=="wx"){//寰俊绔�
						//dialogShow(rs[1]);
						if(state_tmp == 1){//鍙栨秷鏀惰棌
							$("#collect_company_state").val('2') ;
							$('#collect_company').removeClass('yscbox fr');
							$('#collect_company').addClass('scbox fr');
						}else{
							$("#collect_company_state").val('1') ;
							$('#collect_company').removeClass('scbox fr');
							$('#collect_company').addClass('yscbox fr');
						}
                        alert(rs[1]);
					}else{//PC绔�
						alert(rs[1]);
						if(state_tmp == 1){//鍙栨秷鏀惰棌
							$("#collect_company_state").val('2') ;
							$('#collect_company').attr("class","sc");
						}else{
							$("#collect_company_state").val('1') ;
							$('#collect_company').attr("class","sc-on");
						}
					}
				}else{
					if(equip == "wx"){
						dialogShow(rs[1]);
					}else{
						alert(rs[1]);
					}
				}	
			}
		});
	});
	/**鏀惰棌/鍙栨秷鏀惰棌鑱屼綅**/
	$('#collect_job').click(function(){
		var state_tmp = $("#collect_job_state").val();
		var job_id = $("#job_id").val();
		var equip = $('#equip').val();
		var state = '';
		/**鍔ㄤ綔**/
		if(state_tmp == 1){
			state = 2;
		}else{
			state = 1;
		}

		var ajax_url = "index.php?act=collect_job&state="+state+"&job_id="+job_id+"&equip="+equip+"&t="+new Date().getTime();

		$.ajax({
			url: ajax_url,
			//timeout: 5000,
			type: "POST",
			dataType: "json",
			error: function(){
				alert('鎿嶄綔澶辫触锛侊紒锛�');
			},
			success:function(rs){
				if(rs[0]==1){
					if(equip=="wx"){//寰俊绔�
						//dialogShow(rs[1]);
						if(state_tmp == 1){//鍙栨秷鏀惰棌
							$("#collect_job_state").val('2') ;
							$('#collect_job').removeClass('ysc');
							$('#collect_job').addClass('sc');
						}else{
							$("#collect_job_state").val('1') ;
							$('#collect_job').removeClass('sc');
							$('#collect_job').addClass('ysc');
						}
                        alert(rs[1]);
					}else{
						if(state_tmp == 1){//鍙栨秷鏀惰棌
							$("#collect_job_state").val('2') ;
							$('#collect_job').attr("class","sc");
						}else{
							$("#collect_job_state").val('1') ;
							$('#collect_job').attr("class","sc-on");
						}
						alert(rs[1]);
					}
					
				}else{
					if(equip == "wx"){
                        alert(rs[1]); 
					}else{
						alert(rs[1]);
					}
				}
			}
		});
		
	});
	/**缁х画鎶ュ悕鑱屼綅**/
	$('#apply_job_continue').click(function(){
		var job_id = $("#job_id").val();
		var equip = $('#equip').val();
		var worktime = $("#worktime").val();

		var is_continuity = $("#is_continuity").val();//鏄惁鏄繛缁伐浣�

	    //濡傛灉鏈夊湴鍥�
        var mapxy = $("#mapxy").val();
        if(mapxy == 1){
            var mappos = $('#mappos').val();

            if(!mappos){
               if(equip == 'wx'){
                 alert("璇烽€夋嫨宸ヤ綔鍦扮偣");
               }else{
                 alert("璇烽€夋嫨宸ヤ綔鍦扮偣");
               }
               return false;
            }
        }

		if(worktime == ""){
			if(equip == 'wx'){
				alert("璇烽€夋嫨鎶ュ悕鏃堕棿锛�");
			}else{
				alert("璇烽€夋嫨鎶ュ悕鏃堕棿锛�");
			}
			
			return false;
		}
		if(typeof($("#fullname").val()) == 'undefined' ){
			var fullname = '';
		}else{
			var fullname = $("#fullname").val();
			if(fullname == ""){			
                if(equip == 'wx'){
				    alert("璇峰～鍐欏鍚�!");
                }else{
                    alert('璇峰～鍐欏鍚�!');
                }
                return false;
			}
		}
		if(typeof($("#sex").val()) == 'undefined'){
			var sex = '';
		}else{
			var sex = $("#sex").val();
			if(sex == ""){			
                if(equip == 'wx'){
				    alert("璇峰～鍐欐€у埆!");
                }else{
                    alert("璇峰～鍐欐€у埆!");
                }
                return false;
			}
		}
	
		if(typeof($("#card_id").val()) == 'undefined' ){
			var card_id = '';
		}else{
			var card_id = $("#card_id").val();
			if(card_id == ""){
				if(equip == 'wx'){
					alert("璇峰～鍐欒韩浠借瘉鍙�!");
				}else{
					alert("璇峰～鍐欒韩浠借瘉鍙�!");
				}
				return false;
			}else{
				var card_rule = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
				if((card_id.length !=15 && card_id.length !=18) || !IdentityCodeValid(card_id)){
					if(equip == 'wx'){
						alert("璇峰～鍐欐纭殑韬唤璇佸彿锛�");
					}else{
						alert("璇峰～鍐欐纭殑韬唤璇佸彿锛�");
					}
					return false;
				}
			}
		}
		if(typeof($("#worktime").val()) == 'undefined'){
			var worktime = '';
		}else{
			var worktime = $("#worktime").val();
			if(worktime == ""){			
				dialogShow("璇烽€夋嫨鏃堕棿!");
			}
		}
		/**鍔ㄤ綔**/
		var	state = 1;
        if(equip == 'wx'){
            var is_from = 5; 
        }else{
            var is_from = 6;
        }

		var ajax_url = "index.php?act=apply_job&state="+state+"&job_id="+job_id+"&worktime="+worktime+"&card_id="+card_id+"&sex="+sex+"&fullname="+fullname+"&marker="+mappos+"&t="+new Date().getTime()+'&is_from='+is_from;

        $("#apply_job_continue").attr('disabled',true);
		$.ajax({
			url: ajax_url,
			timeout: 10000,
			type: "POST",
			dataType: "json",			
			error: function(){	
                $("#apply_job_continue").attr('disabled',false);
				if(equip == "wx"){
					alert('鐢宠澶辫触锛侊紒锛�');
				}else{
					alert('鐢宠澶辫触锛侊紒锛�');
				}
			},
			
			success:function(rs){
                $("#apply_job_continue").attr('disabled',false);
				if(rs[0]==1){
					if(equip == "wx"){
						alert(rs[1]);
						/*if($("#job_apply").val() == 2){
							$('.ui-btn-lg').show();
							$('.ui-btn-lg').css('width','50%');
							$('#continue_button').css('width','100%');
							$('#continue_button').html('缁х画鎶ュ悕') ;
							$("#job_apply").val('1');
						}*/
                        location.reload();
					}else{
						alert(rs[1]);
						location.reload();
					}
				}else if(rs[0]==2){
					if(equip == "wx"){
						location.href=rs[1]+"?equip="+equip;
					}else{
						location.href=rs[1];
					}
					
				}else{
					if(equip == "wx"){
						alert(rs[1]);
					}else{
						alert(rs[1]);
					}
				}
			}
		});
	});
	/**鐢宠/鍙栨秷鐢宠鑱屼綅**/
	$('#apply_job').click(function(){
		var state_tmp = $("#job_apply").val();//1宸茬粡鎶ュ悕锛�2娌℃姤鍚�
		var job_id = $("#job_id").val();
		var equip = $('#equip').val();
		var worktime = $("#worktime").val();
        var type=$("#type").val();
		var is_continuity = $("#is_continuity").val();//鏄惁鏄繛缁伐浣�
        
        //濡傛灉鏈夊湴鍥�
        var mapxy = $("#mapxy").val();
        if(state_tmp == 2 && mapxy == 1){
            var mappos = $('#mappos').val();
            if(!mappos){
               alert("璇烽€夋嫨宸ヤ綔鍦扮偣");
               return false;
            }
        } 
	
		if(typeof($("#fullname").val()) == 'undefined' || state_tmp == 1){
			var fullname = '';
		}else{
			var fullname = $("#fullname").val();
			if(fullname == ""){			
				alert("璇峰～鍐欏鍚�!");
			}
		}
		if(typeof($("#sex").val()) == 'undefined' || state_tmp == 1){
			var sex = '';
		}else{
			var sex = $("#sex").val();
			if(sex == ""){			
				alert("璇峰～鍐欐€у埆!");
			}
		}
		if(typeof($("#card_id").val()) == 'undefined' || state_tmp == 1){
			var card_id = '';
		}else{
			var card_id = $("#card_id").val();
			if(card_id == ""){
				if(equip == 'wx'){
                    /*鍒ゆ柇鏄惁鐧诲綍銆佷釜浜虹櫥褰�*/
                    if(type==1){
                        var card_rule = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
                        if((card_id.length !=15 && card_id.length !=18) || !IdentityCodeValid(card_id)){
                            if(equip == 'wx'){
                                alert("璇峰～鍐欐纭殑韬唤璇佸彿锛�");
                            }else{
                                alert("璇峰～鍐欐纭殑韬唤璇佸彿锛�");
                            }
                            return false;
                        }
                    }else{
                        alert("璇峰厛鐧诲綍");
                        return false;
						/*setTimeout(function(){
							location.href="login.php?equip=wx&act=choice";
						},3000);*/
                    }
				}else{
					alert("璇峰～鍐欒韩浠借瘉鍙�!");
				}
				return false;
			}else{
				var card_rule = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
				if((card_id.length !=15 && card_id.length !=18) || !IdentityCodeValid(card_id)){
				//if(!card_rule.test(card_id)){
					if(equip == 'wx'){
						alert("璇峰～鍐欐纭殑韬唤璇佸彿锛�");
					}else{
						alert("璇峰～鍐欐纭殑韬唤璇佸彿锛�");
					}
					return false;
				}
			}
		}
		if(is_continuity == 2 && state_tmp == 2){//涓嶈繛缁殑宸ヤ綔
			if(worktime == ""){
				if(equip == 'wx'){
					alert("璇烽€夋嫨鎶ュ悕鏃堕棿锛�");
				}else{
					alert("璇烽€夋嫨鎶ュ悕鏃堕棿锛�");
				}

				return false;
			}
		}
		if(typeof($("#worktime").val()) == 'undefined'){
			var worktime = '';
		}else{
			var worktime = $("#worktime").val();
			if(worktime == "" && (equip != 'wx' || (state_tmp != 1 && equip == 'wx'))){			
				alert("璇烽€夋嫨鏃堕棿!");
				return false;
			}
		}
		/**鍔ㄤ綔**/
		if(state_tmp == 1){
			state = 2;
		}else{
			state = 1;
		}
        
        if(equip == 'wx'){
            var is_from = 5; 
        }else{
            var is_from = 6;
        }


        if(state == 2 && equip == "wx"){
            var ajax_url = "index.php?act=apply_job_wx&state="+state+"&job_id="+job_id+"&worktime="+worktime+"&card_id="+card_id+"&sex="+sex+"&fullname="+fullname+"&marker="+mappos+"&t="+new Date().getTime();
        }else{
            var ajax_url = "index.php?act=apply_job&state="+state+"&job_id="+job_id+"&worktime="+worktime+"&card_id="+card_id+"&sex="+sex+"&fullname="+fullname+"&marker="+mappos+"&t="+new Date().getTime()+'&is_from='+is_from;
        }
        
        $("#apply_job").attr('disabled',true);
		$.ajax({
			url: ajax_url,
			timeout: 5000,
			type: "POST",
			dataType: "json",
			error: function(){	
                $("#apply_job").attr('disabled',false);
				if(equip == "wx"){
					dialogShow('鐢宠澶辫触锛侊紒锛�');
				}else{
					alert('鐢宠澶辫触锛侊紒锛�');
				}
			},
			success:function(rs){
                $("#apply_job").attr('disabled',false);
				if(rs[0]==1){
					if(equip == "wx"){
						
					    alert(rs[1]);
                        location.reload();
						/*if(is_continuity == 1){//杩炵画宸ヤ綔
							if(state_tmp == 1){
								$("#job_apply").val('2') ;
								$(".apply_button").html('绔嬪埢鎶ュ悕') ;
							}else{
								$("#job_apply").val('1') ;
								$(".apply_button").html('鍙栨秷鎶ュ悕') ;
							}
						}else{
							if(state_tmp == 1){//鍙栨秷鎶ュ悕
								$('#apply_job_continue').hide();
								$('.apply_job').show();
								$('.ui-btn-lg').hide();
								$('#continue_button').css('width','100%');
								$('#continue_button').html('绔嬪埢鎶ュ悕') ;
								$('#continue_button').show() ;
								$("#job_apply").val('2') ;
							}else{//鎶ュ悕鎿嶄綔
								$('.apply_job').hide();
								$('#apply_job_continue').show();
								$('.ui-btn-lg').css('width','50%');
								$('#continue_button').show();
								$("#job_apply").val('1') ;
								//$(".apply_button").html('鍙栨秷鎶ュ悕') ;
								$(".apply_button").hide() ;
								$(".quxiao_button").show();
								$(".quxiao_button").attr('id','apply_job');
							}
						}*/
						
					}else{
						alert(rs[1]);
						location.reload();
					}
				}else if(rs[0]==2){
					if(equip == "wx"){
						location.href=rs[1]+"?equip="+equip;
					}else{
						location.href=rs[1];
					}
					
				}else{
					if(equip == "wx"){
						alert(rs[1]);
					}else{
						alert(rs[1]);
					}
				}
			}
		});
	});
	/**鍚屾剰閭€璇疯亴浣�--娑堟伅**/
	$('#message_yes').click(function(){
		var mid = $(this).attr('mid');
		var uid = $("#uid").val();
		var jobid = $("#i_jobid_"+mid).val();
		
		var ajax_url = "my.php?act=operate_company_interview&equip=wx&state=1&uid="+uid+"&jobid="+jobid+"&mid="+mid+"&t="+new Date().getTime();

		$.ajax({
			url: ajax_url,
			timeout: 5000,
			type: "POST",
			dataType: "json",
			error: function(){
				dialogShow('鎿嶄綔澶辫触锛侊紒锛�');
			},
			success:function(rs){
				if(rs[0]==2){
					window.location.href=rs[1]; 
				}else{				
					dialogShow(rs[1]);
				}
			}
		});
	});
	/**鎷掔粷閭€璇疯亴浣�--娑堟伅**/
	$('#message_no').click(function(){
		var mid = $(this).attr('mid');
		var uid = $("#uid").val();
		var jobid = $("#i_jobid_"+mid).val();
		
		var ajax_url = "my.php?act=operate_company_interview&equip=wx&state=2&uid="+uid+"&jobid="+jobid+"&mid="+mid+"&t="+new Date().getTime();

		$.ajax({
			url: ajax_url,
			timeout: 5000,
			type: "POST",
			dataType: "json",
			error: function(){
				dialogShow('鎿嶄綔澶辫触锛侊紒锛�');
			},
			success:function(rs){
				if(rs[0]==2){
					window.location.href=rs[1]; 
				}else{
					dialogShow(rs[1]);
				}
			}
		});
	});
	/**鍚屾剰閭€璇疯亴浣�--閭€璇�**/
	$('#interv_yes').click(function(){
		var mid='';
		var jobid = $(this).attr('jid');
		var uid = $("#uid").val();
		
		var ajax_url = "my.php?act=operate_company_interview&equip=wx&state=1&uid="+uid+"&jobid="+jobid+"&mid="+mid+"&t="+new Date().getTime();
		
		$.ajax({
			url: ajax_url,
			timeout: 5000,
			type: "POST",
			dataType: "json",
			error: function(){
				dialogShow('鎿嶄綔澶辫触锛侊紒锛�');
			},
			success:function(rs){
				if(rs[0]==2){
					window.location.href=rs[1]; 
				}else{				
					dialogShow(rs[1]);
				}
			}
		});
	});
	/**鎷掔粷閭€璇疯亴浣�--閭€璇�**/
	$('#interv_no').click(function(){
		var mid='';
		var jobid = $(this).attr('jid');
		var uid = $("#uid").val();
		
		var ajax_url = "my.php?act=operate_company_interview&equip=wx&state=2&uid="+uid+"&jobid="+jobid+"&mid="+mid+"&t="+new Date().getTime();
		
		$.ajax({
			url: ajax_url,
			timeout: 5000,
			type: "POST",
			dataType: "json",
			error: function(){
				dialogShow('鎿嶄綔澶辫触锛侊紒锛�');
			},
			success:function(rs){
				if(rs[0]==2){
					window.location.href=rs[1]; 
				}else{				
					dialogShow(rs[1]);
				}
			}
		});
	});
	
	/**鍚屾剰鍒板矖**/
	$('#sure').click(function(){
		var messageid = $(this).attr('mid');
		var uid = $("#uid").val();
		var jobid = $("#s_jobid_"+messageid).val();
		
		var ajax_url = "my.php?act=operate_message_list&equip=wx&state=1&uid="+uid+"&jobid="+jobid+"&messageid="+messageid+"&t="+new Date().getTime();
	//document.write(ajax_url);
		$.ajax({
			url: ajax_url,
			timeout: 5000,
			type: "POST",
			dataType: "json",
			error: function(){
				dialogShow('鎿嶄綔澶辫触锛侊紒锛�');
			},
			success:function(rs){
				if(rs[0]==2){
					window.location.href=rs[1]; 
				}else{
					dialogShow(rs[1]);
				}
			}
		});
	});
	/**鎷掔粷鍒板矖**/
	$('#no_sure').click(function(){
		var messageid = $(this).attr('mid');
		var uid = $("#uid").val();
		var jobid = $("#s_jobid_"+messageid).val();
		
		var ajax_url = "my.php?act=operate_message_list&equip=wx&state=2&uid="+uid+"&jobid="+jobid+"&messageid="+messageid+"&t="+new Date().getTime();
		$.ajax({
			url: ajax_url,
			timeout: 5000,
			type: "POST",
			dataType: "json",
			error: function(){
				dialogShow('鎿嶄綔澶辫触锛侊紒锛�');
			},
			success:function(rs){
				if(rs[0]==2){
					window.location.href=rs[1]; 
				}else{
					dialogShow(rs[1]);
				}
			}
		});
	});
	
	/**瀹氫綅鎵撳崱**/
	$('#sign').click(function(){
		var jobid = $("#jobid").val();
        var lat = $("#lat").val();
        var log = $("#log").val();
        var address = $("#address").val();

		//var ajax_url = "my.php?act=user_sign&equip=wx&sign_way=1&jobid="+jobid+"&lat="+lat+"&log="+log+"&address="+address;
        $.post('my.php?act=user_sign&sign_way=1',{jobid:jobid,lat:lat,log:log,address:address},function(rs){
            if(rs[0]==2){
                //dialogShow(rs[2]);
                alert(rs[2]);
                window.location.href=rs[1];
            }else{				
                alert(rs[1]);
                //dialogShow(rs[1]);
            }
        },'json')
		/*$.ajax({
			url: ajax_url,
			timeout: 5000,
			type: "POST",
			dataType: "json",
			error: function(){
				dialogShow('鎿嶄綔澶辫触锛侊紒锛�');
			},
			success:function(rs){
				if(rs[0]==2){
                    dialogShow(rs[2]);
					window.location.href=rs[1];
				}else{				
					dialogShow(rs[1]);
				}
			}
		});*/
	});
    
    
    /**鎷嶇収鎵撳崱**/
	$('#sign_pic').click(function(){
		var jobid = $("#jobid").val();
          var media = '';
        $("input[name='media']").each(function(i){
            media += $(this).val() + ','; 
        });

        if(media == ''){
            return false;
        }

        $.post('my.php?act=user_sign_pic',{jobid:jobid,media:media},function(rs){
            if(rs[0]==2){
                dialogShow(rs[2]);
                window.location.href=rs[1];
            }else{				
                dialogShow(rs[1]);
            }
        },'json')

	});
    
    $("#sys").click(function(){
        wx.scanQRCode({
            needResult: 1, // 榛樿涓�0锛屾壂鎻忕粨鏋滅敱寰俊澶勭悊锛�1鍒欑洿鎺ヨ繑鍥炴壂鎻忕粨鏋滐紝
            scanType: ["qrCode","barCode"], // 鍙互鎸囧畾鎵簩缁寸爜杩樻槸涓€缁寸爜锛岄粯璁や簩鑰呴兘鏈�
            success: function (res) {
                var result = res.resultStr; // 褰搉eedResult 涓� 1 鏃讹紝鎵爜杩斿洖鐨勭粨鏋� 
                $.post('my.php?act=user_sign&sign_way=2',{jobid:result},function(rs){
                    if(rs[0]==2){
                        dialogShow(rs[2]);
                        window.location.href=rs[1];
                    }else{
                        dialogShow(rs[1]);
                    }
                },'json')
            }
        });
    })


    $("li .fr").click(function(){
        
        if(!$(this).hasClass('on')){
            var num = $(".on").size();
            if(num >= 2){
                alert('鏈€澶氬彧鑳借缃�2涓椂闂寸偣鍝�');
                return false;
            }
        }
        $(this).toggleClass("on");
    })   

    $("#sign_push_time").click(function(){
        var time = [];
        var timearr = ['7:00','8:40','13:00','15:00','17:00','19:00'];
        $("li .on").each(function(i){
           var t = $(this).parent().text();
           if($.inArray(t,timearr) < 0){
                alert('璇烽€夋嫨姝ｇ‘鐨勬彁閱掓椂闂�');
                return false; 
           }
           time[i] = $(this).parent().text();
        })

        $.post('my.php',{act:'sign_push_time',time:time},function(rs){
            if(rs[0]==2){
                alert(rs[2]);
            }else{
                alert(rs[1]);
            }
        },'json')
    
    
    })

    function dialogShow(message){
        $("#dialog-info").html(message);
        $(".ui-dialog").dialog("show");
    }
    
    
});

function dialogShow2(){
    $(".ui-dialog2").show();
}

function company_select_city(value){
    $("#work_city").hide();
    $("#city_search").empty();
    if(value){
        $.post("company.php?act=work_city",{sid:value},function(data){
            if(data.code == 1){
                var html = '<option value="">宸ヤ綔鍩庡競</option>';
                for(var i = 0; i<data.msg.length; i++){
                   html += "<option value='"+data.msg[i].id+"'>"+data.msg[i].categoryname+"</option>"; 
                }
                $("#city_search").append(html);
                $("#work_city").show();

            }else{
                alert(data.msg);
            }
        },'json')
    }
}

function buy_vip(id){
	if(id){
		var html='<li class="lineH36"><label>鎺ㄨ崘鐮�</label><input class="tjinp" name="recommend_code" id="recommend_code" type="text"></li> <li class="fontC02 mt5 fontS12" style="margin-left:70px;">璐拱浼氬憳鎺ㄨ崘鐮佷负4浣嶆暟瀛楋紝濡傛棤浜烘帹鑽愬彲涓嶅～銆�</li> <li class="mt30 center"><a class="tjbtn" href="javascript:void(0)" onclick="buy_vip_vode('+id+')" >纭畾</a></li>';
		$("#tj_log").html(html);
		shadboxFun('tj_num');
		$("#tj_num").show();
				
	}
}
function buy_vip_vode(id){
		
	var recommend_code = $("#recommend_code").val();
	$.post("my.php?act=buy_vip",{id:id,recommend_code:recommend_code},function(data){
		
            if(data.result_code == 3){
				$("#tj_num").hide();
				$("body").append(data.result_msg);
				
                //$("#work_city").show();
            }
			if(data.result_code == 2){
				$("#tj_num").hide();
				var html = '<div class="jf_tit fontS18">璐拱澶辫触</div><ul class="lineH24 mt15"><li>闈炲父閬楁喚锛岃喘涔板け璐ワ紒</li><li>'+data.result_msg+'</li></ul><div class="mt15 mb20"><a href="index.php" class="popbtn">鍥炲埌棣栭〉</a><input class="popbtn popbox-close" type="button" value="鏌ョ湅绮捐嫳鍒�" /></div>';
                $("#pay_log").html(html);
				shadboxFun('pay');
        		$("#pay").show();
            }
			if(data.result_code == 0){	
							$("#tj_num").hide();
				var html = '<div class="jf_tit fontS18">璐拱澶辫触</div><ul class="lineH24 mt15"><li>'+data.result_msg+'</li></ul><div class="mt15 mb20"><a href="index.php" class="popbtn">鍥炲埌棣栭〉</a><input class="popbtn popbox-close" type="button" value="鏌ョ湅绮捐嫳鍒�" /></div>';
                $("#pay_log").html(html);
				shadboxFun('pay');
        		$("#pay").show();
			}
        },'json')
	
}
function dui_vip(id){
		
	if(id){
		$.post("my.php?act=buy_vip",{id:id},function(data){
            if(data.result_code == 3){
				$("#tj_num").hide();
				$("body").append(data.result_msg);
				
                //$("#work_city").show();
            }
			if(data.result_code == 0){
				$("#tj_num").hide();
				var html = '<div class="jf_tit fontS18">鍏戞崲澶辫触</div><ul class="lineH24 mt15"><li>'+data.result_msg+'</li></ul><div class="mt15 mb20"><a href="index.php" class="popbtn">鍥炲埌棣栭〉</a><input class="popbtn popbox-close" type="button" value="鏌ョ湅绮捐嫳鍒�" /></div>';
                $("#pay_log").html(html);
				shadboxFun('pay');
        		$("#pay").show();
            }
			if(data.result_code == 1){
				$("#tj_num").hide();
				var html = '<div class="jf_tit fontS18">'+data.result_msg+'</div><ul class="lineH24 mt15"><li>鎭枩鎮紝鍏戞崲鎴愬姛锛�</li><<li>鎮ㄧ殑鍓╀綑鏈夋晥鍏艰亴娆℃暟涓�'+data.nums+'娆°€�</li><li>璧跺揩鍘诲仛鍏艰亴鍚</li></ul><div class="mt15 mb20"><a href="index.php" class="popbtn">鍥炲埌棣栭〉</a><input class="popbtn popbox-close" type="button" value="鏌ョ湅绮捐嫳鍒�" /></div>';
                $("#pay_log").html(html);
				shadboxFun('pay');
        		$("#pay").show();
            }
			if(data.result_code == 2){
				$("#tj_num").hide();
				var html = '<div class="jf_tit fontS18">'+data.result_msg+'</div><ul class="lineH24 mt15"><li>闈炲父閬楁喚锛岃喘鍗栧け璐ワ紒</li><li>鎮ㄥ彲閫€鍑哄悗缁х画璐崠</li></ul><div class="mt15 mb20"><a href="index.php" class="popbtn">鍥炲埌棣栭〉</a><input class="popbtn popbox-close" type="button" value="鏌ョ湅绮捐嫳鍒�" /></div>';
                $("#pay_log").html(html);
				shadboxFun('pay');
        		$("#pay").show();
            }
        },'json')
	}
}
function IdentityCodeValid(code) { 
            var city={11:"鍖椾含",12:"澶╂触",13:"娌冲寳",14:"灞辫タ",15:"鍐呰挋鍙�",21:"杈藉畞",22:"鍚夋灄",23:"榛戦緳姹� ",31:"涓婃捣",32:"姹熻嫃",33:"娴欐睙",34:"瀹夊窘",35:"绂忓缓",36:"姹熻タ",37:"灞变笢",41:"娌冲崡",42:"婀栧寳 ",43:"婀栧崡",44:"骞夸笢",45:"骞胯タ",46:"娴峰崡",50:"閲嶅簡",51:"鍥涘窛",52:"璐靛窞",53:"浜戝崡",54:"瑗胯棌 ",61:"闄曡タ",62:"鐢樿們",63:"闈掓捣",64:"瀹佸",65:"鏂扮枂",71:"鍙版咕",81:"棣欐腐",82:"婢抽棬",91:"鍥藉 "};
            var tip = "";
            var pass= true;
            
            if(!code || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[12])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(code)){
                tip = "韬唤璇佸彿鏍煎紡閿欒";
                pass = false;
				return false;
            }
            
           else if(!city[code.substr(0,2)]){
                tip = "鍦板潃缂栫爜閿欒";
                pass = false;
				return false;
            }
            else{
                //18浣嶈韩浠借瘉闇€瑕侀獙璇佹渶鍚庝竴浣嶆牎楠屼綅
                if(code.length == 18){
                    code = code.split('');
                    //鈭�(ai脳Wi)(mod 11)
                    //鍔犳潈鍥犲瓙
                    var factor = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2 ];
                    //鏍￠獙浣�
                    var parity = [ 1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2 ];
                    var sum = 0;
                    var ai = 0;
                    var wi = 0;
                    for (var i = 0; i < 17; i++)
                    {
                        ai = code[i];
                        wi = factor[i];
                        sum += ai * wi;
                    }
                    var last = parity[sum % 11];
                    if(parity[sum % 11] != code[17]){
                        tip = "鏍￠獙浣嶉敊璇�";
                        pass =false;
						return false;
                    }
                }
            }
            if(!pass) alert(tip);
            return pass;
        }



//===================鏀粯瀹濈敓娲诲彿 鏂板鍑芥暟===============================

//鑾峰彇楠岃瘉鐮�
function get_code(obj,needalipay){
    var alipay = $("#alipay").val();
    var tel = $("#mobile").val();
    mobile = /^(13|14|15|16|17|18|19)[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/;
    if(!mobile.test(tel)){
        alert('璇峰～鍐欐纭殑鎵嬫満鍙�');
        return false;
    }

    if(!alipay && needalipay == 1){
        alert('绯荤粺绻佸繖璇风◢鍚庡啀璇�');
        return false;
    }
    
    $(obj).attr("disabled", true);

    $.post('login.php',{'act':'get_captcha','mobile':tel,'alipay_id':alipay},function(data){
        if(data.result_code == 1){
            $.post('login.php',{'act':'send_mobile_auth','mobile':tel,'alipay_id':alipay,'code':data.code},function(res){
                if(res.sta == 1){
                    var count = 60;
                    var countdown = setInterval(CountDown, 1000);
                    function CountDown() {
                        $(obj).val(count + "绉掑悗閲嶆柊鑾峰彇");
                        if (count == 0) {
                            $(obj).val("閲嶆柊鑾峰彇").removeAttr("disabled");
                            clearInterval(countdown);
                        }
                        count--;
                    }
                }else{
                    $(obj).removeAttr("disabled");
                    alert(res.msg);
                }
            },'json') 
        }else{
            $(obj).removeAttr("disabled");
            alert(data.result_msg);
        }
    },'json')
}

//缁戝畾鏀粯瀹濈瓑
function binding_other(redirect){
    var alipay = $("#alipay").val();
    var tel = $("#mobile").val();
    var code = $("#code").val();

    var tel = $("#mobile").val();
    mobile = /^(13|14|15|16|17|18|19)[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/;
    if(!mobile.test(tel)){
        alert('璇峰～鍐欐纭殑鎵嬫満鍙�');
        return false;
    }

    if(!code){
        alert('璇峰～鍐欓獙璇佺爜');
        return false;
    }

    if(!alipay){
        alert('绯荤粺绻佸繖璇风◢鍚庡啀璇�');
        return false;
    }

     $.post('login.php',{'act':'binding_other','mobile':tel,'alipay_id':alipay,'code':code},function(data){
         alert(data.msg);
         if(data.sta == 1){
            window.location.href = redirect;
         }
     },'json')
}