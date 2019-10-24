package com.jianz.degeapp.config;

import java.util.Calendar;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.web.servlet.HandlerInterceptor;

import com.jianz.degeapp.exception.ServiceException;

/**
 * Spring MVC中拦截器
 * 
 * @author Administrator
 */
public class TimeAccessInterceptor implements HandlerInterceptor {
	/**
	 * preHandle在控制层目标方法执行之前执行
	 */
	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
			throws Exception {

		// 获取java中的日历对象
		Calendar c = Calendar.getInstance();
		c.set(Calendar.HOUR_OF_DAY, 8);
		c.set(Calendar.MINUTE, 0);
		c.set(Calendar.SECOND, 0);
		long start = c.getTimeInMillis();
		c.set(Calendar.HOUR_OF_DAY, 23);
		long end = c.getTimeInMillis();
		long cTime = System.currentTimeMillis();
		if (cTime < start || cTime > end)
			throw new ServiceException("不在访问时间之内");
		return true;
	}
}
