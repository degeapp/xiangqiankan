package com.jianz.degeapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.jianz.degeapp.entity.Message;
import com.jianz.degeapp.service.MessageService;
import com.jianz.degeapp.vo.JsonResult;

@Controller
@RequestMapping("/message/")
public class MessageController {
	@Autowired
	private MessageService messageService;

	@ResponseBody
	@RequestMapping("doInsertObject")
	public JsonResult doInsertObject(Message entity) {
		messageService.insertObject(entity);
		return new JsonResult("insert ok");
	}

	@RequestMapping("doDeleteObject")
	@ResponseBody
	public JsonResult doDeleteObject(Integer id) {
		messageService.deleteObject(id);
		return new JsonResult("delete ok");
	}

	@RequestMapping("doFindObjects")
	@ResponseBody
	public JsonResult doFindObjects(Integer zt) {
		return new JsonResult(messageService.findObjects(zt));
	}

	@RequestMapping("updateById")
	@ResponseBody
	public JsonResult updateById(Message message) {

		messageService.UpdateById(message);
		return new JsonResult("update ok");
	}

	@RequestMapping("doFindObjectById")
	@ResponseBody
	public JsonResult doFindObjectById(Integer id) {
		System.out.println(messageService.findObjcetById(id));
		return new JsonResult(messageService.findObjcetById(id));
	}

	@RequestMapping("doFindObjectsByUserName")
	@ResponseBody
	public JsonResult doFindObjectsByUserName(String username, Integer zt) {
		return new JsonResult(messageService.findObjectsByUserName(username, zt));
	}

	/** 企业页面的模糊查询 */
	@RequestMapping("findObjectsByUser")
	@ResponseBody
	public JsonResult findObjectsByUser(String username, String name) {

		return new JsonResult(messageService.findObjectsByUser(username, name));
	}

	/** 根据企业的用户名查询所有的职位 */

	@RequestMapping("doFindObjectsByName")
	@ResponseBody
	public JsonResult doFindObjectsByName(String username) {
		return new JsonResult(messageService.findObjectsByName(username));
	}

	/** 职位 上下架处理 */
	@RequestMapping("updateZtById")
	@ResponseBody
	public JsonResult updateZtById(Integer id, Integer zt) {

		messageService.UpdateZtById(id, zt);
		return new JsonResult("update ok");

	}

}
