package com.jianz.degeapp.service;

import java.util.List;
import java.util.Map;

import com.jianz.degeapp.entity.Company;

public interface CompanyService {
	List<Map<String,Object>> findCompanyByUserName(String username);
	int updateCompanyByUserName(Company entity);
	List<Map<String,Object>> findCompanyByUserRoot(String qufen);
	int UpdateZtById(String qufen,Integer id);
}
