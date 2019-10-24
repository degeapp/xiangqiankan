package com.jianz.degeapp.config;

import javax.servlet.Filter;

import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.filter.DelegatingFilterProxy;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;


@Configuration
public class SpringWebConfig implements WebMvcConfigurer{//web.xml

	 //配置spring mvc 拦截器
	 @Override
	 public void addInterceptors(InterceptorRegistry registry) {
		 registry.addInterceptor(new TimeAccessInterceptor())
		         .addPathPatterns("/user/doLogin");
	 }
	 @Bean
	 public FilterRegistrationBean<Filter> newFilterRegistrationBeand() {
		 //创建过滤器注册器
		 FilterRegistrationBean<Filter> rBean=
		 new FilterRegistrationBean<>();
		 //创建过滤器对象
		 DelegatingFilterProxy filterProxy=
		 new DelegatingFilterProxy("shiroFilterFactory");
		 rBean.setFilter(filterProxy);
		 //配置过滤器映射路径
		 rBean.addUrlPatterns("/*");
		 return rBean;
	 }
}
