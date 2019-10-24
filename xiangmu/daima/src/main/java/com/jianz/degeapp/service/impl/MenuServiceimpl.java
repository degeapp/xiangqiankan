package com.jianz.degeapp.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jianz.degeapp.dao.MenuDao;
import com.jianz.degeapp.service.MenuService;

@Service
public class MenuServiceimpl implements MenuService {
	@Autowired
	MenuDao menudao;

	@Override
	public List<Map<String, Object>> findMenuByUserName(String username) {
		return menudao.findMenuByUserName(username);
	}

}
