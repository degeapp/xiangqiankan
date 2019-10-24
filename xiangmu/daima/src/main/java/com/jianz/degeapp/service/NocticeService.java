package com.jianz.degeapp.service;

import java.util.List;
import java.util.Map;

import com.jianz.degeapp.entity.Nocite;

public interface NocticeService {

	   int 	insertObject(Nocite nocite);
	 
	   List<Map<String, Object>> findObject();
}
