package com.jianz.degeapp.service;

import java.util.List;
import java.util.Map;

public interface MenuService {

	
	  List<Map<String, Object>>  findMenuByUserName(String username);
}
