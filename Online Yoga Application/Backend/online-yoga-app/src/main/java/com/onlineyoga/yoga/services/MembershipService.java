package com.onlineyoga.yoga.services;

import java.util.List;

import com.onlineyoga.yoga.payloads.MembershipDto;

public interface MembershipService {
	
	MembershipDto addMembership(MembershipDto membership);
	MembershipDto updateMembership(MembershipDto membership,Integer membershipId);
	MembershipDto getMembershipByID(Integer membershipId);
	List<MembershipDto> getAllMemberships();
}
