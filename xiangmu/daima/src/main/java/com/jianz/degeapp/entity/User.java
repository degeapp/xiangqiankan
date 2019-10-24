package com.jianz.degeapp.entity;

import java.io.Serializable;
import java.util.Date;

import lombok.Data;

@Data
public class User implements Serializable{
	private static final long serialVersionUID = 3192470673240058559L;
	private Integer id;
	private String username;
	private String password;
	private String salt;
	private String qufen;
	private Date createtime;
}
