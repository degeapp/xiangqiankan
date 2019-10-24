package com.jianz.degeapp.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.jianz.degeapp.entity.Nocite;

@Mapper
public interface NociteDao {

	/*通知写入*/
       int 	insertObject(Nocite nocite);
	/**查询所有通知，并且展现页面*/
       List<Map<String, Object>> findObject();
}
