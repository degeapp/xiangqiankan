package com.jianz.degeapp.dao;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.jianz.degeapp.entity.User;

@Mapper
public interface UserDao {
	int insertObject(User entity);
	int findObjectByUserName(String username);
	User findUserByUserName(String username);
	int updatePassword(
			@Param("password")String password,
			@Param("salt")String salt,
			@Param("username")String username);
}
