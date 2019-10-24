$(document).ready(function(){
	$('#job_search').click(function(){
		document.forms['frm'].submit();
	});
	//浼佷笟璁よ瘉
	$('#auth_button').click(function(){
		var uploadedfile = $("#uploadedfile");
		var license = $("#license").val();
		var certificate_img = $("#certificate_img");

		if(uploadedfile == '' && certificate_img == ''){
			alert('璇蜂笂浼犺惀涓氭墽鐓э紒');
			return false;
		}

		if(license == ''){
			alert('璇峰～鍐欐墽鐓х紪鐮侊紒');
			return false;
		}else{
			license_role =  /^[A-Z\d]{15,18}$/;
			if(!license_role.test(license)){
				alert('璇锋纭～鍐欐墽鐓х紪鐮�!');
				return false;
			}
		}

		document.forms['frm'].submit();

	});
	//浼佷笟淇℃伅
	$('#data_button').click(function(){
		var companyname = $('#companyname').val();
		var contact = $('#contact').val();
		var telephone = $('#telephone').val();
		var line_telephone = $('#line_telephone').val();
        var company_qq = $('#company_qq').val();
        var email=$("#company_email").val();
		var address = $('#address').val();
        var utype=$("#utype").val();

		if(companyname == ""){
			alert('璇峰～鍐欎紒涓氱殑鍚嶇О锛�');
			return false;
		}
		
		if(contact == ""){
			alert('璇峰～鍐欒礋璐ｄ汉鐨勫鍚�');
			return false;
		}
		
		if(telephone == ""){
			alert('璇峰～鍐欒礋璐ｄ汉鐨勬墜鏈哄彿');
			return false;
		}else{
			mobile = /^(13|14|15|16|17|18|19)[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/;
			if(!mobile.test(telephone)){
				alert('璇锋纭～鍐欒礋璐ｄ汉鐨勬墜鏈哄彿');
				return false;
			}
		}

                
        /*emails= /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if(email!="" && !emails.test(email)){
            alert("閭鏍煎紡涓嶆纭�");return false;
        }else if(email == ''){
            alert('璇峰～鍐欓偖绠�'); return false;
        
        }*/

		/*if(line_telephone == ""){
			alert('璇峰～鍐欎紒涓氱殑鍥哄畾鐢佃瘽');
			return false;
		}else if(line_telephone.length<7){
			alert('璇锋纭～鍐欎紒涓氱殑鍥哄畾鐢佃瘽');
			return false;
		}else{
			tel = /^[0-9]*[\-]*[0-9]*$/;
			if(!tel.test(line_telephone)){
				alert('璇锋纭～鍐欎紒涓氱殑鍥哄畾鐢佃瘽');
				return false;
			}
		}*/
        /*var reg=/^\d{5,10}$/;
        if(company_qq == "0"||company_qq==''){
            alert('璇峰～鍐欎紒涓歈Q');
            return false;
        }else if(!reg.test(company_qq)){
            alert('璇峰～鍐欐纭殑QQ');
            return false;
        }*/
		if(address == ""){
			alert('璇峰～鍐欎紒涓氬湴鍧€');
			return false;
		}

		document.forms['frm'].submit();


	});

	//閲嶆柊缁戝畾鐢ㄦ埛鍚�
	$('#reset_username_button').click(function(){
		var username = $('#username');
		var auth = $('#auth');
		var new_mobile = $('#new_mobile');

		mobile = /^(13|14|15|16|17|18|19)[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/;

		if(username == ""){
			alert('璇峰～鍐欏師璐﹀彿');
			return false;
		}else if((!mobile.test(username))){
			alert('璇锋纭～鍐欏師璐﹀彿');
			return false;
		}

		if(auth == ""){
			alert('璇峰～鍐欓獙璇佺爜');
			return false;
		}

		if(new_mobile == ""){
			alert('璇峰～鍐欐柊璐﹀彿');
			return false;
		}else if((!mobile.test(new_mobile))){
			alert('璇锋纭～鍐欐柊璐﹀彿');
			return false;
		}else if(username==new_mobile){
			alert('鏂拌处鍙蜂笌鏃ц处鍙蜂笉鑳界浉鍚�');
			return false;
		}

		document.forms['frm'].submit();

	});
	//閲嶈瀵嗙爜
	$('#reset_pwd_button').click(function(){
		var oldpwd = $('#oldpwd').val();
		var newpwd = $('#newpwd').val();
		var renewpwd = $('#renewpwd').val();

		if(oldpwd == ""){
			alert('璇峰～鍐欐棫瀵嗙爜');
			return false;
		}
		
		if(newpwd == ""){
			alert('璇峰～鍐欐柊瀵嗙爜');
			return false;
		}else if(oldpwd == newpwd){
			alert('鏂版棫瀵嗙爜涓嶈兘涓€鏍凤紝璇烽噸鏂板～鍐欐柊瀵嗙爜');
			return false;
		}
		
		if(renewpwd == ""){
			alert('璇峰～鍐欑‘璁ゅ瘑鐮�');
			return false;
		}else if(newpwd != renewpwd){
			alert('鏂板瘑鐮佷笌纭瀵嗙爜涓嶄竴鑷�');
			return false;
		}


		document.forms['frm'].submit();
	});
	//閲嶇疆瀵嗙爜鈥斺€斾釜浜� pc 鐐瑰嚮
	$('#update_password_button').click(function(){
		var oldpwd = $('#oldpassword').val();
		var newpwd = $('#password').val();
		var renewpwd = $('#password1').val();
        var type = $("#type").val();

		if(oldpwd == ""){
			alert('璇峰～鍐欐棫瀵嗙爜');
			return false;
		}
		
		if(newpwd == ""){
			alert('璇峰～鍐欐柊瀵嗙爜');
			return false;
		}else if(oldpwd == newpwd){
			alert('鏂版棫瀵嗙爜涓嶈兘涓€鏍凤紝璇烽噸鏂板～鍐欐柊瀵嗙爜');
			return false;
		}
		
		if(renewpwd == ""){
			alert('璇峰～鍐欑‘璁ゅ瘑鐮�');
			return false;
		}else if(newpwd != renewpwd){
			alert('鏂板瘑鐮佷笌纭瀵嗙爜涓嶄竴鑷�');
			return false;
		}

        if(type == 'new'){
            document.forms['frm1'].submit();
        }else{
		    document.forms['frm'].submit();
        }
	});
	//淇敼鏀粯瀵嗙爜鈥斺€斾釜浜� pc 鐐瑰嚮
	$('#update_pay_psd_button').click(function(){
		var oldpwd = $('#o_pay_password').val();
		var newpwd = $('#pay_password').val();
		var renewpwd = $('#pay_password1').val();
        var type = $("#type").val();

		if(oldpwd == ""){
			alert('璇峰～鍐欐棫鏀粯瀵嗙爜');
			return false;
		}
		
		if(newpwd == ""){
			alert('璇峰～鍐欐柊鏀粯瀵嗙爜');
			return false;
		}else if(oldpwd == newpwd){
			alert('鏂版棫鏀粯瀵嗙爜涓嶈兘涓€鏍凤紝璇烽噸鏂板～鍐欐柊鏀粯瀵嗙爜');
			return false;
		}else{
			var pattern = /^\d{6}$/;  
			if(!pattern.test(newpwd)){
				alert('瀵嗙爜涓�6浣嶆暟瀛�');
				return false;
			} 
		}
		
		if(renewpwd == ""){
			alert('璇峰～鍐欑‘璁ゆ敮浠樺瘑鐮�');
			return false;
		}else if(newpwd != renewpwd){
			alert('鏂版敮浠樺瘑鐮佷笌纭鏀粯瀵嗙爜涓嶄竴鑷�');
			return false;
		}else{
			var pattern = /^\d{6}$/;  
			if(!pattern.test(renewpwd)){
				alert('瀵嗙爜涓�6浣嶆暟瀛�');
				return false;
			} 
		}
		$('#frm2').submit();
		
		
	});
	//鎵惧洖鏀粯瀵嗙爜鈥斺€斾釜浜� pc 鐐瑰嚮
	$('#set_psd_button').click(function(){
		
		var newpwd = $('#pay_password').val();
		var renewpwd = $('#pay_password1').val();
        var equip = $("#equip").val();
        var auth = $("#code").val();
		
		if(newpwd == ""){
			alert('璇峰～鍐欐柊鏀粯瀵嗙爜');
			return false;
		}else{
			var pattern = /^\d{6}$/;  
			if(!pattern.test(newpwd)){
				alert('瀵嗙爜涓�6浣嶆暟瀛�');
				return false;
			} 
		}
		if(renewpwd == ""){
			alert('璇峰～鍐欑‘璁ゆ敮浠樺瘑鐮�');
			return false;
		}else if(newpwd != renewpwd){
			alert('鏂版敮浠樺瘑鐮佷笌纭鏀粯瀵嗙爜涓嶄竴鑷�');
			return false;
		}else{
			var pattern = /^\d{6}$/; 
			if(!pattern.test(renewpwd)){
				alert('瀵嗙爜涓�6浣嶆暟瀛�');
				return false;
			} 
		}
        if(auth == ''){
            alert('璇峰～鍐欐墜鏈洪獙璇佺爜');
            return false;
        }
        if(equip == 'wx'){
            $.post('my.php',{'act':'save_pay_password','pay_password':newpwd,'pay_password1':renewpwd,'auth':auth,'equip':equip},function(data){
                alert(data[1]); 
                if(data[0] == 1){
                    window.location.href="my.php?equip=wx&act=withdrew";
                }
            },'json') 
        
        }else{
		    $('#frm1').submit();
        }
		
	});
	//鎵惧洖鏀粯瀵嗙爜鈥斺€斾釜浜� pc 鐐瑰嚮
	$('#set_password_button').click(function(){
		var newpwd = $('#new_pay_password').val();
		var renewpwd = $('#new_pay_password1').val();
		
		if(newpwd == ""){
			alert('璇峰～鍐欐柊鏀粯瀵嗙爜');
			return false;
		}else{			
			var pattern = /^\d{6}$/; 
			if(!pattern.test(newpwd)){
				alert('瀵嗙爜涓�6浣嶆暟瀛�');
				return false;
			} 
		}
		if(renewpwd == ""){
			alert('璇峰～鍐欑‘璁ゆ敮浠樺瘑鐮�');
			return false;
		}else if(newpwd != renewpwd){
			alert('鏂版敮浠樺瘑鐮佷笌纭鏀粯瀵嗙爜涓嶄竴鑷�');
			return false;
		}else{
			var pattern = /^\d{6}$/; 
			if(!pattern.test(renewpwd)){
				alert('瀵嗙爜涓�6浣嶆暟瀛�');
				return false;
			} 
		}
		$('#frm3').submit();
		
	});
	//鍒楄〃椤电Щ闄や紒涓氫汉鎵嶅簱
	$('#delete_pool_list').click(function(){
		var del_id =  getCheckboxValue('uid');
		if(del_id == ''){
			alert('鏈€夋嫨瑕佺Щ闄ょ殑浜烘墠');
			return false;
		}else{
			if(confirm('纭畾瑕佸皢閫変腑鐨勪汉鎵嶄粠浼佷笟浜烘墠搴撲腑绉婚櫎锛�')){
				var ajax_url = "company.php?act=company_pool_do&state=2&uids="+del_id+"&t="+new Date().getTime();

				$.ajax({
					url: ajax_url,
					timeout: 2000,
					type: "POST",
					dataType: "html",
					error: function(){
						alert('绉婚櫎鎿嶄綔澶辫触锛侊紒锛�');
					},
					success:function(res){
						/*del_id_arr = del_id.split(",");
						for(var i=0;i<del_id_arr.length;i++){
							$('#checkbox_'+del_id_arr[i]).attr('checked',false);
							$('#li_'+del_id_arr[i]).slideUp();
						}*/
                        alert(res);
						window.location.reload();
					}
				});
			}
			
		}
	});
        //閭€璇峰伐浣�
    $("#yaoqing_job").click(function(){
        var uids =  getCheckboxValue('uid');//閭€璇蜂汉id
        var jobs_id = $("input[name='yq_job']:checked").val();//鑱屼綅id

        //var company_uid=$("#uids").val();//鐧婚檰浜篿d
        var message_id = $("input[name='message_id']:checked").val();
        var invite_type = getCheckboxValue('invite_type');
        var rule = /^2{1}$/;
        var review = 0;//榛樿涓嶇敤閫夋嫨绠€鍘嗗椁�
        $("input['name=uid']:checked").each(function(){
            if($(this).next('input').val() == 0){
                review = 1;//闇€瑕佷娇鐢ㄧ畝鍘嗗椁� 
                return false;
            }
        })

        if(uids == ''){
            alert('鏈€夋嫨瑕侀個璇风殑浜烘墠');
            return false;
        }else if(rule.test(invite_type) && !message_id){
            alert('璇烽€夋嫨姝ｇ‘鐨勯個璇锋柟寮�');
            return false;
        }else if(jobs_id == ''){
            alert('璇烽€夋嫨闇€瑕侀個璇风殑宸ヤ綔');
            return false;
        }else{
            if(review == 1){
                var review_id = $("input[name='review_id']:checked").val();//鏌ョ湅绠€鍘唅d
                if(!review_id){
                    alert('璇烽€夋嫨绠€鍘嗗椁�');
                    return false;
                } 
            }
            var ajax_url = "company.php?act=company_pool_yq&jobs_id="+jobs_id+"&uids="+uids+"&invite_type="+invite_type+"&message_id="+message_id+"&review_id="+review_id+"&t="+new Date().getTime();
            $.ajax({
                url: ajax_url,
                //timeout: 20000,
                type: "POST",
                dataType: "json",
                error: function(){
                    alert('閭€璇峰け璐ワ紒锛侊紒');
                },
                success:function(re){
                    alert(re.result_msg);
                    /*del_id_arr = del_id.split(",");
                      for(var i=0;i<del_id_arr.length;i++){
                      $('#checkbox_'+del_id_arr[i]).attr('checked',false);
                      $('#li_'+del_id_arr[i]).slideUp();
                      }*/
                    if(re.result_code == 1){ 
                        window.location.reload();
                    }
                }
            });
        }
    });

	//鍒楄〃椤靛姞鍏ヤ紒涓氫汉鎵嶅簱(鍏虫敞鎴戠殑)
	$('#add_pool_list').click(function(){
		var add_id =  getCheckboxValue('uid');
		if(add_id == ''){
			alert('璇烽€夋嫨瑕佸姞鍏ヤ汉鎵嶅簱鐨勪汉鎵�');
			return false;
		}else{
			if(confirm('纭畾瑕佸皢閫変腑鐨勪汉鎵嶅姞鍏ヤ紒涓氫汉鎵嶅簱涓紵')){
				var ajax_url = "company.php?act=company_pool_do&state=1&uids="+add_id+"&t="+new Date().getTime();

				$.ajax({
					url: ajax_url,
					timeout: 2000,
					type: "POST",
					dataType: "html",
					error: function(){
						alert('绉婚櫎鎿嶄綔澶辫触锛侊紒锛�');
					},
					success:function(){
						window.location.reload();
					}
				});
			}
			
		}
	});

	//绉婚櫎浜烘墠搴�
	$('#delete_pool_info').click(function(){
		var uid = $('#uid');
		if(confirm('纭畾瑕佸皢閫変腑鐨勪汉鎵嶄粠浼佷笟浜烘墠搴撲腑绉婚櫎锛�')){
			var ajax_url = "company.php?act=company_pool_do&state=2&uids="+uid+"&t="+new Date().getTime();

			$.ajax({
				url: ajax_url,
				timeout: 2000,
				type: "POST",
				dataType: "html",
				error: function(){
					alert('绉婚櫎鎿嶄綔澶辫触锛侊紒锛�');
				},
				success:function(){
					$('#delete_pool_info').hide();
					$('#add_pool_info').show();
				}
			});
		}
		
	});
	//鍔犲叆浜烘墠搴�
	$('#add_pool_info').click(function(){
		var uid = $('#uid');
		if(confirm('纭畾瑕佸皢閫変腑鐨勪汉鎵嶅姞鍏ヤ紒涓氫汉鎵嶅簱锛�')){
			var ajax_url = "company.php?act=company_pool_do&state=1&uids="+uid+"&t="+new Date().getTime();

			$.ajax({
				url: ajax_url,
				timeout: 2000,
				type: "POST",
				dataType: "html",
				error: function(){
					alert('绉婚櫎鎿嶄綔澶辫触锛侊紒锛�');
				},
				success:function(){
					$('#delete_pool_info').show();
					$('#add_pool_info').hide();
				}
			});
		}
	});
	//閫夋嫨绌洪棽鏃堕棿
	$(".freetime_button").click(function(){
		var freetime_value = $('#freetime').val();
		var freetime_arr = freetime_value.split(",");

		var position = $(this).attr('free');

		if(freetime_arr[position]==0 || freetime_arr[position]==null){
			$(this).addClass('on');
			freetime_arr[position]=1;
		}else{
			$(this).removeClass('on');
			freetime_arr[position]=0;
		}

		freetime_value = freetime_arr.join(',');
		$('#freetime').val(freetime_value);
	});
	//鑱斿姩宸ヤ綔甯�--company
	$("#province_search").change(function(){
		var pid = $(this).val();
		var ajax_url = "company.php?act=get_area_list&type=city&pid="+pid+"&t="+new Date().getTime();

		$.ajax({
			url: ajax_url,
			//timeout: 5000,
			type: "POST",
			dataType: "html",
			error: function(){
				alert('鑱斿姩澶辫触锛侊紒锛�');
			},
			success:function(rs){
				$('#city_search').html(rs);
				$('#county_search').html("<option value=\"\">宸ヤ綔鍦板尯</option>\n");
			}
		});
		

	});
	//鑱斿姩宸ヤ綔鍦板尯----company
	$("#city_search").change(function(){
		var pid = $(this).val();
		var ajax_url = "company.php?act=get_area_list&type=county&pid="+pid+"&t="+new Date().getTime();

		$.ajax({
			url: ajax_url,
			//timeout: 5000,
			type: "POST",
			dataType: "html",
			error: function(){
				alert('鑱斿姩澶辫触锛侊紒锛�');
			},
			success:function(rs){
				$('#county_search').html(rs);
			}
		});
	});
	//鑱斿姩宸ヤ綔甯�--my
	$("#province_my").change(function(){
		var pid = $(this).val();
		var ajax_url = "my.php?act=get_area_list&type=city&pid="+pid+"&t="+new Date().getTime();

		$.ajax({
			url: ajax_url,
			//timeout: 5000,
			type: "POST",
			dataType: "html",
			error: function(){
				alert('鑱斿姩澶辫触锛侊紒锛�');
			},
			success:function(rs){
				$('#city_my').html(rs);
				$('#county_my').html("<option value=\"\">閫夋嫨鍦板尯</option>\n");
			}
		});
		

	});
	//鑱斿姩宸ヤ綔鍦板尯----my
	$("#city_my").change(function(){
		var pid = $(this).val();
		var ajax_url = "my.php?act=get_area_list&type=county&pid="+pid+"&t="+new Date().getTime();

		$.ajax({
			url: ajax_url,
			timeout: 5000,
			type: "POST",
			dataType: "html",
			error: function(){
				alert('鑱斿姩澶辫触锛侊紒锛�');
			},
			success:function(rs){
				$('#county_my').html(rs);
			}
		});
	});
	
	//鎼滅储绠€鍘嗛噷
	$("#resume_search").click(function(){
		document.forms['frm'].submit();
	});

	//娣诲姞鏀粯瀹�
	$("#add_alipay").click(function(){
		alert('鏀粯瀹濆凡鏆傚仠浣跨敤,璇锋坊鍔犻摱琛屽崱');return false;
		var fullname = $('#fullname_alipay').val();
		var alipay = $('#alipay').val();

		if(fullname == ""){
			alert('璇峰～鍐欐敮浠樺疂鍚嶇О');
			return false;
		}
		
		if(alipay == ""){
			alert('璇峰～鍐欐敮浠樺疂璐﹀彿');
			return false;
		}

        var type = $("#type").val();
        if(type == 'new'){
            var account_type = $("#account_type").val();
            var account_id = $("#account_id").val();
            $.get('my.php?act=account_add',{account_type:account_type,account_id:account_id,fullname:fullname,alipay:alipay,'type':'ajax'},function(data){
                if(data == 1){
                    window.location.reload();
                }
                
            })
        }else{
		    document.forms['alipay_frm'].submit();
        }
	});
	//娣诲姞閾惰
	$("#add_blank").click(function(){
		var fullname = $('#fullname').val();
		var card_namber = $('#card_namber').val();
		var bank = $('#bank').val();
        var branch = $('#branch').val();
        var province = $('#provincep').val();
        var city = $('#cityc').val();



		if(fullname == ""){
			alert('璇峰～鍐欏紑鎴蜂汉濮撳悕');
			return false;
		}
        re = /^[\u4E00-\u9FA5]+$/;
        if(!re.test(fullname)){
            alert('濮撳悕濉啓閿欒');
            return false;
        }

        if(!province){
            alert('璇峰～鍐欏紑鎴风渷浠�');
            return false;
        }
        if(!city){
            alert('璇峰～鍐欏紑鎴峰煄甯�');
            return false;
        }

		if(card_namber == ""){
			alert('璇峰～鍐欓摱琛屽崱鍙�');
			return false;
		}else{
			card_namber_role = /^[1-9][0-9]{15,19}$/;
			if(!card_namber_role.test(card_namber)){
				alert('璇锋纭～鍐欓摱琛屽崱鍙�!');
				return false;
			}
		}

		if(bank == ""){
			alert('璇烽€夋嫨寮€鎴疯');
			return false;
		}
        
        var type = $("#type").val();
        if(type == 'new'){
            var account_type = $("#account_type").val();
            var account_id = $("#account_id").val();
            $.get('my.php?act=account_add',{account_type:account_type,account_id:account_id,card_namber:card_namber,fullname:fullname,bank:bank,'branck':branch,'province':province,'city':city,'type':'ajax'},function(data){
                if(data == 1){
                    window.location.reload();
                }
            })
        }else{
            document.forms['blank_frm'].submit();
        }
 
		//document.forms['blank_frm'].submit();
	});

    
   
	//wx鎻愮幇
	$("#withdrew_button_wx").click(function(){
		var point = $("#point").val();
		var money = $("#money").val();
		var account = $("#account").val();
		var yanzhengma = $("#yanzhengma").val();
		var auth = $("#auth").val();
		var pwd = $("#pwd").val();

		if(money == ""){
			alert('璇峰～鍐欐彁鐜伴噾棰�');
			return false;
		}else if(parseFloat(point) < parseFloat(money)){
			alert("鎻愮幇閲戦涓嶈兘澶т簬璐︽埛浣欓");
			return false;
		}else if(money < 10){
			alert("鎻愮幇閲戦涓嶈兘灏忎簬10鍏�");
			return false;		
		}else if(money > 10000){
			alert("鎻愮幇閲戦涓嶈兘澶т簬10000鍏�");
			return false;		
		}

		
		if(account == ""){
			alert("璇烽€夋嫨鎻愮幇璐︽埛");
			return false;
		}
		if(yanzhengma == ""){
			alert("璇峰～鍐欏浘鐗囬獙璇佺爜");
			return false;
		}
		if(auth == ""){
			alert("璇峰～鍐欓獙璇佺爜");
			return false;
		}
		var mypretime = $('#mypretime').val();
		var timestamp = Date.parse(new Date());
		var mysec = timestamp/1000;
	
		if((mysec-mypretime)>2)
		//600鍙槸涓€涓椂闂村€硷紝灏辨槸5鍒嗛挓鍐呯姝㈤噸澶嶆彁浜わ紝鍊奸殢浣犻珮鍏磋mypretime
		{
			 $('#mypretime').val(mysec);
			if(money == ""){
				alert('璇峰～鍐欐彁鐜伴噾棰�');
				return false;
			}else if(parseFloat(point) < parseFloat(money)){
				alert("鎻愮幇閲戦涓嶈兘澶т簬璐︽埛浣欓");
				return false;
			}else if(money < 10){
				alert("鎻愮幇閲戦涓嶈兘灏忎簬10鍏�");
				return false;		
			}
			
			if(account == ""){
				alert("璇烽€夋嫨鎻愮幇璐︽埛");
				return false;
			}
			if(yanzhengma == ""){
				alert("璇峰～鍐欏浘鐗囬獙璇佺爜");
				return false;
			}
			if(auth == ""){
				alert("璇峰～鍐欓獙鐮�");
				return false;
			}
			if(pwd == ""){
				alert("璇峰～鍐欐敮浠樺瘑鐮�");
				return false;
			}

            $("#withdrew_button_wx").attr('disabled',true);	

			var ajax_url = "my.php?act=withdrew_do&equip=wx&money="+money+"&account="+account+"&auth="+auth+"&yanzhengma="+yanzhengma+"&pwd="+pwd+"&t="+new Date().getTime();
			$.ajax({
				url: ajax_url,
				timeout: 8000,
				type: "POST",
				dataType: "json",
				error: function(){
                        $("#withdrew_button_wx").attr('disabled',false);
						alert('鎿嶄綔澶辫触锛侊紒锛�');
				},
				success:function(rs){
                    $("#withdrew_button_wx").attr('disabled',false);
					if(rs.result_code==1){
						window.location.href=rs.result_msg; 
					}else{
						alert(rs.result_msg);
					}
				}
			});
		}else{
            alert(' 鎸変竴娆″氨澶熶簡锛岃鍕块噸澶嶆彁浜わ紒璇疯€愬績绛夊緟锛佽阿璋㈠悎浣滐紒');
            return false;
        }

	});
	$("#sign_person_list_search").click(function(){
		var keyword_search = $("#keyword_search").val();
		var keyword = $("#keyword").val();
		var jobid = $("#jobid").val();

		if(keyword_search != '杈撳叆濮撳悕鎵嬫満鍙风瓑鍏抽敭瀛楅€夋嫨浜烘墠杩涜鎼滅储'){
			var url = "company.php?act=sign_person_list&jobid="+jobid+"&keyword="+keyword_search;
			location.href=url;
		}else{
			if(keyword != ""){
				var url = "company.php?act=sign_person_list&jobid="+jobid;
				location.href=url;
			}
		}
		

	});
	$("#feedback_button").click(function(){
		var feedback = $("#feedback").val();
		if(feedback != ""){
			var ajax_url = "my.php?act=save_feedback&feedback="+feedback+"&t="+new Date().getTime();
			$.ajax({
				url: ajax_url,
				timeout: 2000,
				type: "POST",
				dataType: "json",
				error: function(){
					dialogShow('鎿嶄綔澶辫触锛侊紒锛�');
				},
				success:function(rs){
					if(rs[0]==1){
						$("#feedback").val('');
					}
					dialogShow(rs[1]);

				}
			});
		}
	});
	$("#bespoke_freetime_button").click(function(){
		var province = $("#province").val();
		var city = $("#city").val();
		var county = $("#county").val();
		var category = $("#category").val();
		var free_time = $("#freetime").val();
		var sex = $("#sex").val();
		location.href="index.php?equip=wx&act=bespoke&province="+province+"&city="+city+"&county="+county+"&category="+category+"&free_time="+free_time+"&sex="+sex;
	});
    //绠€鍘嗕腑鐨勭┖闂叉椂闂�
    $("#resume_freetime_button").click(function(){
        var free_time = $("#freetime").val();
        location.href="resume.php?equip=wx&act=edit&freetime="+free_time;
    });

	$("#school_button").click(function(){
		/*
		if($("#school_dialog").hasClass('show')){
			$("#school_dialog").show();
		}else{
			$("#school_dialog").dialog("show");
		}
		*/
		//alert('abb');
		$("#school_dialog").dialog("show");
		
	});
	$("#education_button").click(function(){
		$("#education_dialog").dialog("show");
	});
	$("#intention_button").click(function(){
		$("#intention_dialog").dialog("show");
	});
	$("#province_botton").click(function(){
		$("#province_dialog").dialog("show");
	});
	$("#edutime_button").click(function(){
		$("#edu_dialog").dialog("show");
	})
	$("#interview_delete_button").click(function(){
		var del_id = getCheckboxValue("interwiev_id");
		if(del_id == ""){
			alert("璇烽€夋嫨瑕佸垹闄ら個璇�");
		}else{
			var url = "my.php?act=del_company_interview&did="+del_id;
			location.href=url;
		}

		
	});
	$("#favorites_job_delete_button").click(function(){
		var del_id = getCheckboxValue("jobid");
		if(del_id == ""){
			alert("璇烽€夋嫨瑕佺Щ闄ょ殑鏀惰棌鑱屼綅");
		}else{
			var url = "my.php?act=del_favorites_jobs&jobsid="+del_id;
			location.href=url;
		}
	});
	$("#collect_company_delete_button").click(function(){
		var del_id = getCheckboxValue("cid");
		if(del_id == ""){
			alert("璇烽€夋嫨瑕佺Щ闄ょ殑鏀惰棌浼佷笟");
		}else{
			var url = "my.php?act=del_favorites_company&company_id="+del_id;
			location.href=url;
		}
	});
	$('#my_resume_button').click(function(){
		var equip = $('#equip').val();

		var fullname = $('#fullname').val();//
		var telephone = $('#telephone').val();//
		var email = $('#email').val();//
		var qq = $('#qq').val();//
		var sex = $('#sex').val();//
		var birthday = $('#birthday').val();//
		var province_my = $('#province_my').val();//
		var city_my = $('#city_my').val();//
		var intention_jobs = $('#intention_jobs').val();//
		var freetime = $('#freetime').val();//
        var card_id = $("#card_id").val();

		if(equip != 'wx'){
			var health = $('#health').val();
			var school = $('#school').val();
			var edutime = $('#edutime').val();
			var education = $('#education').val();
		}

		if(fullname == ""){
			if(equip == "wx"){
				dialogShow_('璇峰～鍐欏鍚�');
			}else{
				alert('璇峰～鍐欏鍚�');
			}
			return false;
		}else{
			var name_rule = /^[\u4E00-\u9FA5]{2,4}$/;
			if(!name_rule.test(fullname)){
				if(equip == "wx"){
					dialogShow_('濮撳悕鍙兘涓�2~4浣嶄腑鏂囧瓧绗�');
				}else{
					alert('濮撳悕鍙兘涓�2~4浣嶄腑鏂囧瓧绗�');
				}
				return false;
			}
		}

		if(telephone == ""){
			if(equip == "wx"){
		//		dialogShow_('璇峰～鍐欐墜鏈哄彿');
			}else{
		//		alert('璇峰～鍐欐墜鏈哄彿');
			}
		//	return false;
		}else{
			var mobile = /^(13|14|15|16|17|18|19)[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/;
			if(!mobile.test(telephone)){
				if(equip == "wx"){
		//			dialogShow_('璇锋纭～鍐欐墜鏈哄彿');
				}else{
		//			alert('璇锋纭～鍐欐墜鏈哄彿');
				}
		//		return false;
			}
		}

		if(email == ""){
			if(equip == "wx"){
				dialogShow_('璇峰～鍐欓偖绠卞湴鍧€');
			}else{
				alert('璇峰～鍐欓偖绠卞湴鍧€');
			}
			return false;
		}else{
			var  email_rule  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
			if(!email_rule.test(email)){
				if(equip == "wx"){
					dialogShow_('璇锋纭～鍐欓偖绠卞湴鍧€');
				}else{
					alert('璇锋纭～鍐欓偖绠卞湴鍧€');
				}
				return false;
			}
		}
		
		var card_rule = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
		if((card_id.length !=15 && card_id.length !=18) || !IdentityCodeValid(card_id)){
			if(equip == 'wx'){
				dialogShow_("璇峰～鍐欐纭殑韬唤璇佸彿锛�");
			}else{
				alert("璇峰～鍐欐纭殑韬唤璇佸彿锛�");
			}
			return false;
		}


		if(qq == ""){
			if(equip == "wx"){
				dialogShow_('璇峰～鍐橯Q鍙�');
			}else{
				alert('璇峰～鍐橯Q鍙�');
			}
			return false;
		}

		if(sex == ""){
			if(equip == "wx"){
				dialogShow_('璇烽€夋嫨鎬у埆');
			}else{
				alert('璇烽€夋嫨鎬у埆');
			}
			return false;
		}

		if(birthday == ""){
			if(equip == "wx"){
				dialogShow_('璇峰～鍐欏嚭鐢熸棩鏈�');
			}else{
				alert('璇峰～鍐欏嚭鐢熸棩鏈�');
			}
			return false;
		}

		if(province_my == ""){
			if(equip == "wx"){
				dialogShow_('璇烽€夋嫨鎵€鍦ㄧ渷浠�');
			}else{
				alert('璇烽€夋嫨鎵€鍦ㄧ渷浠�');
			}
			return false;
		}

		if(city_my == ""){
			if(equip == "wx"){
				dialogShow_('璇烽€夋嫨鎵€鍦ㄥ煄甯�');
			}else{
				alert('璇烽€夋嫨鎵€鍦ㄥ煄甯�');
			}
			return false;
		}

		if(intention_jobs == ""){
			if(equip == "wx"){
				dialogShow_('璇烽€夋嫨姹傝亴鎰忓悜');
			}else{
				alert('璇烽€夋嫨姹傝亴鎰忓悜');
			}
			return false;
		}

		if(freetime == "0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0"){
			if(equip == "wx"){
				dialogShow_('璇烽€夋嫨绌洪棽鏃堕棿');
			}else{
				alert('璇烽€夋嫨绌洪棽鏃堕棿');
			}
			return false;
		}
		
		if(equip != 'wx'){
			if(health == ""){
				alert("璇烽€夋嫨鏈夋棤鍋ュ悍璇�");
				return false;
			}
			
			if(school == ""){
				alert("璇烽€夋嫨鎵€鍦ㄩ櫌鏍�");
				return false;
			}

			if(edutime == ""){
				alert("璇烽€夋嫨鎵€鍏ュ鏃堕棿");
				return false;
			}

			if(education == ""){
				alert("璇烽€夋嫨鏈€楂樺鍘�");
				return false;
			}
		}
        
        var type = $("#type").val();
        if(type == 'new'){
            document.forms['frm1'].submit();
        }else{
		    document.forms['frm'].submit();
        }

	});
	$(".worktime_button").click(function(o){
		var time = $(this).attr('time');
		var workertime = $('#worktime').val();
		if($(this).hasClass('on')){
			$(this).removeClass('on');
			$('#worktime').val(workertime.replace(time+",",'').replace(time,''));
		}else{
			$(this).addClass('on');
			if(workertime != "" ){
				$('#worktime').val(workertime+""+time+",");
			}else{
				$('#worktime').val(time+",");
			}
			
		}

		
	});
	$(".worktime_button2").click(function(){
		alert('姝ゆ棩鏈熷凡閿欒繃鑷富鍙栨秷鎶ュ悕鏈轰細锛屽闇€鍙栨秷璇疯仈绯荤浉鍏宠礋璐ｄ汉');
		
	});
	//涓嬫灦
	$("#job_die").click(function(){
		if($(this).attr('id')=='job_die'){
			if(confirm("纭畾涓嬫灦璇ヨ亴浣嶄箞锛燂紵")){	
				var jobid = $(this).attr('jobid');
				var ajax_url = "company.php?act=job_die&jobid="+jobid+"&t="+new Date().getTime();

				$.ajax({
					url: ajax_url,
					timeout: 2000,
					type: "POST",
					dataType: "json",
					error: function(){
						alert('鎿嶄綔澶辫触锛侊紒锛�');
					},
					success:function(rs){
						alert(rs[1]);
						$("#job_die").html("宸蹭笅鏋�");
						$("#job_die").attr("id",'job_die_');
					}
				});
			}
		}

	});
	
});
//鑾峰彇checkbox鍊�
function getCheckboxValue(name){
	var value= "";
	var cbox = document.getElementsByName(name);

	for(var i=0;i<cbox.length;i++){
		if(cbox[i].checked == true){
			if(value != ""){
				value += ',';
			}
			value += cbox[i].value;
		}
	}

	return value;
}
function dialogShow(message){
	$("#dialog-info").html(message);
	$(".ui-dialog").dialog("show");
}
function dialogShow_(message){
	$("#dialog-info").html(message);
	$("#ui-dialog").dialog("show");
}
function selectItem(select_id,select_value,hidden_id,hidden_value){
	$('#'+hidden_id).val(hidden_value);
	$('#'+select_id).html(select_value);
	$('#fullbg').hide();
	$('.filterItem').hide();
	$('.nothing').hide();
	$('.st-arrow').hide();

	document.forms['frm'].submit();
}

function select_item(id,value,obj,immediately){
    if(obj != 0){
        $(obj).siblings().removeClass('cur');
        $(obj).addClass('cur');
    }

    if(id == 'nature' || id == 'is_holiday'){
        $("#is_holiday").val(0);
        $("#nature").val(0);
    }

    $("#"+id).val(value);
    if(id == 'is_commission' || id == 'jiaji' || id == 'wage' || id == 'safe'){
        if(!$(obj).is(':checked')){
            $("#"+id).val(0);
        }
    }
     
    if(immediately == 1){
        search_redirect('');
    }
}

function search_redirect(orderby){
    var val = '';
    $("input[name='search']").each(function(){
        val += '&'+$(this).attr('id')+'='+$(this).val();
    })
    var url = 'index.php?act=alipay_index&equip=wx'+val;
    if(orderby == 1){
        url += '&orderby='+orderby;
        ap.getLocation(function(res) {
            url += '&map_y='+res.latitude+'&map_x='+res.longitude; 
            window.location.href=url;
        })
    }else if(orderby == 2){
        url += '&orderby='+orderby;
    }
    window.location.href=url;
}

function order_by(obj,type){
    $(obj).siblings().removeClass('cur');
    $(obj).addClass('cur');
    search_redirect(type);
}

function DeleteUser(){
	var arr=document.getElementsByName("did");
	var a="";
	for(i=0;i<arr.length;i++){
		
		if(arr[i].checked){
			if (a==""){
				a +=arr[i].value;
			}else {
				a += ","+arr[i].value;
			}
		}
	}
	var ajax_url = "my.php?act=del_company_interview&equip=wx&did="+a+"&t="+new Date().getTime();
	$.ajax({
		url: ajax_url,
		timeout: 2000,
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
}
function del_message(){
	var arr=document.getElementsByName("message");
	var a="";
	for(i=0;i<arr.length;i++){
		
		if(arr[i].checked){
			if (a==""){
				a +=arr[i].value;
			}else {
				a += ","+arr[i].value;
			}
		}
	}
	var ajax_url = "my.php?act=del_message&equip=wx&message_ids="+a+"&t="+new Date().getTime();
	//document.write(ajax_url);
	$.ajax({
		url: ajax_url,
		timeout: 2000,
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
}
function complain(jobid,type){
	var reason = "";

	var ajax_url = "index.php?act=complain&jodib="+jobid+"&type="+type+"&t="+new Date().getTime();
	
	$.ajax({
		url: ajax_url,
		timeout: 2000,
		type: "POST",
		dataType: "json",
		error: function(){
			dialogShow('鎿嶄綔澶辫触锛侊紒锛�');
		},
		success:function(rs){
			//if(rs[0]==0){
				dialogShow(rs[1]);
			//}
		}
	});

}

function complain_alipay(jobid){
    var reason = $("input[name='reason']:checked").val();
	var content = $('#content').val();
	var ajax_url = "my.php?act=report&jodib="+jobid+"&reason="+reason+"&content="+content+"&t="+new Date().getTime();
    $.post('my.php',{'act':'report','jobid':jobid,'reason':reason,'content':content},function(data){
        alert(data); 
    })	
	
}
//鍒犻櫎鏀惰棌鐨勮亴浣�
function DeleteFavoritesJobs(){
	var jobsids=document.getElementsByName("jobsid");
	var a="";
	for(i=0;i<jobsids.length;i++){
		
		if(jobsids[i].checked){
			if (a==""){
				a +=jobsids[i].value;
			}else {
				a += ","+jobsids[i].value;
			}
		}
	}
	var ajax_url = "my.php?act=del_favorites_jobs&equip=wx&jobsid="+a+"&t="+new Date().getTime();
	$.ajax({
			url: ajax_url,
			timeout: 2000,
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
}
//鍒犻櫎鏀惰棌鐨勪紒涓�
function DeleteFavoritesCompany(){
	var company_id=document.getElementsByName("company_id");
	var a="";
	for(i=0;i<company_id.length;i++){
		
		if(company_id[i].checked){
			if (a==""){
				a +=company_id[i].value;
			}else {
				a += ","+company_id[i].value;
			}
		}
	}
	
	var ajax_url = "my.php?act=del_favorites_company&equip=wx&company_id="+a+"&t="+new Date().getTime();

	$.ajax({
		url: ajax_url,
		timeout: 2000,
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
}
function pwd(){
	var oldpassword = $("#oldpassword").val();
	var password = $("#password").val();
	var password1 = $("#password1").val();
	if(oldpassword == ''){
		dialogShow('璇疯緭鍏ユ棫瀵嗙爜锛�');
		 return false;
	}
	if(password == ''){
		dialogShow('璇疯緭鍏ユ柊瀵嗙爜');
		return false;
	}
	if(password1 == ''){
		dialogShow('璇疯緭鍏ョ‘璁ゅ瘑鐮�');
		return false;
	}
	if(password != password1){
		dialogShow('涓ゆ瀵嗙爜杈撳叆涓嶄竴鏍�');
		return false;
	}
	var ajax_url = "my.php?act=save_password&equip=wx&oldpassword="+oldpassword+"&password="+password+"&password1="+password1+"&t="+new Date().getTime();
	//document.write(ajax_url);

	$.ajax({
			url: ajax_url,
			timeout: 2000,
			type: "POST",
			dataType: "json",
			error: function(){
				dialogShow('鎿嶄綔澶辫触锛侊紒锛�');
			},
			success:function(rs){
					dialogShow(rs[1]);
			}
		});

}
//鎵嬫満绔敼鐗堝悗鐨勪慨鏀瑰瘑鐮�
function wxpwd(){
    var username = $("#username").val();
    var auth=$("#auth").val();
    var password = $("#password").val();
    var password1 = $("#password1").val();
    if(auth == ''){
        dialogShow('璇疯緭鍏ラ獙璇佺爜');
        return false;
    }
    if(password == ''){
        dialogShow('璇疯緭鍏ユ柊瀵嗙爜');
        return false;
    }
    if(password1 == ''){
        dialogShow('璇疯緭鍏ョ‘璁ゅ瘑鐮�');
        return false;
    }
    if(password != password1){
        dialogShow('涓ゆ瀵嗙爜杈撳叆涓嶄竴鏍�');
        return false;
    }
    var ajax_url = "my.php?act=wxsave_password&equip=wx&username="+username+"&auth="+auth+"&password="+password+"&password1="+password1+"&t="+new Date().getTime();
    //document.write(ajax_url);

    $.ajax({
        url: ajax_url,
        timeout: 2000,
        type: "POST",
        dataType: "json",
        error: function(){
            dialogShow('鎿嶄綔澶辫触锛侊紒锛�');
        },
        success:function(rs){
            if(rs[0]==1){
                dialogShow(rs[1]);
                setTimeout(function(){ location.href="login.php?equip=wx";},3000);
            }else{
                dialogShow(rs[1]);
            }


        }
    });

}
function bankfrom(){

	var fullname = $("#fullname").val();
	var card_namber = $("#card_namber").val();
	var branck = $("#branck").val();
	var bank = $("#bank").val();
    var province = $("#province").val();
    var city = $("#city").val();
	if(fullname == ''){
		dialogShow('璇疯緭鍏ュ紑鎴蜂汉濮撳悕锛�');
		 return false;
	}
	if(card_namber == ''){
		dialogShow('璇疯緭鍏ユ偍瑕佹坊鍔犵殑閾惰鍗″彿');
		return false;
	}
	/*if(branck == ''){
		dialogShow('璇疯緭鍏ュ紑鎴锋敮琛�');
		return false;
	}*/
	if(bank == ''){
		dialogShow('璇烽€夋嫨鎵€鍦ㄩ摱琛�');
		return false;
	}
	var ajax_url = "my.php?act=save_add_bank&equip=wx&fullname="+fullname+"&card_namber="+card_namber+"&branck="+branck+"&bank="+bank+"&t="+new Date().getTime()+"&province="+province+"&city="+city;
	//document.write(ajax_url);
	$.ajax({
			url: ajax_url,
			timeout: 2000,
			type: "POST",
			dataType: "json",
			error: function(){
				dialogShow('鎿嶄綔澶辫触锛侊紒锛�');
			},
			success:function(rs){
					if(rs[0]==2){
						location.href=rs[1];
					}else{
						dialogShow(rs[0]);
					}

			}
		});
}
function bankfrom_xg(){

	var fullname = $("#fullname").val();
	var card_namber = $("#card_namber").val();
	var branck = $("#branck").val();
	var bank = $("#bank").val();
	var bankid=$("#bankid").val();
    var province = $("#province").val();
    var city = $("#city").val();

	if(fullname == ''){
		dialogShow('璇疯緭鍏ュ紑鎴蜂汉濮撳悕锛�');
		 return false;
	}
	if(card_namber == ''){
		dialogShow('璇疯緭鍏ユ偍瑕佹坊鍔犵殑閾惰鍗″彿');
		return false;
	}
	/*if(branck == ''){
		dialogShow('璇疯緭鍏ュ紑鎴锋敮琛�');
		return false;
	}*/
	if(bank == ''){
		dialogShow('璇烽€夋嫨鎵€鍦ㄩ摱琛�');
		return false;
	}
	var ajax_url = "my.php?act=save_update_bank&equip=wx&fullname="+fullname+"&card_namber="+card_namber+"&branck="+branck+"&bank="+bank+"&bankid="+bankid+"&t="+new Date().getTime()+'&province='+province+'&city='+city;
	//document.write(ajax_url); return false;
	$.ajax({
			url: ajax_url,
			timeout: 2000,
			type: "POST",
			dataType: "json",
			error: function(){
				dialogShow('鎿嶄綔澶辫触锛侊紒锛�');
			},
			success:function(rs){
				if(rs[0]==2){
					location.href=rs[1];
				}else{
					dialogShow(rs[1]);
				}
			}
		});
}
function alipayfrom(){

	var alipay = $("#alipay").val();
	var fullname = $("#fullname").val();

	if(alipay == ''){
		dialogShow('璇疯緭鍏ユ敮浠樺疂璐﹀彿锛�');
		 return false;
	}
	if(fullname == ''){
		dialogShow('璇疯緭鍏ュ鍚�');
		return false;
	}

	var ajax_url = "my.php?act=save_aplipay&equip=wx&fullname="+fullname+"&alipay="+alipay+"&t="+new Date().getTime();
	//document.write(ajax_url);
	$.ajax({
			url: ajax_url,
			timeout: 2000,
			type: "POST",
			dataType: "json",
			error: function(){
				dialogShow('鎿嶄綔澶辫触锛侊紒锛�');
			},
			success:function(rs){
				if(rs[0]==2){
					location.href=rs[1];
				}else{
					dialogShow(rs[1]);
				}
					
			}
		});
}
function alipayfrom_xg(){

	var alipay = $("#alipay").val();
	var fullname = $("#fullname").val();
	var aid=$("#aid").val();

	if(alipay == ''){
		dialogShow('璇疯緭鍏ユ敮浠樺疂璐﹀彿锛�');
		return false;
	}
	if(fullname == ''){
		dialogShow('璇疯緭鍏ュ鍚�');
		return false;
	}

	var ajax_url = "my.php?act=save_aplipay_xg&equip=wx&aid="+aid+"&fullname="+fullname+"&alipay="+alipay+"&t="+new Date().getTime();
	//document.write(ajax_url);
	$.ajax({
		url: ajax_url,
		timeout: 2000,
		type: "POST",
		dataType: "json",
		error: function(){
			dialogShow('鎿嶄綔澶辫触锛侊紒锛�');
		},
		success:function(rs){
			if(rs[0]==2){
				location.href=rs[1];
			}else{
				dialogShow(rs[1]);
			}

		}
	});
}
function getbank(type,bankid){
	var branck = $("#branck").val();
	var card_namber = $("#card_namber").val();
	var fullname = $("#fullname").val();
    var province = $("#province").val();
    var city = $("#city").val();

    if(type){
        location.href="my.php?act=choose_bank&equip=wx&branck="+branck+"&card_namber="+card_namber+"&fullname="+fullname+"&province="+province+"&city="+city+"&bankid="+bankid;
    }else{
	    location.href="my.php?act=bank_list&equip=wx&branck="+branck+"&card_namber="+card_namber+"&fullname="+fullname+"&province="+province+"&city="+city;
    }
}

function getprovince(type,bankid){
	var branck = $("#branck").val();
	var card_namber = $("#card_namber").val();
	var fullname = $("#fullname").val();
    var bank = $("#bank").val();
    var city = $("#city").val();
    var bank_cn = $("#bank_cn").val();
    if(type){
        location.href="my.php?act=district_list&equip=wx&type="+type+"&bankid="+bankid+"&bank="+bank+"&card_namber="+card_namber+"&fullname="+fullname+"&branck="+branck; 
    }else{
	    location.href="my.php?act=district_list&equip=wx&branck="+branck+"&card_namber="+card_namber+"&fullname="+fullname+"&bank="+bank+"&bank_cn="+bank_cn;
    }
}

function getcity(type,bankid){
	var branck = $("#branck").val();
	var card_namber = $("#card_namber").val();
	var fullname = $("#fullname").val();
    var bank = $("#bank").val();
    var province = $("#province").val();
    var bank_cn = $("#bank_cn").val();
    if(type){
         location.href="my.php?act=district_list&equip=wx&type="+type+"&bankid="+bankid+"&bank="+bank+"&province="+province+"&card_namber="+card_namber+"&fullname="+fullname+"&branck="+branck;
    }else{
	    location.href="my.php?act=district_list&equip=wx&branck="+branck+"&card_namber="+card_namber+"&fullname="+fullname+"&bank="+bank+"&province="+province+"&bank_cn="+bank_cn+'&type'+type;
    }
}


//pc绔� 棣栭〉鐐瑰嚮鎼滅储
function pcJobIndexSearch(type,value){
	$('#'+type).val(value);
	document.forms['frm'].submit();
}
//pc绔€夋嫨鐢ㄦ埛绫诲埆
function selectUtype(type){
	if(type=='xs'){
		$('.xs').addClass("xs-on");
		$('.qy').removeClass("qy-on");
		$('#utype').val('1');
	}else{
		$('.xs').removeClass("xs-on");
		$('.qy').addClass("qy-on");
		$('#utype').val('2');
	}
}
//鍒楄〃椤靛垎椤佃烦杞�
function goPage(page){
	var page_num = page;
	if(page == "-1"){
		page_num = parseInt($('#page_num').val())-1;
	}
	if(page == "+1"){
		page_num = parseInt($('#page_num').val())+1;
	}

	var county= $('#county').val();
	var category = $('#category').val();
	var nature = $('#nature').val();
	var orderby = $('#orderby').val();

	var url= "index.php?act=job_list&page_num="+page_num+"&county="+county+"&category="+category+"&nature="+nature+"&orderby="+orderby;
	location.href=url;

}
//鎴戠殑鍏艰亴-宸叉姤鍚嶅垎椤佃烦杞�
function pc_audit0Page(page){
	var page_num = page;
	if(page == "-1"){
		page_num = parseInt($('#page_num').val())-1;
	}
	if(page == "+1"){
		page_num = parseInt($('#page_num').val())+1;
	}

	var url= "my.php?act=jobs_aduit0&pc=1&page_num="+page_num;
	location.href=url;

}
//鎴戠殑鍏艰亴-杩涜涓垎椤佃烦杞�
function pc_audit1Page(page){
	var page_num = page;
	if(page == "-1"){
		page_num = parseInt($('#page_num').val())-1;
	}
	if(page == "+1"){
		page_num = parseInt($('#page_num').val())+1;
	}

	var url= "my.php?act=jobs_aduit1&pc=1&page_num="+page_num;
	location.href=url;

}
//鎴戠殑鍏艰亴-鏈粯娆惧垎椤佃烦杞�
function pc_audit2Page(page){
	var page_num = page;
	if(page == "-1"){
		page_num = parseInt($('#page_num').val())-1;
	}
	if(page == "+1"){
		page_num = parseInt($('#page_num').val())+1;
	}

	var url= "my.php?act=jobs_aduit2&pc=1&page_num="+page_num;
	location.href=url;

}
//鎴戠殑鍏艰亴-宸茬粨鏉熷垎椤佃烦杞�
function pc_audit3Page(page){
	var page_num = page;
	if(page == "-1"){
		page_num = parseInt($('#page_num').val())-1;
	}
	if(page == "+1"){
		page_num = parseInt($('#page_num').val())+1;
	}

	var url= "my.php?act=jobs_aduit3&pc=1&page_num="+page_num;
	location.href=url;

}
//鍒楄〃椤垫悳绱�
function pcJobListSearch(type,value){
	$('#'+type).val(value);

	var county   = $('#county').val();
	var category = $('#category').val();
	var nature   = $('#nature').val();
	var orderby  = $('#orderby').val();

	var url= "index.php?act=job_list&county="+county+"&category="+category+"&nature="+nature+"&orderby="+orderby;
	location.href=url;

}
//浼佷笟浜烘墠搴撳垎椤佃烦杞�
function goPage_company_pool(page){
	var page_num = page;
	if(page == "-1"){
		page_num = parseInt($('#page_num').val())-1;
	}
	if(page == "+1"){
		page_num = parseInt($('#page_num').val())+1;
	}

	var url= "company.php?act=company_pool&page_num="+page_num;
	location.href=url;

}
//浼佷笟鍏虫敞鎴戠殑鍒嗛〉璺宠浆
function goPage_collect_me(page){
	var page_num = page;
	if(page == "-1"){
		page_num = parseInt($('#page_num').val())-1;
	}
	if(page == "+1"){
		page_num = parseInt($('#page_num').val())+1;
	}

	var url= "company.php?act=collect_me&page_num="+page_num;
	location.href=url;

}
//浼佷笟宸ヤ綔杩囩殑鍒嗛〉璺宠浆
function goPage_worked_list(page){
	var page_num = page;
	if(page == "-1"){
		page_num = parseInt($('#page_num').val())-1;
	}
	if(page == "+1"){
		page_num = parseInt($('#page_num').val())+1;
	}

	var url= "company.php?act=worked_list&page_num="+page_num;
	location.href=url;

}
//浼佷笟鎼滅储绠€鍘嗗垎椤佃烦杞�
function goPage_search_resume(page){
	var page_num = page;
	if(page == "-1"){
		page_num = parseInt($('#page_num').val())-1;
	}
	if(page == "+1"){
		page_num = parseInt($('#page_num').val())+1;
	}

	var category= $('#category').val();
	var freetime = $('#freetime').val();
	var school = $('#school').val();
	var sex = $('#sex').val();
	var height= $('#height').val();
	var health = $('#health').val();
	var grade = $('#grade').val();
	var nums = $('#nums').val();
	var province_search= $('#province_search').val();
	var city_search = $('#city_search').val();
	var county_search = $('#county_search').val();


	var url= "company.php?act=search_resume_do&page_num="+page_num+"&category="+category+"&freetime="+freetime+"&school="+school+"&sex="+sex+"&height="+height+"&health="+health+"&grade="+grade+"&nums="+nums+"&province_search="+province_search+"&city_search="+city_search+"&county_search="+county_search;
	location.href=url;
}

//鍏ㄩ儴浜烘墠鍒嗛〉璺宠浆
function goPage_all_resume(page){
	var page_num = page;
	if(page == "-1"){
		page_num = parseInt($('#page_num').val())-1;
	}
	if(page == "+1"){
		page_num = parseInt($('#page_num').val())+1;
	}


	var url= "company.php?act=all_resume&page_num="+page_num;
	location.href=url;
}
//浠樻璁板綍鍒嗛〉璺宠浆
function goPage_payment_log(page){
	var page_num = page;
	if(page == "-1"){
		page_num = parseInt($('#page_num').val())-1;
	}
	if(page == "+1"){
		page_num = parseInt($('#page_num').val())+1;
	}

	var time= $('#time').val();

	var url= "?act=payment_log&page_num="+page_num+"&time="+time;
	location.href=url;
}
//涔愯亰閫氱煡鍒嗛〉
function goPage_notice_list(page){
	var page_num = page;
	if(page == "-1"){
		page_num = parseInt($('#page_num').val())-1;
	}
	if(page == "+1"){
		page_num = parseInt($('#page_num').val())+1;
	}

	var url= "company.php?act=leliao_notice&page_num="+page_num;
	location.href=url;

}
//涔愯亰閫氱煡鍒嗛〉
function goPage_notice_list_personal(page){
	var page_num = page;
	if(page == "-1"){
		page_num = parseInt($('#page_num').val())-1;
	}
	if(page == "+1"){
		page_num = parseInt($('#page_num').val())+1;
	}

	var url= "my.php?act=leliao_notice&page_num="+page_num;
	location.href=url;

}
//鎵撳崱鑱屼綅鍒嗛〉
function goPage_sign_job_list(page){
	var page_num = page;
	if(page == "-1"){
		page_num = parseInt($('#page_num').val())-1;
	}
	if(page == "+1"){
		page_num = parseInt($('#page_num').val())+1;
	}

	var url= "company.php?act=sign_job_list&page_num="+page_num;
	location.href=url;

}
//鎵撳崱浜哄憳鍒楄〃鍒嗛〉
function goPage_sign_person_list(page){
	var page_num = page;
	if(page == "-1"){
		page_num = parseInt($('#page_num').val())-1;
	}
	if(page == "+1"){
		page_num = parseInt($('#page_num').val())+1;
	}

	var jobid= $('#jobid').val();
	var keyword= $('#keyword').val();

	var url= "company.php?act=sign_person_list&page_num="+page_num+"&jobid="+jobid+"&keyword="+keyword;
	location.href=url;
}
//鎴戠殑涓績棣栭〉鍒嗛〉
function goPage_company_index(page){
	var page_num = page;
	if(page == "-1"){
		page_num = parseInt($('#page_num').val())-1;
	}
	if(page == "+1"){
		page_num = parseInt($('#page_num').val())+1;
	}

	var url= "company.php?page_num="+page_num;
	location.href=url;
}
//鐭俊鏃ュ織鍒嗛〉
function goPage_sms(page){
	var page_num = page;
	if(page == "-1"){
		page_num = parseInt($('#page_num').val())-1;
	}
	if(page == "+1"){
		page_num = parseInt($('#page_num').val())+1;
	}

	var url= "company.php?act=sysms&page_num="+page_num;
	location.href=url;
}
//閭€璇锋垜鐨勫垎椤�
function goPage_interview_list(page){
	var page_num = page;
	if(page == "-1"){
		page_num = parseInt($('#page_num').val())-1;
	}
	if(page == "+1"){
		page_num = parseInt($('#page_num').val())+1;
	}

	var url= "my.php?act=my_company_interview_list&page_num="+page_num;
	location.href=url;
}
//鏀惰棌鑱屼綅鐨勫垎椤�
function goPage_favorites_job(page){
	var page_num = page;
	if(page == "-1"){
		page_num = parseInt($('#page_num').val())-1;
	}
	if(page == "+1"){
		page_num = parseInt($('#page_num').val())+1;
	}

	var url= "my.php?act=my_favorites_job_list&page_num="+page_num;
	location.href=url;
}
//鍏戞崲鍒歌鎯呰繎涓€鍛ㄧ殑鍒嗛〉
function goPage_jf_detail(page){
	var page_num = page;
	if(page == "-1"){
		page_num = parseInt($('#page_num').val())-1;
	}
	if(page == "+1"){
		page_num = parseInt($('#page_num').val())+1;
	}

	var url= "my.php?act=jf_detail7&times=7&page_num="+page_num;
	location.href=url;
}
//鍏戞崲鍒歌鎯呰繎涓€涓湀鐨勫垎椤�
function goPage_jf_detail1(page){
	var page_num = page;
	if(page == "-1"){
		page_num = parseInt($('#page_num').val())-1;
	}
	if(page == "+1"){
		page_num = parseInt($('#page_num').val())+1;
	}

	var url= "my.php?act=jf_detail1&times=1&page_num="+page_num;
	location.href=url;
}
//鍏戞崲鍒歌鎯呰繎鍗婂勾鐨勫垎椤�
function goPage_jf_detail6(page){
	var page_num = page;
	if(page == "-1"){
		page_num = parseInt($('#page_num').val())-1;
	}
	if(page == "+1"){
		page_num = parseInt($('#page_num').val())+1;
	}

	var url= "my.php?act=jf_detail6&times=6&page_num="+page_num;
	location.href=url;
}

function goPage_progress(page){
	var page_num = page;
	if(page == "-1"){
		page_num = parseInt($('#page_num').val())-1;
	}
	if(page == "+1"){
		page_num = parseInt($('#page_num').val())+1;
	}

	var url= "my.php?act=withdraw_progress&page_num="+page_num;
	location.href=url;
}
//鏀惰棌浼佷笟鐨勫垎椤�
function goPage_collect_company(page){
	var page_num = page;
	if(page == "-1"){
		page_num = parseInt($('#page_num').val())-1;
	}
	if(page == "+1"){
		page_num = parseInt($('#page_num').val())+1;
	}

	var url= "my.php?act=my_collect_company_list&page_num="+page_num;
	location.href=url;
}
//鍏艰亴绠＄悊-杩涜涓�
function goPage_company_project_status1(page){
	var page_num = page;
	if(page == "-1"){
		page_num = parseInt($('#page_num').val())-1;
	}
	if(page == "+1"){
		page_num = parseInt($('#page_num').val())+1;
	}

	var url= "company.php?act=project_status_1&page_num="+page_num;
	location.href=url;
}

//鏂扮増浼佷笟绔亴浣嶇鐞�
function goPage_company_job_manage(page){
	var page_num = page;
	if(page == "-1"){
		page_num = parseInt($('#page_num').val())-1;
	}
	if(page == "+1"){
		page_num = parseInt($('#page_num').val())+1;
	}

    $("#page_num").val(page_num);
    $("#manage_form").submit();

	//var url= "company.php?act=jobs_manage&page_num="+page_num;
	//location.href=url;
}

//鑱屼綅缃《
function goPage_dotop(page){
	var page_num = page;
	if(page == "-1"){
		page_num = parseInt($('#page_num').val())-1;
	}
	if(page == "+1"){
		page_num = parseInt($('#page_num').val())+1;
	}

	var url= "company.php?act=dotop&page_num="+page_num;
	location.href=url;
}

//褰曠敤浜哄憳
function goPage_company_apply(page){
    var page_num = page;
    if(page == "-1"){
        page_num = parseInt($('#page_num').val())-1;
    }
    if(page == "+1"){
        page_num = parseInt($('#page_num').val())+1;
    }

    $("#page_num").val(page_num);
    $("#search_form").submit();
}

function goPage_setmeal_info(page){
    var page_num = page;
    if(page == "-1"){
        page_num = parseInt($('#page_num').val())-1;
    }
    if(page == "+1"){
        page_num = parseInt($('#page_num').val())+1;
    }

    $("#page_num").val(page_num);
    $("#setmeal_form").submit();
}

function goPage_setmeal(page){
    var page_num = page;
    if(page == "-1"){
        page_num = parseInt($('#page_num').val())-1;
    }
    if(page == "+1"){
        page_num = parseInt($('#page_num').val())+1;
    }

    var url= "company.php?act=company_center&page_num="+page_num;
    location.href=url;
}



//閭€璇蜂汉鍛�
function goPage_company_invite(page){
    var page_num = page;
    if(page == "-1"){
        page_num = parseInt($('#page_num').val())-1;
    }
    if(page == "+1"){
        page_num = parseInt($('#page_num').val())+1;
    }

    $("#page_num").val(page_num);
    $("#resume_form").submit();
}

//浜烘墠搴�
function goPage_company_resume(page){
    var page_num = page;
    if(page == "-1"){
        page_num = parseInt($('#page_num').val())-1;
    }
    if(page == "+1"){
        page_num = parseInt($('#page_num').val())+1;
    }

    $("#page_num").val(page_num);
    $("#resume_form").submit();
}
//鐢ㄦ埛鍏呭€艰褰曞垎椤�
function goPage_echarge_log(page){
    var page_num = page;
	if(page == "-1"){
		page_num = parseInt($('#page_num').val())-1;
	}
	if(page == "+1"){
		page_num = parseInt($('#page_num').val())+1;
	}

	var url= "company.php?act=echarge_log&page_num="+page_num;
	location.href=url;
}
//鍏艰亴绠＄悊-鏈粯娆�
function goPage_company_project_status2(page){
	var page_num = page;
	if(page == "-1"){
		page_num = parseInt($('#page_num').val())-1;
	}
	if(page == "+1"){
		page_num = parseInt($('#page_num').val())+1;
	}

	var url= "company.php?act=project_status_2&page_num="+page_num;
	location.href=url;
}
//寰呰瘎浠风殑鍛樺伐
function goPage_evaluate0(page){
    var page_num = page;
    if(page == "-1"){
        page_num = parseInt($('#page_num').val())-1;
    }
    if(page == "+1"){
        page_num = parseInt($('#page_num').val())+1;
    }

    var url= "company.php?act=jobs_evaluate&page_num="+page_num;
    location.href=url;
}
//寰呰瘎浠风殑鍛樺伐
function goPage_evaluate1(page){
    var page_num = page;
    if(page == "-1"){
        page_num = parseInt($('#page_num').val())-1;
    }
    if(page == "+1"){
        page_num = parseInt($('#page_num').val())+1;
    }

    var url= "company.php?act=jobs_evaluate1&page_num="+page_num;
    location.href=url;
}
//鍏艰亴绠＄悊-宸茬粨鏉�
function goPage_company_project_status3(page){
	var page_num = page;
	if(page == "-1"){
		page_num = parseInt($('#page_num').val())-1;
	}
	if(page == "+1"){
		page_num = parseInt($('#page_num').val())+1;
	}

	var url= "company.php?act=project_status_3&page_num="+page_num;
	location.href=url;
}
//涓汉涓績鎵撳崱鍒嗛〉
function goPage_grade_log(page){
	var page_num = page;
	if(page == "-1"){
		page_num = parseInt($('#page_num').val())-1;
	}
	if(page == "+1"){
		page_num = parseInt($('#page_num').val())+1;
	}

	var url= "my.php?act=grade_log&page_num="+page_num;
	location.href=url;
}
//澶嶉€夋鍏ㄩ€�
function selectAll(action,cname){

	var cbox = document.getElementsByName(cname);

	if(action.checked){
		for(var i=0;i<cbox.length;i++){
			if(!cbox[i].disabled){
				cbox[i].checked = true;
			}
			
		}
			document.getElementById('amount').innerHTML=cbox.length;
	}else{
		for(var i=0;i<cbox.length;i++){
			cbox[i].checked = false;
		}		
		document.getElementById('amount').innerHTML='0';
	}

}
//閫夋嫨澶嶉€夋鍚庤绠椾汉鏁�
function get_amount(action,cname){
	var amount= $('#amount').html();
	theV=isNaN(parseInt(amount))?0:parseInt(amount);	

	if(action.checked){			
		document.getElementById('amount').innerHTML=theV+1;
	}else{
		document.getElementById('amount').innerHTML=theV-1;
	}
	getmoney();
}
//
function getmoney(){
	var amount= $('#amount').html();
	var money= $('#money').val();
	document.getElementById('total_money').innerHTML=amount*money;
}
function payment(){
	var worktime= $('#worktime3').html();
	var money= $('#total_money').html();
	var jobs_id= $('#jobs_id').val();
	var uid=document.getElementsByName("uid");
	var a="";
	for(i=0;i<uid.length;i++){
		
		if(uid[i].checked){
			if (a==""){
				a +=uid[i].value;
			}else {
				a += ","+uid[i].value;
			}
		}
	}
	if(a == ''){
		alert("璇烽€夋嫨瑕佹敮浠樼殑浜�"); return false;
	}
    if(!money||money==0){
        alert("璇峰～鍐欐敮浠橀噾棰�");
        return false;
    }
     tmp=/^(([1-9]\d{0,9}))(\.\d{1,2})?$/;
    if(!tmp.test(money)){
        alert('璇锋纭緭鍏ラ噾棰�');
        return false;
    }
	var url= "company.php?act=put_personal_money&uids="+a+"&jobs_id="+jobs_id+"&money="+money;//+"&worktime="+worktime; edit by qxn 2016 07 14
	location.href=url;
}
//閫夋嫨鎬у埆 pc
/*function checkSex(sexvalue){
	$('.sex_button').removeClass('on');
	
	if(sexvalue==3){
		$('#sex_a').addClass('on');
                $('#womanheight').attr('disabled',false);
                $('#manheight').attr('disabled',false);
                $('#womansex').attr('disabled',false);
                $('#mansex').attr('disabled',false);
	}else if(sexvalue==1){
		$('#sex_m').addClass('on');
                $('#womanheight').attr('disabled',true);
                $('#manheight').attr('disabled',false);
                $('#womanheight').val('');
                $('#womansex').val('');
                $('#womansex').attr('disabled',true);
                $('#mansex').attr('disabled',false);
	}else if(sexvalue==2){
                $('#womanheight').attr('disabled',false);
                $('#manheight').attr('disabled',true);
                $('#manheight').val('');
                $('#mansex').val('');
                $('#womansex').attr('disabled',false);
                $('#mansex').attr('disabled',true);
		$('#sex_f').addClass('on');
	}

	$('#sex').val(sexvalue);

}*/
//閫夋嫨鎬у埆 pc
function checkSex(sexvalue){
    $('#sex_a').removeClass('btn-success').addClass('btn-default');	
    $('#sex_m').removeClass('btn-success').addClass('btn-default');	
    $('#sex_f').removeClass('btn-success').addClass('btn-default');	
    if(sexvalue==3){
        $('#sex_a').addClass('btn-success');
        $('#womanheight').attr('disabled',false);
        $('#manheight').attr('disabled',false);
        $('#womansex').attr('disabled',false);
        $('#mansex').attr('disabled',false);
    }else if(sexvalue==1){
        $('#sex_m').addClass('btn-success');
        $('#womanheight').attr('disabled',true);
        $('#manheight').attr('disabled',false);
        $('#womanheight').val('');
        $('#womansex').val('');
        $('#womansex').attr('disabled',true);
        $('#mansex').attr('disabled',false);
    }else if(sexvalue==2){
        $('#sex_f').addClass('btn-success');
        $('#womanheight').attr('disabled',false);
        $('#manheight').attr('disabled',true);
        $('#manheight').val('');
        $('#mansex').val('');
        $('#womansex').attr('disabled',false);
        $('#mansex').attr('disabled',true);
    }

    $('#sex').val(sexvalue);
}
//閫夋嫨鎬у埆 wx
function checkSex_wx(sexvalue){
	$('.sex_button').addClass('ui-btn');
	$('.sex_button').removeClass('dq');
	if(sexvalue==3){
		$('#sex_a').addClass('dq');
		$('#sex_a').removeClass('ui-btn');
	}else if(sexvalue==1){
		$('#sex_m').addClass('dq');
		$('#sex_m').removeClass('ui-btn');
	}else if(sexvalue==2){
		$('#sex_f').addClass('dq');
		$('#sex_f').removeClass('ui-btn');
	}

	$('#sex').val(sexvalue);

}
//閫夋嫨鍋ュ悍璇� wx
/*function checkhealth_wx(sexvalue){
    $('.wx_health_button').addClass('ui-btn');
    $('.wx_health_button').removeClass('dq');
    if(sexvalue==3){
        $('#health_a').addClass('dq');
        $('#health_a').removeClass('ui-btn');
    }else if(sexvalue==1){
        $('#health_m').addClass('dq');
        $('#health_m').removeClass('ui-btn');
    }else if(sexvalue==2){
        $('#health_f').addClass('dq');
        $('#health_f').removeClass('ui-btn');
    }

    $('#health').val(sexvalue);

}*/

//閫夋嫨鍋ュ悍璇�
function checkhealth_wx(healthvalue){
	$('.health_button').removeClass('on');
	if(healthvalue==1){
		$('#health_y').addClass('on');
	}else if(healthvalue==2){
		$('#health_n').addClass('on');
	}

	$('#health').val(healthvalue);

}
//閫夋嫨鏄惁鏄鐢�
function checkstudent_wx(studentvalue){
	$('.student_button').removeClass('on');
	if(studentvalue==1){
		$('#student_y').addClass('on');
	}else if(studentvalue==2){
		$('#student_n').addClass('on');
	}

	$('#is_student').val(studentvalue);

}
//閫夋嫨鐢熸€у埆
function checksex_wx(sexvalue){
	$('.sex_button').removeClass('on');
	if(sexvalue==1){
		$('#sex_y').addClass('on');
	}else if(sexvalue==2){
		$('#sex_n').addClass('on');
	}

	$('#sex').val(sexvalue);

}
//閫夋嫨鑱屼綅
function checksjob_wx(job,opj){

	var intention_jobs =$("#intention_jobs").val();
    if($(opj).hasClass('cur')){
        $(opj).removeClass('cur');
        var new_str = '';
        if(new RegExp(','+job).test(intention_jobs)){
            new_str = intention_jobs.replace(new RegExp(','+job),'');
        }else if(new RegExp(job+',').test(intention_jobs)){
            new_str = intention_jobs.replace(new RegExp(job+','),''); 
        }else{
            new_str = intention_jobs.replace(new RegExp(job),'');
        }
        $("#intention_jobs").val(new_str);
    }else{
        var num =$(".cur").length; 
        if(num>4){
            alert("鏈€澶氬彲閫夋嫨浜斾釜");
            return false;
        }
        if(intention_jobs!=''){
            //alert(intention_jobs);alert(job);
            if(intention_jobs.indexOf(job)>=0)
            {
               alert("鍚湁姝ゅ瓧绗︿覆");return false;
            }
            intention_jobs +=","+job;		
        }else{
            intention_jobs = job;
        }
        
        
        $(opj).addClass('cur');
        $('#intention_jobs').val(intention_jobs);
    }

}
//閫夋嫨鍋ュ悍璇�
function checkHealth(healthvalue){
	$("#health_y").removeClass('btn-success').addClass('btn-default');
    $("#health_n").removeClass('btn-success').addClass('btn-default');

	if(healthvalue==1){
		$('#health_y').addClass('btn-success');
	}else if(healthvalue==2){
		$('#health_n').addClass('btn-success');
	}

	$('#health').val(healthvalue);

}
//閫夋嫨闈㈣瘯
/*function checkisintervies(isinterviesvalue){
	$('.isintervies_button').removeClass('on');
	
	if(isinterviesvalue==1){
		$('#isintervies_y').addClass('on');
	}else if(isinterviesvalue==2){
		$('#isintervies_n').addClass('on');
	}

	$('#isintervies').val(isinterviesvalue);

}*/
//閫夋嫨闈㈣瘯
function checkisintervies(isinterviesvalue){
    $("#isintervies_y").removeClass('btn-success').addClass('btn-default');
    $("#isintervies_n").removeClass('btn-success').addClass('btn-default');
	if(isinterviesvalue==1){
		$('#isintervies_y').addClass('btn-success');
	}else if(isinterviesvalue==2){
		$('#isintervies_n').addClass('btn-success');
	}

	$('#isintervies').val(isinterviesvalue);

}
//娓呯┖鍐呭
function ClearTextArea(name)  
{  
 document.getElementById(name).value="";  
}  
//閫夋嫨钖祫鏂瑰紡
function checkis_safe(safevalue){
    $('.checkis_safe_button').removeClass('on');
	
	if(safevalue==1){
		$('#checkis_safe_y').addClass('on');
	}else if(safevalue==2){
		$('#checkis_safe_n').addClass('on');
	}

	$('#is_safe').val(safevalue);
}
//閫夋嫨宸ヨ祫淇濋殰
function checkway_cn(waycnvalue){
    $('.checkway_cn_button').removeClass('on');
	
	if(waycnvalue==0){
		$('#checkway_cn_s').addClass('on');
		$('.quxiao').css('display','none');
	}else if(waycnvalue==1){
		$('#checkway_cn_t').addClass('on');
		$('.quxiao').css('display','block');
	}else if(waycnvalue==2){
		$('#checkway_cn_y').addClass('on');
		$('.quxiao').css('display','block');
	}else if(waycnvalue==3){
		$('#checkway_cn_c').addClass('on');
		$('.quxiao').css('display','block');
	}

	$('#wage_cn').val(waycnvalue);
	var wage_cn = $("#wage_cn").val();
	var wage = $("#wage").val();
	var woman_amount = $("#woman_amount").val();
	var man_amount = $("#man_amount").val();
	var worktime = $("#worktime").val(); 
	var start = $("#start").html();
	var end = $("#end").html();
	//if(theV!=o.value){o.value=theV;} 
	/*if(wage_cn ==0){
		var a = worktime.split(",");
		var sum = 0;
		for(var i = 0;i < a.length; i++) {
			if(a[i] != 0){				
				var b = a[i].split("-");
				var timenum =parseInt(b[1]) - parseInt(b[0]);	
				sum=sum+timenum;	//灏忔椂鎬绘暟			
			}		
		}

	}*/
	if(man_amount != '' && woman_amount!= '' ){
		amount = parseInt(woman_amount)+parseInt(man_amount);
	}
	if(man_amount != '' && woman_amount == ''){
		amount =  man_amount;
	}
	if(woman_amount != '' && man_amount == ''){
		amount = woman_amount;
	}
	var daynum = getDateDiff(start,end); //澶╂暟
	if(wage_cn ==1){
	   safe_money.value=wage*daynum*amount; 
	}
	if(wage_cn ==0){
	   safe_money.value=''; 
	}
	if(wage_cn ==2){
	   safe_money.value=wage*amount; 
	}
	if(wage_cn ==3){
	   safe_money.value=wage*amount; 
	}
}
//鍚屾剰鐢宠鐨勮亴浣�
function yes_apply(){
	var uid=document.getElementsByName("uid");
	var jobs_id = $('#jobs_id').val();
	var a="";
    var worktime=$("#worktime3").html();
	for(i=0;i<uid.length;i++){
		
		if(uid[i].checked){
			if (a==""){
				a +=uid[i].value;
			}else {
				a += ","+uid[i].value;
			}
		}
	}
	if(a == ''){
		alert("璇烽€夋嫨瑕佸悓鎰忕殑浜�"); return false;
	}
	var url= "company.php?act=apply_do&uid="+a+"&jobs_id="+jobs_id+"&state=1"+"&worktime="+worktime;
	location.href=url;
}
//鎷掔粷鐢宠鐨勮亴浣�
function no_apply(){
	var uid=document.getElementsByName("uid");
	var jobs_id = $('#jobs_id').val();
	var a="";
	for(i=0;i<uid.length;i++){
		
		if(uid[i].checked){
			if (a==""){
				a +=uid[i].value;
			}else {
				a += ","+uid[i].value;
			}
		}
	}
	if(a == ''){
		alert("璇烽€夋嫨瑕佹嫆缁濈殑浜�"); return false;
	}
	var url= "company.php?act=apply_do&uid="+a+"&jobs_id="+jobs_id+"&state=2";
	location.href=url;
}
//鍔犲叆浼佷笟浜烘墠搴�
function add_company_fav(){
	var uid=document.getElementsByName("uid");
	var a="";
	for(i=0;i<uid.length;i++){
		
		if(uid[i].checked){
			if (a==""){
				a +=uid[i].value;
			}else {
				a += ","+uid[i].value;
			}
		}
	}
	if(a == ''){
		alert("璇烽€夋嫨瑕佸姞鍏ョ殑浜�"); return false;
	}
    $.get("company.php?act=company_pool_do&uids="+a+"&state=1",function(data){
        alert(data);
        window.location.reload();
    })
	//var url= "company.php?act=company_pool_do&uids="+a+"&state=1";
	//location.href=url;
}
//纭鍒板矖
function sure_confirm(){
	var uid=document.getElementsByName("uid");
	var jobs_id = $('#jobs_id').val();
	var a="";
	for(i=0;i<uid.length;i++){
		
		if(uid[i].checked){
			if (a==""){
				a +=uid[i].value;
			}else {
				a += ","+uid[i].value;
			}
		}
	}
	if(a == ''){
		alert("璇烽€夋嫨瑕佺‘璁ゅ埌宀楃殑浜�"); return false;
	}
	var url= "company.php?act=sure_confirm&uid="+a+"&jobs_id="+jobs_id;
	location.href=url;
}
//瀹屽伐
function click_complete(){
    var uid=document.getElementsByName("uid");
	var jobs_id = $('#jobs_id').val();
        var worktime=$('#worktimes').html();
	var a="";
	for(i=0;i<uid.length;i++){
		
		if(uid[i].checked){
			if (a==""){
				a +=uid[i].value;
			}else {
				a += ","+uid[i].value;
			}
		}
	}
	if(a == ''){
		alert("璇烽€夋嫨瑕佸畬宸ョ殑浜�"); return false;
	}
	var ajax_url= "company.php?act=click_is_complete&uid="+a+"&jobs_id="+jobs_id+"&worktime="+worktime+"&t="+new Date().getTime();
	//location.href=url;
	$.ajax({
		url: ajax_url,
		timeout: 20000,
		type: "POST",
		dataType: "html",
		error: function(){
			dialogShow('鎿嶄綔澶辫触锛侊紒锛�');
		},
		success:function(rs){
            window.location.href="company.php";
            //$("#tc").modal();
			//dialogShow(rs);
		}
	});

}
//瑙ｇ害
function del_from_project(){
	var uid=document.getElementsByName("uid");
	var jobs_id = $('#jobs_id').val();
	var a="";
	for(i=0;i<uid.length;i++){
		
		if(uid[i].checked){
			if (a==""){
				a +=uid[i].value;
			}else {
				a += ","+uid[i].value;
			}
		}
	}
	if(a == ''){
		alert("璇烽€夋嫨瑕佽В绾︾殑浜�"); return false;
	}
	var url= "company.php?act=del_project_manage&uid="+a+"&jobs_id="+jobs_id;
	location.href=url;

}
//琚綍鍙栫殑浜哄彂閫佺煭淇� zjl 2015-12-2  
function send_sms(){
    var uid=document.getElementsByName("uid");
    var jobs_id = $('#jobs_id').val();
    var a="";
    for(i=0;i<uid.length;i++){
        if(uid[i].checked){
            if (a==""){
                    a +=uid[i].value;
            }else{
                    a += ","+uid[i].value;
            }
        }
    }
    if(a == ''){
            alert("璇烽€夋嫨瑕佸彂閫佺煭淇′汉"); return false;
    }
    $("#send_uid").val(a);
    $("#send_jobid").val(jobs_id);
    $("#tss").modal();
}
function select_school(school){
	$("#school").val(school);
	$("#school_select").html(school);
	$("#school_dialog").dialog('hide');
}

function select_education(education_cn,education_id){
	$("#education").val(education_id);
	$("#education_cn").val(education_cn);
	$("#education_select").html(education_cn);
	$("#education_dialog").dialog('hide');

}
function select_category(){
	var intention =  getCheckboxValue('cbx_category');
	if(intention != ""){
		$("#intention_select").html(intention);
		$("#intention_jobs").val(intention);
	}
	$("#intention_dialog").dialog('hide');
}
function select_province(categoryname,categoryid){
	$("#province").val(categoryname);
	$("#city").val('');
	$("#county").val('');
	$("#dirstrict_select").html(categoryname);
	$("#province_dialog").dialog('hide');

	var ajax_url = "resume.php?act=get_district_list&pid="+categoryid+"&type=city";
	
	$.ajax({
		url: ajax_url,
		timeout: 2000,
		type: "POST",
		dataType: "html",
		error: function(){
			dialogShow('鎿嶄綔澶辫触锛侊紒锛�');
		},
		success:function(html){
			$("#city_dialog_info").html(html);
			$("#city_dialog").dialog("show");
		}
	});

}
function select_city(categoryname,categoryid){
	//alert(categoryname+'---'+categoryid);
	$("#city").val(categoryname);
	$("#dirstrict_select").html($("#dirstrict_select").html()+"-"+categoryname);
	$("#city_dialog").dialog("hide");

	var ajax_url = "resume.php?act=get_district_list&pid="+categoryid+"&type=county";
	
	$.ajax({
		url: ajax_url,
		timeout: 2000,
		type: "POST",
		dataType: "html",
		error: function(){
			dialogShow('鎿嶄綔澶辫触锛侊紒锛�');
		},
		success:function(html){
			$("#county_dialog_info").html(html);
            if(html){
                $("#county_dialog").dialog("show");
            }

		}
	});

}
function select_county(categoryname){
	$("#county").val(categoryname);
	$("#dirstrict_select").html($("#dirstrict_select").html()+"-"+categoryname);
	$("#county_dialog").dialog("hide");
}

function form_jobs(){
	var province_search = $("#province_search").val();
	var city_search = $("#city_search").val();
	var jobs_name = $("#jobs_name").val();
	var category = $("#category").val();
	var nature= $("#nature").val();
	var address = $("#address").val();
	var contact = $("#contact").val();
	var telephone = $("#telephone").val();
	var wage = $("#wage").val();
	var wage_cn = $("#wage_cn").val();
	var start = $("#start").html();
        if(stsart==''){
            var start=$("#starttime").val();
        }
	var end = $("#end").html();
        if(end==''){
            var end=$("#endtime").val();
        }
	var worktime = $("#worktime").val();
	/*var man_amount = $("#man_amount").val();
	var woman_amount = $("#woman_amount").val();*/
	var settlement = $("#settlement").val();
	var contents = $("#contents").val();
	if(province_search == ''){
		alert('璇烽€夋嫨鐪�');return false;
	}
	if(city_search == ''){
		alert('璇烽€夋嫨甯�');return false;
	}
	if(jobs_name == ''){
		alert('璇峰～鍐欒亴浣嶅悕绉�');return false;
	}
	if(category == ''){
		alert('璇烽€夋嫨鍏艰亴绫诲瀷');return false;
	}
	if(nature == ''){
		alert('璇烽€夋嫨鍏艰亴鎬ц川');return false;
	}
	if(address == ''){
		alert('璇峰～鍐欏湴鍧€');return false;
	}
	if(contact == ''){
		alert('璇峰～鍐欒仈绯讳汉');return false;
	}
	if(telephone == ''){
		alert('璇峰～鍐欒仈绯绘柟寮�');return false;
	}
	if(wage == ''){
		alert('璇峰～鍐欒柂璧�');return false;
	}
	if(start == ''){
		alert('璇烽€夋嫨寮€濮嬫椂闂�');return false;
	}else{
		$('#starttime').val(start);
	}
	if(end == ''){
		alert('璇烽€夋嫨缁撴潫鏃堕棿');return false;
	}else{
		$('#deadline').val(end);
	}
	if(wage_cn == 1){
		if(worktime == ''){
			alert('璇烽€夋嫨宸ヤ綔鏃堕棿');return false;
		}
	}
	/*if(woman_amount == '' || man_amount == ''){
		alert('璇峰～鍐欐嫑鑱樹汉鏁�');return false;
	}*/
	if(settlement == ''){
		alert('璇烽€夋嫨缁撶畻鏂瑰紡');return false;
	}
	if(contents == ''){
		alert('璇峰～鍐欏吋鑱屾弿杩�');return false;
	}
	return true;
}

function resume_info(){
	var card_id = $("#card_id").val();
	var birthdate = $("#birthdate").val();
	var is_student = $("#is_student").val();
	var province_my = $("#province_my").val();
	var city_my= $("#city_my").val();
	var county_my= $("#county_my").val();

    if(card_id == ""){
		alert("璇峰～鍐欒韩浠借瘉鍙�!");
		return false;
	}else{
		var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;  
		if(reg.test(card_id) === false)  
		{  
		   alert("韬唤璇佽緭鍏ヤ笉鍚堟硶");  
		   return  false;  
		} 
	}
	if(province_my == ''){
		alert('璇烽€夋嫨鐪�');return false;
	}
	if(city_my == ''){
		alert('璇烽€夋嫨甯�');return false;
	}
	if(county_my == ''){
		alert('璇烽€夋嫨鍖哄幙');return false;
	}
	if(is_student == ''){
		alert('璇烽€夋槸鍚︽槸瀛︾敓');return false;
	}
	if(birthdate == ''){
		alert('璇烽€夋嫨鍑虹敓鏃ユ湡');return false;
	}

	return true;
}
function form_replace_jobs(){
	var province_search = $("#province_search").val();
	var city_search = $("#city_search").val();
	var jobs_name = $("#jobs_name").val();
	var category = $("#category").val();
	var nature= $("#nature").val();
	var address = $("#address").val();
	var contact = $("#contact").val();
	var telephone = $("#telephone").val();
	var contents = $("#contents").val();
    
	if(province_search == ''){
		alert('璇烽€夋嫨鐪�');return false;
	}
	if(city_search == ''){
		alert('璇烽€夋嫨甯�');return false;
	}
	if(jobs_name == ''){
		alert('璇峰～鍐欒亴浣嶅悕绉�');return false;
	}
	if(category == ''){
		alert('璇烽€夋嫨鍏艰亴绫诲瀷');return false;
	}
	if(nature == ''){
		alert('璇烽€夋嫨鍏艰亴鎬ц川');return false;
	}
	if(address == ''){
		alert('璇峰～鍐欏湴鍧€');return false;
	}
	if(contact == ''){
		alert('璇峰～鍐欒仈绯讳汉');return false;
	}
	if(telephone == ''){
		alert('璇峰～鍐欒仈绯绘柟寮�');return false;
	}
	if(contents == ''){
		alert('璇峰～鍐欏吋鑱屾弿杩�');return false;
	}
	return true;
}
function checkwage(o){ 

	//theV=isNaN(parseInt(o.value))?0:parseInt(o.value);	
	var wage_cn = $("#wage_cn").val();
	var wage = $("#wage").val();
	var woman_amount = $("#woman_amount").val();
	var man_amount = $("#man_amount").val();
	var worktime = $("#worktime").val(); 
	var start = $("#start").html();
	var end = $("#end").html();
    var amount=0;
	//if(theV!=o.value){o.value=theV;} 
	/*if(wage_cn ==0){
		var a = worktime.split(",");
		var sum = 0;
		for(var i = 0;i < a.length; i++) {
			if(a[i] != 0){				
				var b = a[i].split("-");
				var timenum =parseInt(b[1]) - parseInt(b[0]);	
				sum=sum+timenum;	//灏忔椂鎬绘暟			
			}		
		}

	}*/
	
	if(man_amount != '' && woman_amount!= '' ){
		amount = parseInt(woman_amount)+parseInt(man_amount);
	}
	if(man_amount != '' && woman_amount == ''){
		amount =  man_amount;
	}
	if(woman_amount != '' && man_amount == ''){
		amount = woman_amount;
	}
	//alert(amount);return false;
	if(start!= '' && end!=''){
		var daynum = getDateDiff(start,end); //澶╂暟
	}
	if(wage_cn ==1){
	   safe_money.value=wage*daynum*amount; 
	}
	if(wage_cn ==0){
	   safe_money.value=''; 
	}
	if(wage_cn ==2){
	   safe_money.value=wage*amount; 
	}
	if(wage_cn ==3){
	   safe_money.value=wage*amount; 
	}
} 
//鍑轰袱涓棩鏈熶箣闂寸殑澶╂暟
function getDateDiff(date1,date2){
	var arr1=date1.split('-');
	var arr2=date2.split('-');
	var d1=new Date(arr1[0],arr1[1],arr1[2]);
	var d2=new Date(arr2[0],arr2[1],arr2[2]);
	var diff = (d2.getTime()-d1.getTime())/(1000*3600*24);
	return diff;
}
function subForm(){
	if(form_jobs()){
		document.forms['form1'].submit();
	}
	
}

//閫夋嫨鏄惁杩熷埌
function is_late(latevalue){
    $('.late_button').removeClass('ws_JBA');
	
	if(latevalue==0){
		$('#late_n').addClass('ws_JBA');
	}else if(latevalue==1){
		$('#late_y').addClass('ws_JBA');
	}

	$('#late').val(latevalue);
}

//閫夋嫨鏄惁澶辩害
function is_shiyue(shiyuevalue){
    $('.shiyue_button').removeClass('ws_JBA');
	
	if(shiyuevalue==0){
		$('#shiyue_n').addClass('ws_JBA');
	}else if(shiyuevalue==1){
		$('#shiyue_y').addClass('ws_JBA');
	}

	$('#shiyue').val(shiyuevalue);
}
//琛ュ彂宸ヨ祫
function bufa_money(){
	var money = $("#money");
	var uid = $("#uid");
	var jobs_id = $("#jobs_id");
	var url = "company.php?act=bufa_money&uid="+uid+"&jobs_id="+jobs_id+"&money="+money;
	location.href=url;
}
//xiugai鍜宒englu鐢ㄤ簬鐧诲綍鏃跺€欏脊绐楃殑鏄剧ず鍜岄殣钘忋€�
function xiugai(){
    $(".ui-dialog").css("display",'none');
}
function denglu(){
    $(".ui-dialog").css("display",'');
}
function mathrand()
{
	var Num="";
	for(var i=0;i<6;i++)
	{
		Num+=Math.floor(Math.random()*10);
	}
	return Num;
}

function xiajia(){

    var jobid = $("#jobid").val();
    var ajax_url = "company.php?act=job_die&jobid="+jobid+"&t="+new Date().getTime();
    $.ajax({
        url: ajax_url,
        timeout: 5000,
        type: "POST",
        dataType: "json",
        error: function(){
            alert('鎿嶄綔澶辫触锛侊紒锛�');
            $('.popbox-container').fadeOut();
        },
        success:function(rs){
            alert(rs[1]);
            window.location.reload();
        }
    });
}

function del_job(id){
    if(confirm('纭畾瑕佸垹闄よ鑱屼綅鍚楋紵')){
        $.post('company.php',{act:'del_job',id:id},function(data){
            alert(data.msg);
            if(data.code == 1){
                window.location.reload();
            }        
        },'json') 
    }
}


function addpositon(){
    var cityid = $("#city_search").val();
    var cityname = $("#city_search option:selected").text();

    var countyid = $("#county_search").val();
    var countyname = $("#county_search option:selected").text();

    var release_free = $("#jobs_num").val();
    var fabu_select = $("#fabu_select").val();
    
    if(!cityid || !cityname || !countyid || !countyname){
        alert('璇烽€夋嫨宸ヤ綔鍩庡競');
        return false;
    }

    if(!countyid || !countyname){
        alert('璇烽€夋嫨宸ヤ綔鍦板尯');
        return false;
    }

    var ci = 1;
    $("input[name='citys[]']").each(function(){
        if($(this).val() == cityid){
            ci = 0;
            alert('璇ュ煄甯傛偍宸茬粡閫夋嫨杩囦簡锛岃鍕块噸澶嶉€夋嫨');
            return false;
        }
        
    })

    if(ci == 0){
        return false;
    } 

    if(release_free < $("input[name='citys[]']").size()+1 && !fabu_select){
        alert('閫夋嫨鐨勫伐浣滃煄甯傚凡杈句笂闄�');
        return false;
    }
    

    var html = "<em style='margin-left:5px; background:url(templates/new_temp/new_company_images/close.png) top right no-repeat;padding-right:15px;' onclick='cancel_select_city(this)'><input type='hidden' name='citys[]' value='"+cityid+"'>"+cityname+"-<input type='hidden' name='county[]' value='"+countyid+"'>"+countyname+"<em>";
    $("#selected_city").append(html);
    $("#selected_city").show();
    
}

function cancel_select_city(obj){
    $(obj).remove();
    if($("#selected_city").children('em').size() == 0){
        $("#selected_city").hide();
    }
}
function resme_info(){
	
	
	if(typeof($("#fullname").val()) == 'undefined' ){
			var fullname = '';
		}else{
			var fullname = $("#fullname").val();
			if(fullname == ""){			
                alert('璇峰～鍐欏鍚�!');
                return false;
			}
		}
	
		if(typeof($("#card_id").val()) == 'undefined' ){
			var card_id = '';
		}else{
			var card_id = $("#card_id").val();
			if(card_id == ""){
					alert("璇峰～鍐欒韩浠借瘉鍙�!");
				return false;
			}else{
				var card_rule = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
				if((card_id.length !=15 && card_id.length !=18) || !IdentityCodeValid(card_id)){
						alert("濉啓姝ｇ‘鐨勮韩浠借瘉鍙凤紒");
					return false;
				}
			}
		}
}

//鎻愮幇 pc
    function get_withdrew(obj,force){
        var equip = $("#equip").val();
        var point = $("#point").val();
        var money = $("#money").val();
        var account = $("#account").val();
        var pwd = $("#pwd").val();
        if(money == ""){
            alert('璇峰～鍐欐彁鐜伴噾棰�');
            return false;
        }else if(parseFloat(point) < parseFloat(money)){
            alert("鎻愮幇閲戦涓嶈兘澶т簬璐︽埛浣欓");
            return false;
        }else if(money < 10){
            alert("鎻愮幇閲戦涓嶈兘灏忎簬10鍏�");
            return false;		
        }else if(money > 10000){
            alert("鎻愮幇閲戦涓嶈兘澶т簬10000鍏�");
            return false;
        }

        if(account == ""){
            alert("璇烽€夋嫨鎻愮幇璐︽埛");
            return false;
        }
        if(pwd == ""){
            alert("璇峰～鍐欐敮浠樺瘑鐮�");
            return false;
        }
        /*var mypretime = $('#mypretime').val();
        var timestamp = Date.parse(new Date());
        var mysec = timestamp/1000;

        if((mysec-mypretime)>2){
            //600鍙槸涓€涓椂闂村€硷紝灏辨槸5鍒嗛挓鍐呯姝㈤噸澶嶆彁浜わ紝鍊奸殢浣犻珮鍏磋mypretime
            $('#mypretime').val(mysec);*/
            $(obj).attr("disabled", true);            
            $.post('my.php',{'act':'withdrew_do','money':money,'account':account,'pwd':pwd,'force':force,'equip':equip},function(data){
                if(data.result_code == 1){
                    window.location.href = data.url;
                }else if(data.result_code == 2){
                    $(obj).removeAttr("disabled");
                    $("#taxbox p").text(data.data.tishi);
                    $("#taxbox li span").eq(0).text(data.data.total);
                    $("#taxbox li span").eq(1).text(data.data.tixian);
                    $("#taxbox li span").eq(2).text(data.data.tax);
                    $("#taxbox li span").eq(3).text(data.data.daozhang);
                    shadboxFun('taxbox');
                }else{
                    alert(data.result_msg);
                    $(obj).removeAttr("disabled");
                }
            },'json')
        //}else{
        //    alert(' 鎸変竴娆″氨澶熶簡锛岃鍕块噸澶嶆彁浜わ紒璇疯€愬績绛夊緟锛佽阿璋㈠悎浣滐紒');
        //    return false;
        //}
    } 