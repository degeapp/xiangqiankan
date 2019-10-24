package com.jianz.degeapp.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jianz.degeapp.dao.IzUserDao;
import com.jianz.degeapp.entity.Izuser;
import com.jianz.degeapp.service.IzUserService;
@Service
public class IzUserServiceImpl implements IzUserService {
	@Autowired
	private IzUserDao izUserDao;
	@Override
	public List<Map<String, Object>> findIzUserByUserName(String username) {
		return izUserDao.findIzUserByUserName(username);
	}
	@Override
	public int updateByUserName(Izuser entity) {
		int rows = izUserDao.updateByUserName(entity);
		return rows;
	}

}
