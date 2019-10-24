package com.jianz.degeapp.service;


import com.jianz.degeapp.entity.User;

public interface UserService {
	int insertObject(User entity);
	int findObjectByUserName(String username);
	User findUserByUserName(String username);
	int updatePassword(String password,
	           String newPassword,
	           String cfgPassword);
}
