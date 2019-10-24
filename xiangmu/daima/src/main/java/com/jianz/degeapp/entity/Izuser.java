package com.jianz.degeapp.entity;

import java.io.Serializable;

import lombok.Data;

/**
 * 求职者信息表*/
@Data
public class Izuser  implements Serializable{

	
	private static final long serialVersionUID = 7837316539303453847L;
	private Integer id;
	private String username;
	private String name;
	private String phone;
	private String gender;
	private String qq;
	private String mail;
	private String healthy;
	private String learn;
	private String jobin;
	private String city;
	private String experience;

	
	
	
}
