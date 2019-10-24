package com.jianz.degeapp.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jianz.degeapp.dao.CompanyDao;
import com.jianz.degeapp.entity.Company;
import com.jianz.degeapp.service.CompanyService;

@Service
public class CompanyServiceImpl implements CompanyService {
	@Autowired
	private CompanyDao companyDao;

	@Override
	public List<Map<String, Object>> findCompanyByUserName(String username) {
		List<Map<String, Object>> map = companyDao.findCompanyByUserName(username);
		return map;
	}

	@Override
	public int updateCompanyByUserName(Company entity) {
		int rows = companyDao.updateCompanyByUserName(entity);
		return rows;
	}

	@Override
	public List<Map<String, Object>> findCompanyByUserRoot(String qufen) {
		return companyDao.findCompanyByUserRoot(qufen);
	}

	/** 更新管理员操作 */
	@Override
	public int UpdateZtById(String qufen,Integer id) {

		return companyDao.UpdateZtById(qufen,id);
	}

}
