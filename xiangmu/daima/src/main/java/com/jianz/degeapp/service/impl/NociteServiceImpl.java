package com.jianz.degeapp.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jianz.degeapp.dao.NociteDao;
import com.jianz.degeapp.entity.Nocite;
import com.jianz.degeapp.service.NocticeService;
@Service
public class NociteServiceImpl implements NocticeService {

	
	@Autowired
	 private NociteDao nocitedao;
	
	@Override
	public int insertObject(Nocite nocite) {
		return  nocitedao.insertObject(nocite);
	}

	@Override
	public List<Map<String, Object>> findObject() {
		return nocitedao.findObject();
	}

}
