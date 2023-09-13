package com.onlineyoga.yoga;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.onlineyoga.yoga.repositories.UserRepo;

@SpringBootTest
class OnlineYogaAppApplicationTests {

	@Autowired
	private UserRepo userRepo;
	
	@Test
	void contextLoads() {
	}
	
	@Test
	public void repoTest() {
		
		System.out.println("Class name : "+this.userRepo.getClass().getName());
		System.out.println("Package Name : "+this.userRepo.getClass().getPackageName());
	}

}
