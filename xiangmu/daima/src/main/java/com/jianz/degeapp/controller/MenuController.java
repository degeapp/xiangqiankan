package com.jianz.degeapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jianz.degeapp.service.MenuService;
import com.jianz.degeapp.vo.JsonResult;

@RestController
@RequestMapping("/menu")
public class MenuController {
	@Autowired
	MenuService menuService;

	@RequestMapping("/dofindMenuByUserName")
	public JsonResult dofindMenuByUserName(String username) {

		return new JsonResult(menuService.findMenuByUserName(username));

	}

}
