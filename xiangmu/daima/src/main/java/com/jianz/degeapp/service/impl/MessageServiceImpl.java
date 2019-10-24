package com.jianz.degeapp.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.jianz.degeapp.dao.MessageDao;
import com.jianz.degeapp.dao.ZjsDao;
import com.jianz.degeapp.entity.Message;
import com.jianz.degeapp.exception.ServiceException;
import com.jianz.degeapp.service.MessageService;

@Service
public class MessageServiceImpl implements MessageService {
	@Autowired
	private MessageDao messageDao;
	@Autowired
	private ZjsDao zjsdao;

	/** 添加招聘信息 */
	@Override
	public int insertObject(Message entity) {
		// 1.验证参数合法性
		if (entity == null)
			throw new ServiceException("保存对象不能为空");
		if (StringUtils.isEmpty(entity.getName()))
			throw new ServiceException("名称不能为空");
		// 2.保存数据
		int rows;
		try {
			rows = messageDao.insertObject(entity);
		} catch (Exception e) {
			e.printStackTrace();
			throw new ServiceException("保存失败");
		}
		// 3.返回参数
		return rows;
	}

	@Override
	public int deleteObject(Integer id) {

		// 2.执行删除 这个是职位的删除  删除职位的同时也删除 报名信息表中的职位id对应的报名信息
		 zjsdao.deleteByMid(id);
		 int rows =messageDao.deleteObject(id);
		
		// 3.判定结果
		if (rows == 0)
			throw new ServiceException("记录可能已经不存在");
		return rows;
	}

	@Override
	public List<Map<String, Object>> findObjects(Integer zt) {

		List<Map<String, Object>> list = messageDao.findObjects(zt);
		/*
		 * if (list == null || list.size() == 0) { throw new
		 * ServiceException("没有找到对应的菜单~"); }
		 */

		return list;
	}

	@Override
	public int UpdateById(Message message) {
		// 1.合法验证
		if (message == null)
			throw new ServiceException("保存对象不能为空");
		if (StringUtils.isEmpty(message.getName()))
			throw new ServiceException("姓名名不能为空");

		// 2.更新数据
		int rows = messageDao.UpdateById(message);
		if (rows == 0)
			throw new ServiceException("记录可能已经不存在");
		// 3.返回数据
		return rows;

	}

	@Override
	public List<Map<String, Object>> findObjcetById(Integer id) {
		return messageDao.findObjcetById(id);
	}

	@Override
	public List<Map<String, Object>> findObjectsByUserName(String username, Integer zt) {

		return messageDao.findObjectsByUserName(username, zt);
	}

	/** 企业职位页m面上面的查询 */
	@Override
	public List<Map<String, Object>> findObjectsByUser(String username, String name) {
		return messageDao.findObjectsByUser(username, name);
	}

	@Override
	public List<Map<String, Object>> findObjectsByName(String username) {

		return messageDao.findObjectsByName(username);
	}

	@Override
	public int UpdateZtById(Integer id, Integer zt) {

		return messageDao.UpdateZtById(id, zt);
	}

	
	

}
