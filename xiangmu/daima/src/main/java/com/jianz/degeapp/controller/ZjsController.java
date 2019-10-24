package com.jianz.degeapp.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.jianz.degeapp.entity.Zjs;
import com.jianz.degeapp.service.ZjsService;
import com.jianz.degeapp.vo.JsonResult;

@Controller
@RequestMapping("/zjs/")
public class ZjsController {
	@Autowired
	private ZjsService zjsService;
	@ResponseBody
	@RequestMapping("doInsertObject")
	public JsonResult doInsertObject(Zjs entity) {
		System.out.println("写入对象是"+entity);
		zjsService.insertObject(entity);
		return new JsonResult("insert ok");
	}
	
	
	@ResponseBody
	@RequestMapping("findObjectsByUserName")	
	public JsonResult findObjectsByUserName(String username) {
		List<Map<String, Object>> findObjectsByUserName = zjsService.findObjectsByUserName(username);
		return new JsonResult(findObjectsByUserName);
	}
	@ResponseBody
	@RequestMapping("findCountByUserName")
	public JsonResult findCountByUserName(String username) {
		return new JsonResult(zjsService.findCountByUserName(username));
	}
	@ResponseBody
	@RequestMapping("findObjectsByMid")
	public JsonResult findObjectsByMid(String mid) {	
		return new JsonResult(zjsService.findObjectsByMid(mid));
	}
	@ResponseBody
	@RequestMapping("doDeleteObjectByUserName")
	public JsonResult doDeleteObjectByUserName(String username,String mid) {
		zjsService.deleteObjectByUserName(username, mid);
		return new JsonResult("delete ok");
	}
	/**查询是否已经进行过报名的数据
	 */
	/*
	 * @RequestMapping("findmindByusername")
	 * 
	 * @ResponseBody public JsonResult dofidnmidByusername(String username) {
	 * 
	 * return new JsonResult(zjsService.findmidBysuername(username));
	 * 
	 * }
	 */
	
	
	/**定位服务*/
	@ResponseBody
	@RequestMapping("doinsertmap")
	public JsonResult doinsertmap(String id,String username) {
		System.out.println(id+username);
		 zjsService.doinsertmap(id,username);
		return new JsonResult("签到成功!");
	}
	
}
