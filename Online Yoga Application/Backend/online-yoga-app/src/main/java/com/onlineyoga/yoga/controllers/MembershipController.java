package com.onlineyoga.yoga.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.onlineyoga.yoga.payloads.ApiResponse;
import com.onlineyoga.yoga.payloads.LiveClassDto;
import com.onlineyoga.yoga.payloads.MembershipDto;
import com.onlineyoga.yoga.payloads.UserDto;
import com.onlineyoga.yoga.services.MembershipService;

@RestController
@CrossOrigin
@RequestMapping("/api/membership")
public class MembershipController {
	
	@Autowired
	private MembershipService membershipService;
	
	@PostMapping("/")
	public ResponseEntity<MembershipDto> addMembership(@RequestBody MembershipDto userDto){
		MembershipDto createUserDto=this.membershipService.addMembership(userDto);
		return new ResponseEntity<MembershipDto>(createUserDto,HttpStatus.CREATED); 
	}
	
	//Update
	
			@PutMapping("/update/{userId}")
			public ResponseEntity<MembershipDto> updateMembership(@RequestBody MembershipDto userDto,@PathVariable Integer userId){
				MembershipDto userDtoNew=this.membershipService.updateMembership(userDto, userId);
				return ResponseEntity.ok(userDtoNew);
			}
			
//			@DeleteMapping("/delete/{userId}")
//			public ResponseEntity<ApiResponse> deleteUser(@PathVariable Integer userId){
//				this.userService.deleteUser(userId);
//				return new ResponseEntity<ApiResponse>(new ApiResponse("User Deleted Successfully ",true),HttpStatus.OK);
//			}
//			
			@GetMapping("/allmemrship/")
			public ResponseEntity<List<MembershipDto>> getAllMembership(){
				return ResponseEntity.ok(this.membershipService.getAllMemberships());
			}
			
			@GetMapping("/membership/{userId}")
			public ResponseEntity<MembershipDto> getSingleMembership(@PathVariable Integer userId){
				return ResponseEntity.ok(this.membershipService.getMembershipByID(userId));
			}
	

}
