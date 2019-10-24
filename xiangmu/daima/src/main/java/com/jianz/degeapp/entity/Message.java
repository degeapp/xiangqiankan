package com.jianz.degeapp.entity;
/**
 * 信息表*/

import java.io.Serializable;
import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Data;
import lombok.ToString;

@Data
@ToString
public class Message implements Serializable {

	private static final long serialVersionUID = -6062182115391243504L;
	private Integer id;
	private String name;
	private Date createtime;
	private String address;
	private Integer number;
	private String tel;
	private String boss;
	private String pay;
	private Double money;
	private String publish;
	private String status;
	private String classw;
	private String worktime;
	private String context;
	private String requirement;
	private String username;
	private Integer zt;

}
