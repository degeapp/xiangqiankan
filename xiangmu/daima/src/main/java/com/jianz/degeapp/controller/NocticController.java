package com.jianz.degeapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jianz.degeapp.entity.Nocite;
import com.jianz.degeapp.service.NocticeService;
import com.jianz.degeapp.vo.JsonResult;

@RestController
@RequestMapping("/noctice/")
public class NocticController {

	@Autowired
	private NocticeService noticeservice;
	/**文件的写入*/
	
	@RequestMapping("insertObject")
	public JsonResult insertObject(Nocite nocite) {
		System.out.println(nocite);
		return  new JsonResult(noticeservice.insertObject(nocite));
	}
	@RequestMapping("findObject")
	public JsonResult findObject() {
	return new JsonResult(noticeservice.findObject());
	}
	
}
