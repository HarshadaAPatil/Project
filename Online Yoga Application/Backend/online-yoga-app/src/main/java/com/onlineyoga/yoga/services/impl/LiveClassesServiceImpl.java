package com.onlineyoga.yoga.services.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.onlineyoga.yoga.entity.LiveClasses;
import com.onlineyoga.yoga.entity.User;
import com.onlineyoga.yoga.exception.ResourceNotFound;
import com.onlineyoga.yoga.payloads.LiveClassDto;
import com.onlineyoga.yoga.payloads.UserDto;
import com.onlineyoga.yoga.repositories.LiveClassesRepo;
import com.onlineyoga.yoga.services.LiveClassService;

@Service
public class LiveClassesServiceImpl implements LiveClassService {

	@Autowired
	private LiveClassesRepo liveRepo;

	@Override
	public LiveClassDto addLiveClass(LiveClassDto liveClassDto) {
		LiveClasses user=liveRepo.save(this.dtoToLiveClass(liveClassDto));
		return this.liveClassTodto(user);
	}

	@Override
	public LiveClassDto updateLiveClass(LiveClassDto liveClassDto, Integer liveClassId) {
		LiveClasses user=this.liveRepo.findById(liveClassId).orElseThrow(()-> new ResourceNotFound("User"," Id ",liveClassId));
//		user.setLiveClassId(userDto.getLiveClassId());
		user.setYogaType(liveClassDto.getYogaType());;
		user.setDescription(liveClassDto.getDescription());
		user.setStartTime(liveClassDto.getStartTime());
		user.setEndTime(liveClassDto.getEndTime());
		user.setPrice(liveClassDto.getPrice());
		user.setImg(liveClassDto.getImg());
		LiveClasses updatedUser=this.liveRepo.save(user);
		LiveClassDto userDto1=this.liveClassTodto(updatedUser);
		return userDto1;
	}

	@Override
	public LiveClassDto getLiveClassById(Integer liveClassId) {
			LiveClasses user=this.liveRepo.findById(liveClassId).orElseThrow(()-> new ResourceNotFound("User"," Id ",liveClassId));
		
		return this.liveClassTodto(user);
	}

	@Override
	public List<LiveClassDto> getLiveClasses() {
		// TODO Auto-generated method stub
				List<LiveClasses> users= this.liveRepo.findAll();
				List<LiveClassDto> userDto= users.stream().map(user->this.liveClassTodto(user)).collect(Collectors.toList());
				
				return userDto;
	}
	
	public LiveClasses dtoToLiveClass(LiveClassDto userDto) {
		LiveClasses user=new LiveClasses();
		user.setLiveClassId(userDto.getLiveClassId());
		user.setYogaType(userDto.getYogaType());;
		user.setDescription(userDto.getDescription());
		user.setStartTime(userDto.getStartTime());
		user.setEndTime(userDto.getEndTime());
		user.setPrice(userDto.getPrice());
		user.setImg(userDto.getImg());
		return user;
	}
	
	public LiveClassDto liveClassTodto(LiveClasses userDto) {
		LiveClassDto user=new LiveClassDto();
		user.setLiveClassId(userDto.getLiveClassId());
		user.setYogaType(userDto.getYogaType());;
		user.setDescription(userDto.getDescription());
		user.setStartTime(userDto.getStartTime());
		user.setEndTime(userDto.getEndTime());
		user.setPrice(userDto.getPrice());
		user.setImg(userDto.getImg());
		return user;
	}
	
}
