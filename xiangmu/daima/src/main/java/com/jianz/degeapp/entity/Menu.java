package com.jianz.degeapp.entity;

import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class Menu {
	private Integer id;// 菜单id
	private String name;// 菜单名称
	private String url;// 菜单路径
	private String username;// 用户名

}
