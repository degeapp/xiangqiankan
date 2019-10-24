package com.jianz.degeapp.entity;

import java.io.Serializable;

import lombok.Data;

/**企业信息表*/

@Data
public class Company implements Serializable{

	private static final long serialVersionUID = -5242017772183396356L;
	private Integer id;
	private String name;
	private String boss;
	private String tel;
	private String address;
	private String autherization;
	private String username;
	private String password;
	private String qufen;
	private String jianjie;
	
}
