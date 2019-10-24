package com.jianz.degeapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.jianz.degeapp.entity.Izuser;
import com.jianz.degeapp.service.IzUserService;
import com.jianz.degeapp.vo.JsonResult;

@Controller
@RequestMapping("/izUser/")
public class IzUserController {
	
	@Autowired
	private IzUserService izUserService;
	
	@ResponseBody
	@RequestMapping("doFindIzUserByUserName")
	public JsonResult doFindIzUserByUserName(String username) {
		return new JsonResult(izUserService.findIzUserByUserName(username));
	}
	@ResponseBody
	@RequestMapping("doUpdateByUserName")
	public JsonResult doUpdateByUserName(Izuser entity) {
		izUserService.updateByUserName(entity);
		return new JsonResult("update ok");
	}
}
