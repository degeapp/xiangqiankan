package com.jianz.degeapp.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Update;

import com.jianz.degeapp.entity.Message;

@Mapper
public interface MessageDao {
	/** 添加招聘信息 */
	int insertObject(Message entity);

	/* 删除 */
	int deleteObject(Integer id);

	/**
	 * 查询信息
	 * 
	 * @param zt
	 */
	List<Map<String, Object>> findObjects(Integer zt);

	/** 修改数据表的信息 */
	int UpdateById(Message message);

	List<Map<String, Object>> findObjcetById(Integer id);

	/* 根据企业登录username */
	List<Map<String, Object>> findObjectsByUserName(@Param("username") String username, @Param("zt") Integer zt);

	/** 企业职位展示所有 */

	List<Map<String, Object>> findObjectsByName(@Param("username") String username);

	/** 企业端的模糊查询 */
	List<Map<String, Object>> findObjectsByUser(@Param("username") String username, @Param("name") String name);

	/** 更改职位的状态信息 */
	int UpdateZtById(Integer id, Integer zt);

}
