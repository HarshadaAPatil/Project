package com.onlineyoga.yoga.services;

import java.util.List;

import com.onlineyoga.yoga.payloads.UserDto;

public interface UserService {
	
	UserDto createUser(UserDto user);
	UserDto updateUser(UserDto user,Integer userid);
	UserDto getUserById(Integer userid);
	List<UserDto> getAllUSer();
	void deleteUser(Integer userId);
	UserDto userLogin(String name,String password);
}
