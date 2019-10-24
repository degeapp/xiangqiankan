package com.jianz.degeapp.entity;

import java.io.Serializable;
import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Accessors(chain = true)
public class Nocite implements Serializable {

	private static final long serialVersionUID = 1L;
	private Integer id;//id
	private String title;//通知标题
	private String context;//通知内容
	private Date  createtime;//通知的发布时间
	private String publish;//发布人
	
}
