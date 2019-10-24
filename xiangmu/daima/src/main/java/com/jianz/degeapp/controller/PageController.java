package com.jianz.degeapp.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class PageController {
	/**  */
	@RequestMapping("doIndex")
	public String doIndex() {
		return "index2";
	}

	/** 企业登入主页 */
	@RequestMapping("doCompany")
	public String doCompany() {
		return "company2";
	}

	/** 详情页 */
	@RequestMapping("doXqy")
	public String doXqy() {
		return "xqy";
	}

	/** 企业修改页 */
	@RequestMapping("doUpdate")
	public String doUpdate() {
		return "update";
	}

	/** 注册页 */
	@RequestMapping("doReject")
	public String doReject() {
		return "reject";
	}

	/** 登入页 */
	@RequestMapping("doLogin")
	public String doLogin() {
		return "login";
	}

	/** 个人我的兼职列表页面 */
	@RequestMapping("doPersonjz")
	public String doPerson() {
		return "personjz";
	}

	@RequestMapping("doCompany1")
	public String doCompany1() {
		return "company";
	}

	@RequestMapping("doQiyerenz")
	public String doQiyerenz() {
		return "qiyerenz";
	}

	@RequestMapping("doTijao")
	public String doTijao() {
		return "tijao";
	}

	/** 企业修改密码 */
	@RequestMapping("doRepassw")
	public String doRepassw() {
		return "repassw";
	}

	/** 个人修改密码 */
	@RequestMapping("doRepwd")
	public String doRepwd() {
		return "repwd";
	}

	/** 个人我的中心页面 */
	@RequestMapping("doPersonmin")
	public String doPersonmin() {
		return "persomin";
	}

	/** 修改个人信息页面 */
	@RequestMapping("doUpdateuser")
	public String doUpdateuser() {
		return "updateuser";
	}

	/** 企业报名信息详情页 */
	@RequestMapping("doBmxq")
	public String doBmxq() {
		return "bmxq";
	}
	
	
	
	/**关于我们页*/
	@RequestMapping("doAbout")
	public String doAbout() {
		
		return "about";
		
	}
	
	/**超级管理员人员管理段**/
	@RequestMapping("doPersongl")
	public String doPersongl() {
		
		return "persongl";
	}
	
	
	
	
	@RequestMapping("{page}")
	public String pages(@PathVariable String page) {
		   return "admin/index/"+page;	
	}

}
