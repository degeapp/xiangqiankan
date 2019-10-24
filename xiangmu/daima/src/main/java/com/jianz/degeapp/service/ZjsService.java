package com.jianz.degeapp.service;

import java.util.List;
import java.util.Map;

import com.jianz.degeapp.entity.Zjs;

public interface ZjsService {
	int insertObject(Zjs entity);
	
	
	List<Map<String, Object>> findObjectsByUserName(String username);
	
	int findCountByUserName(String username);
	
	List<Map<String, Object>> findObjectsByMid(String mid);
	
	int deleteObjectByUserName (String username,String mid);


	void doinsertmap(String id, String username);


}
