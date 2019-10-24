package com.jianz.degeapp.vo;

import java.io.Serializable;
/**
 * vo:
 * 借助此对象封装服务端的影响数据
 * 1)响应的状态码(1表示正常数据,0表示异常数据)
 * 2)响应信息 (呈现给用户的信息)
 * 3)响应数据 (要呈现的正常数据)
 * 4)...
 */

import lombok.Data;
@Data
public class JsonResult implements Serializable {
	private static final long serialVersionUID = 1152147947827081153L;
	/**状态码*/
	private int state=1;//1表示SUCCESS,0表示ERROR
	/**状态信息*/
	private String message="ok";
	/**正确数据*/
	private Object data;
	public JsonResult() {}
	public JsonResult(String message){
		this.message=message;
	}
	/**一般查询时调用，封装查询结果*/
	public JsonResult(Object data) {
		this.data=data;
	}
	/**出现异常时时调用*/
	public JsonResult(Throwable t){
		this.state=0;
		this.message=t.getMessage();
	}
	

}
