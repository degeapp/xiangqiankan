package com.jianz.degeapp.service.impl;

import java.util.Date;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jianz.degeapp.dao.ZjsDao;
import com.jianz.degeapp.entity.Zjs;
import com.jianz.degeapp.service.ZjsService;
import com.jianz.degeapp.util.Address;

@Service
public class ZjsServiceImpl implements ZjsService {
	@Autowired
	ZjsDao zjsDao;

	@Override
	public int insertObject(Zjs entity) {
		System.out.println(new Date().getTime());
		int rows = zjsDao.insertObject(entity);
		return rows;
	}

	@Override
	public List<Map<String, Object>> findObjectsByUserName(String username) {

		return zjsDao.findObjectsByUserName(username);
	}

	@Override
	public int findCountByUserName(String username) {
		int rows = zjsDao.findCountByUserName(username);
		return rows;
	}

	@Override
	public List<Map<String, Object>> findObjectsByMid(String mid) {

		return zjsDao.findObjectsByMid(mid);
	}

	@Override
	public int deleteObjectByUserName(String username, String mid) {
		int rows = zjsDao.deleteObjectByUserName(username, mid);
		return rows;
	}

	@Override
	public void doinsertmap(String id,String username) {
			
		String ip = Address.getaddIp();
		
		System.out.println("-------------------------------------");
		System.out.println("ip地址是-------------"+ip);
		String add = Address.getAddressa(ip);
		System.out.println("add++++++++++++++++++++++++++++++++"+add);
		
		int  rows=zjsDao.doinsertmap(id,ip,add,username);
		//System.out.println(rows+ip+add);
		
		
		
	}



}
