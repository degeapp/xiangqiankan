package com.jianz.degeapp.service;

import java.util.List;
import java.util.Map;


import com.jianz.degeapp.entity.Message;

public interface MessageService {
	/** 添加招聘信息 */
	int insertObject(Message entity);
	int deleteObject(Integer id);
	List<Map<String, Object>> findObjects(Integer zt);
	/** 修改信息表中的信息 */
	int UpdateById(Message message);
	List<Map<String,Object>> findObjcetById(Integer id);
	
	
	/*根据企业登录username*/
	List<Map<String, Object>> findObjectsByName(String username);

	/**根据用户名和状态信息进行查询*/
	List<Map<String, Object>> findObjectsByUserName(String username,Integer zt);

/**企业职位的模糊查询*/
	
	List<Map<String, Object>> findObjectsByUser(String username,String name);

	/** 更改职位的状态信息 */
	int UpdateZtById(Integer id, Integer zt);

}
