package com.onlineyoga.yoga.services.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.onlineyoga.yoga.entity.Membership;
import com.onlineyoga.yoga.entity.User;
import com.onlineyoga.yoga.exception.ResourceNotFound;
import com.onlineyoga.yoga.payloads.MembershipDto;
import com.onlineyoga.yoga.payloads.UserDto;
import com.onlineyoga.yoga.repositories.MembershipRepo;
import com.onlineyoga.yoga.services.MembershipService;

@Service
public class MembershipServiceImpl implements MembershipService {

	@Autowired
	private MembershipRepo membershipRepo;
	
	@Override
	public MembershipDto addMembership(MembershipDto membership) {
		// TODO Auto-generated method stub
		Membership user=membershipRepo.save(this.dtoToMembership(membership));
		return this.membershipToDto(user);

	}

	@Override
	public MembershipDto updateMembership(MembershipDto membership, Integer membershipId) {
		Membership user=this.membershipRepo.findById(membershipId).orElseThrow(()-> new ResourceNotFound("User"," Id ",membershipId));
		user.setYogaType(membership.getYogaType());;
		user.setUserId(membership.getUserId());
		user.setDescription(membership.getDescription());
		user.setStartTime(membership.getStartTime());
		user.setEndTime(membership.getEndTime());
		Membership updatedUser=this.membershipRepo.save(user);
		MembershipDto userDto1=this.membershipToDto(updatedUser);
		return userDto1;
	}

	@Override
	public MembershipDto getMembershipByID(Integer membershipId) {
		Membership user=this.membershipRepo.findById(membershipId).orElseThrow(()-> new ResourceNotFound("User"," Id ",membershipId));
		
		return this.membershipToDto(user);
	}

	@Override
	public List<MembershipDto> getAllMemberships() {
		List<Membership> users= this.membershipRepo.findAll();
		List<MembershipDto> userDto= users.stream().map(user->this.membershipToDto(user)).collect(Collectors.toList());
		
		return userDto;
	}

	public Membership dtoToMembership(MembershipDto userDto) {
		Membership user=new Membership();
		user.setId(userDto.getId());
		user.setYogaType(userDto.getYogaType());;
		user.setUserId(userDto.getUserId());
		user.setDescription(userDto.getDescription());
		user.setStartTime(userDto.getStartTime());
		user.setEndTime(userDto.getEndTime());
		return user;
	}
	
	public MembershipDto membershipToDto(Membership userDto) {
		MembershipDto user=new MembershipDto();
		user.setId(userDto.getId());
		user.setYogaType(userDto.getYogaType());
		user.setDescription(userDto.getDescription());
		user.setStartTime(userDto.getStartTime());
		user.setEndTime(userDto.getEndTime());
		return user;
	}
}
