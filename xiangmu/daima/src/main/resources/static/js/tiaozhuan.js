
function dozwgl() {// 职位管理
	window.location.href = "doCompany";
}
function dogrzx() {// 个人中心
	window.location.href = "doQiyerenz";
}
function doxzzw() {// 新增职位
	window.location.href = "doTijao";
}
function doxgmm() {// 修改密码
	window.location.href = "doRepassw";
}
function dopegl() {// 人员管理
	window.location.href = "doPersongl";
}
function aaaa() {// 通知管理
	window.location.href = "doCompany1";
}
// 获取cookie
function getCookie(cname) {
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i].trim();
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

/** 职位管理页面的js执行* */

/* 已发布的职位 */
var username = getCookie("username");
function yfb() {
	location.reload();
}
/* 进行中的职位 */
function jxz() {
	var zt = 1;
	ajax(zt);

}
/* 已经结束的职位 */
function yjs() {
	var zt = 2;
	ajax(zt);
}
/* 待审核中的职位 */
function dsh() {
	var zt = 3;
	ajax(zt);
}

/* 审核不成功的职位 */
function shsb() {

	var zt = 4;
	ajax(zt);
	/* 定义消息提示框 */
	$.messager.show({
		title : '温馨提示',
		msg : '审核不通过的职位请您在24后检查关键字后继续申请'
				+ '认证服务现已开启，每位企业的负责人每日仅可发布两条职位，VIP用户每日可发布5条职位，请周知',
		timeout : 5000,
		height : 200,
		width : 300,
		showType : 'slide'
	});

}

function doinde(ls) {
	var tds = "<tr>" + "<td>" + ls.id + "</td>" + "<td>" + ls.name + "</td>"
			+ "<td>" + ls.address + "</td>" + "<td>" + ls.worktime + "</td>"
			+ "<td>" + ls.tel + "</td>" + "<td>" + ls.publish + "</td>"
			+ "<td><a onclick='doDeleteObject(" + ls.id + ")'>delete</a>"
			+ "&nbsp;<a onclick='doUpdateObject(" + ls.id + ")'>update</a>"
			+ "&nbsp;<a href='doBmxq?mid=" + ls.id + "'>xq</a></td>"
	"</tr>";
	return tds;
}

function doindew(ls) {
	var tds = "<tr>" + "<td>" + ls.id + "</td>" + "<td>" + ls.name + "</td>"
			+ "<td>" + ls.address + "</td>" + "<td>" + ls.worktime + "</td>"
			+ "<td>" + ls.tel + "</td>" + "<td>" + ls.publish + "</td>"
			+ "<td>您无权操作</td>" + "</tr>";
	return tds;
}

/** 超级管理员操作界面 */
function doinder(ls) {
	var tds = "<tr>" + "<td>" + ls.id + "</td>" + "<td>" + ls.name + "</td>"
			+ "<td>" + ls.address + "</td>" + "<td>" + ls.worktime + "</td>"
			+ "<td>" + ls.tel + "</td>" + "<td>" + ls.publish + "</td>"
			+ "<td><a onclick='doPass(" + ls.id + ")'>通过</a>"
			+ "&nbsp;<a onclick='doRefusect(" + ls.id + ")'>拒绝</a>" + "</td>"
			+ "</tr>";
	return tds;
}

/** 管理员通过拒绝操作 */
function doPass(id) {

	var zt = 1;
	var params = {
		id : id,
		zt : zt
	}
	var url = "message/updateZtById";
	$.post(url, params, function(data) {
		if (data.state == 1) {
			alert("通过操作执行成功！")
			location.reload();
		} else {
			alert("通过操作执行失败");

		}
	});

}

function doRefusect(id) {

	var zt = 4;
	var params = {
		id : id,
		zt : zt
	}
	var url = "message/updateZtById";
	$.post(url, params, function(data) {
		if (data.state == 1) {
			alert("拒绝操作执行成功！")
			location.reload();
		} else {
			alert("拒绝操作执行失败");

		}
	});

}
/** 职位的中级菜单查询* */
function ajax(zt) {

	var params = {
		username : username,
		zt : zt
	}

	var url;
	if ("root" == username) {
		url = "message/doFindObjects";
	} else {
		url = "message/doFindObjectsByUserName";
	}

	$.post(url, params, function(data) {
		if (data.state == 1) {
			console.log(data);
			var html = "";
			var ca = data.data;
			for (var i = 0; i < ca.length; i++) { // 遍历data数组
				var ls = ca[i];

				// ls.data("id",ca[i].id);
				if (zt == 3 || zt == 4) {
					if ("root" == username) {
						html += doinder(ls);
					} else {
						html += doindew(ls);
					}
				} else {
					html += doinde(ls);
				}
			}
			$("#tr").html(html); // 在html页面id=test的标签里显示html内容
		}
	})

}

/** 菜单回填* */

function doMeun(username) {

	$.ajax({
		url : "menu/dofindMenuByUserName?username=" + username,// 后台请求的数据，用的是PHP
		dataType : "json",// 数据格式
		type : "post",// 请求方式
		async : false,// 是否异步请求
		success : function(data) {
			console.log(data);
			var html = "";
			var ca = data.data;
			for (var i = 0; i < ca.length; i++) { // 遍历data数组
				var ls = ca[i];
				html += domenus(ls);
			}
			$("#menu").html(html); // 在html页面id=test的标签里显示html内容 */
		}
	})
}

/* 菜单数据回填测试 */
function domenus(ls) {

	var m = "<ul class='nav navbar-nav mt10 ml10'>" + "<li><a onclick="
			+ ls.url + ">" + ls.name + "</a></li>" + "</ul>";
	return m;

}

/** 关于企业的人员管理中级跳转菜单的js方法 */
/**
 * qufen为2的为待审核，是不能发布职位的，注册成功默认是2 qufen为1的为审核通过可以发布职位 qufen 为3的为VIP用户，可以有一些增强功能
 * qunfen 为4的为审核失败的用户，需要再次提交申请 暂时作为设想，VIP用户可以发布多条职位待发布职位权限建设完成后实现
 * 需要说明的是qunfen所在的表是conpany 请广大读者注意区分
 */
function pdsh() {// 待审核
	var qufen = 2;
	person(qufen);

}
function pshp() {// 审核通过

	var qufen = 1;
	person(qufen);
}

function pshr() {// 审核失败

	var qufen = 4;
	person(qufen);
}

function pvip() {// vip用户

	var qufen = 3;
	person(qufen);
}

/** 人员的中级菜单查询 */

function person(qufen) {

	var params = {
		username : username,
		qufen : qufen
	}

	var url = "company/findCompanyByUserRoot";

	$.post(url, params, function(data) {
		if (data.state == 1) {

			console.log(data);
			var html = "";
			var ca = data.data;
			for (var i = 0; i < ca.length; i++) { // 遍历data数组
				var ls = ca[i];

				html += doperson(ls);
			}
			$("#tr").html(html); // 在html页面id=test的标签里显示html内容
		}
	})

}
/** *人员数据的回填 */
function doperson(ls) {
	var a;
	if(ls.qufen==1){
		a="正常";
	}else if(ls.qufen==2){
		a="待审核";
	}else if(ls.qufen==3){
		a="VIP用户";
	}else if(ls.qufen==4){
		a="审核失败";
	}
	var tds = "<tr>" + "<td>" + ls.username + "</td>" + "<td>" + ls.boss
			+ "</td>" + "<td>" + ls.name + "</td>" + "<td>" + ls.tel + "</td>"
			+ "<td>" + ls.createtime + "</td>" + "<td>" + a + "</td>"
			+ "<td><a onclick='dopersonpass(" + ls.id + ")'>通过</a>"
			+ "&nbsp;<a onclick='dopersonres(" + ls.id + ")'>拒绝</a>" + "</td>"
			+ "</tr>";
	return tds;
}

/** 人员通过请求 */

function dopersonpass(id) {

	var qufen = 1;
	var params = {
		id : id,
		qufen : qufen
	}
	var url = "company/updateByQuFen";
	$.post(url, params, function(data) {
		if (data.state == 1) {
			alert("通过操作执行成功！")
			location.reload();
		} else {
			alert("通过操作执行失败");

		}
	});

}

/** 人员拒绝请求 */

function dopersonres(id) {


	var qufen = 4;
	var params = {
		id : id,
		qufen : qufen
	}
	var url = "company/updateByQuFen";
	$.post(url, params, function(data) {
		if (data.state == 1) {
			alert("通过操作执行成功！")
			location.reload();
		} else {
			alert("通过操作执行失败");

		}
	});
}
