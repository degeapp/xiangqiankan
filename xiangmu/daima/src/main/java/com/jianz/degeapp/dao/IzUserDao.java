package com.jianz.degeapp.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.jianz.degeapp.entity.Izuser;
@Mapper
public interface IzUserDao {
	/** 根据用户名查询个人信息 */
	List<Map<String, Object>> findIzUserByUserName(String username);
	/** 修改个人信息 */
	int updateByUserName(Izuser entity);
	
	int insertObjectUserName(String username);
}
