package com.jianz;

import org.junit.Test;

import com.jianz.degeapp.util.Address;

public class testDW {

	
	@Test
	public void testMap() {
		
		/*
		 * Address Addr = new Address();
		 * 
		 * String addr = Addr.getAddress(); System.out.println(addr);
		 */
		  
		  String ip = Address.getaddIp();
		  System.out.println("ip地址为"+ip);
		  System.out.println("------------------------");
		  String addre = Address.getAddressa(ip);
		  System.out.println("地址串是"+addre);
		  
		
	}
	
	
}
