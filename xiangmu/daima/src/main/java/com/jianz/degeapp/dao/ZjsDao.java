package com.jianz.degeapp.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.jianz.degeapp.entity.Zjs;

@Mapper
public interface ZjsDao  {
	int insertObject(Zjs entity);
	/*查询*/
	List<Map<String, Object>> findObjectsByUserName(String username);
	int findCountByUserName(String username);
	List<Map<String, Object>> findObjectsByMid(String mid);
	int deleteObjectByUserName (String username,String mid);
	
	/**删除中间表中的职位报名信息*/
	int deleteByMid(@Param("mid")Integer id);
	
	
	int doinsertmap(@Param("mid")String id, @Param("ip")String ip,@Param("add")String add,@Param("username") String username);
}
