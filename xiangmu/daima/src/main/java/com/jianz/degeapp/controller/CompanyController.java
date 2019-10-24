package com.jianz.degeapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.jianz.degeapp.entity.Company;
import com.jianz.degeapp.service.CompanyService;
import com.jianz.degeapp.vo.JsonResult;

@Controller
@RequestMapping("/company/")
public class CompanyController {
	
	@Autowired
	private CompanyService companyService;
	@ResponseBody
	@RequestMapping("doFindCompanyByUserName")
	public JsonResult doFindCompanyByUserName(String username) {
		return new JsonResult(companyService.findCompanyByUserName(username)); 
	}
	@ResponseBody
	@RequestMapping("doUpdateCompanyByUserName")
	public JsonResult doUpdateCompanyByUserName(Company entity) {
		companyService.updateCompanyByUserName(entity);
		return new JsonResult("update ok");
	}
	@RequestMapping("findCompanyByUserRoot")
	@ResponseBody
	public JsonResult findCompanyByUserRoot(String qufen) {
		
		return new JsonResult(companyService.findCompanyByUserRoot(qufen));
		
	}
	@RequestMapping("updateByQuFen")
	@ResponseBody
	public JsonResult updateByQuFen(String qufen,Integer id) {
		companyService.UpdateZtById(qufen, id);
		return new JsonResult("update ok");
	}
	
	
}
