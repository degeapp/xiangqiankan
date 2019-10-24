package com.jianz.degeapp.service.impl;

import java.util.UUID;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.crypto.hash.SimpleHash;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.jianz.degeapp.dao.CompanyDao;
import com.jianz.degeapp.dao.IzUserDao;
import com.jianz.degeapp.dao.UserDao;
import com.jianz.degeapp.entity.User;
import com.jianz.degeapp.exception.ServiceException;
import com.jianz.degeapp.service.UserService;

@Service
public class UserServiceImpl implements UserService {
	@Autowired
	private UserDao userDao;
	@Autowired
	private IzUserDao izUserDao;
	@Autowired
	private CompanyDao companyDao;

	@Override
	public int insertObject(User entity) {
		// 1.验证数据合法性
		if (entity == null)
			throw new ServiceException("保存对象不能为空");
		if (StringUtils.isEmpty(entity.getUsername()))
			throw new ServiceException("用户名不能为空");
		if (StringUtils.isEmpty(entity.getPassword()))
			throw new ServiceException("密码不能为空");
		// 2.将数据写入数据库
		String salt = UUID.randomUUID().toString();
		entity.setSalt(salt);
		// 加密
		SimpleHash sHash = new SimpleHash("MD5", entity.getPassword(), salt, 1);
		entity.setPassword(sHash.toHex());
		int rows = userDao.insertObject(entity);
		if ("1".equals(entity.getQufen())) {
			izUserDao.insertObjectUserName(entity.getUsername());
		} else {
			Integer qufen = 2;
			companyDao.insertObjectUserName(entity.getUsername(), qufen);
		}

		// 3.返回结果
		return rows;
	}

	@Override
	public int findObjectByUserName(String username) {
		int rows = userDao.findObjectByUserName(username);
		return rows;
	}

	@Override
	public User findUserByUserName(String username) {
		return userDao.findUserByUserName(username);
	}

	@Override
	public int updatePassword(String password, String newPassword, String cfgPassword) {
		// 1.判定新密码与密码确认是否相同
		if (StringUtils.isEmpty(newPassword))
			throw new IllegalArgumentException("新密码不能为空");
		if (StringUtils.isEmpty(cfgPassword))
			throw new IllegalArgumentException("确认密码不能为空");
		if (!newPassword.equals(cfgPassword))
			throw new IllegalArgumentException("两次输入的密码不相等");
		// 2.判定原密码是否正确
		if (StringUtils.isEmpty(password))
			throw new IllegalArgumentException("原密码不能为空");
		// 获取登陆用户
		User user = (User) SecurityUtils.getSubject().getPrincipal();
		SimpleHash sh = new SimpleHash("MD5", password, user.getSalt(), 1);
		if (!user.getPassword().equals(sh.toHex()))
			throw new IllegalArgumentException("原密码不正确");
		// 3.对新密码进行加密
		String salt = UUID.randomUUID().toString();
		sh = new SimpleHash("MD5", newPassword, salt, 1);
		// 4.将新密码加密以后的结果更新到数据库
		int rows = userDao.updatePassword(sh.toHex(), salt, user.getUsername());
		if (rows == 0)
			throw new ServiceException("修改失败");
		return rows;
	}

}
