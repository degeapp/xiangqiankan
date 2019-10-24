package com.jianz.degeapp.entity;

import java.io.Serializable;
import java.util.Date;

import lombok.Data;

@Data
public class Zjs implements Serializable{
	private static final long serialVersionUID = 36653706155466120L;
	private Integer id;
	private String username;
	private String mid;
	private Date createtime;
	private String ip;
	private String add;
	private Date qdtime;
}
