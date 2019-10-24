package com.jianz.degeapp.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.jianz.degeapp.entity.Company;
@Mapper
public interface CompanyDao {
	List<Map<String,Object>> findCompanyByUserName(String username);
	int updateCompanyByUserName(Company entity);
	
	int insertObjectUserName(String username, Integer qufen);

	List<Map<String,Object>> findCompanyByUserRoot(String qufen);
	
	
	int UpdateZtById(String qufen,Integer id);

}
