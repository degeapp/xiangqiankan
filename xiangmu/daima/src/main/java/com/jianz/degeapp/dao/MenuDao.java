package com.jianz.degeapp.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface MenuDao {
	/**根据登录的用户名执行相关的菜单栏操作**/
	  List<Map<String, Object>>  findMenuByUserName(String username);
	
}
