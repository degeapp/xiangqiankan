package com.jianz.degeapp.service;

import java.util.List;
import java.util.Map;

import com.jianz.degeapp.entity.Izuser;

public interface IzUserService {
	/** 根据用户名查询个人信息 */
	List<Map<String, Object>> findIzUserByUserName(String username);
	/** 修改个人信息 */
	int updateByUserName(Izuser entity);
}
