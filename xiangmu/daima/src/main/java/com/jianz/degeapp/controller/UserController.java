package com.jianz.degeapp.controller;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.subject.Subject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.jianz.degeapp.entity.User;
import com.jianz.degeapp.service.UserService;
import com.jianz.degeapp.vo.JsonResult;

@Controller
@RequestMapping("/user/")
public class UserController {
	@Autowired
	private UserService userService;
	@ResponseBody
	@RequestMapping("doInsertObject")
	public JsonResult doInsertObject(User entity) {
		userService.insertObject(entity);
		return new JsonResult("insert ok");
	}
	@ResponseBody
	@RequestMapping("doFindObjectByUserName")
	public JsonResult doFindObjectByUserName(String username) {
		return new JsonResult(userService.findObjectByUserName(username));
	}
	@ResponseBody
	@RequestMapping("doLogin")
	public JsonResult doLogin(String username,String password) {
		//1.获取Subject对象
		Subject subject=SecurityUtils.getSubject();
		//2.通过Subject提交用户信息,交给shiro框架进行认证操作
		//2.1对用户进行封装
		UsernamePasswordToken token = 
				new UsernamePasswordToken(
						username,
						password);
		//2.2对用户信息进行身份认证
		subject.login(token);
		return new JsonResult(userService.findUserByUserName(username));
	}
	@ResponseBody
	@RequestMapping("doFindUserByUserName")
	public JsonResult doFindUserByUserName(String username) {
		return new JsonResult(userService.findUserByUserName(username));
	}
	
	
	
	
	
	
	@RequestMapping("doUpdatePassword")
	@ResponseBody
	public JsonResult doUpdatePassword(
			 String pwd,
			 String newPwd,
			 String cfgPwd) {
		 userService.updatePassword(pwd, newPwd, cfgPwd);
		 return new JsonResult("update ok");
	}

	
}
