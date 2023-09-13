package com.onlineyoga.yoga.services.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.onlineyoga.yoga.entity.User;
import com.onlineyoga.yoga.exception.ResourceNotFound;
import com.onlineyoga.yoga.payloads.UserDto;
import com.onlineyoga.yoga.repositories.UserRepo;
import com.onlineyoga.yoga.services.UserService;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepo userRepo;
	@Override
	public UserDto createUser(UserDto userDto) {
		// TODO Auto-generated method stub
		User user=userRepo.save(this.dtoToUser(userDto));
		return this.userTodto(user);
	}

	@Override
	public UserDto updateUser(UserDto userDto, Integer userid) {
		User user=this.userRepo.findById(userid).orElseThrow(()-> new ResourceNotFound("User"," Id ",userid));
		user.setName(userDto.getName());;
		user.setEmail(userDto.getEmail());
		user.setPassword(userDto.getPassword());
		User updatedUser=this.userRepo.save(user);
		UserDto userDto1=this.userTodto(updatedUser);
		return userDto1;
	}

	@Override
	public UserDto getUserById(Integer userid) {
		User user=this.userRepo.findById(userid).orElseThrow(()-> new ResourceNotFound("User"," Id ",userid));
		
		return this.userTodto(user);
	}

	@Override
	public List<UserDto> getAllUSer() {
		// TODO Auto-generated method stub
		List<User> users= this.userRepo.findAll();
		List<UserDto> userDto= users.stream().map(user->this.userTodto(user)).collect(Collectors.toList());
		
		return userDto;
	}

	@Override
	public void deleteUser(Integer userId) {
		// TODO Auto-generated method stub
	User user=	this.userRepo.findById(userId).orElseThrow(()-> new ResourceNotFound("User"," Id ",userId));
		this.userRepo.delete(user);
	}
	
	public User dtoToUser(UserDto userDto) {
		User user=new User();
		user.setId(userDto.getId());
		user.setName(userDto.getName());;
		user.setEmail(userDto.getEmail());
		user.setPassword(userDto.getPassword());
		return user;
	}
	
	public UserDto userTodto(User userDto) {
		UserDto user=new UserDto();
		user.setId(userDto.getId());
		user.setName(userDto.getName());;
		user.setEmail(userDto.getEmail());
		user.setPassword(userDto.getPassword());
		return user;
	}

	@Override
	public UserDto userLogin(String email, String password) {
		
		return this.userTodto(userRepo.findByEmailAndPassword(email, password));
		
	}

}
