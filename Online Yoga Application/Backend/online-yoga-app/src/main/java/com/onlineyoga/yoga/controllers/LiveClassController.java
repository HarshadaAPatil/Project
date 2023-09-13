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
import com.onlineyoga.yoga.payloads.UserDto;
import com.onlineyoga.yoga.services.LiveClassService;

@RestController
@CrossOrigin
@RequestMapping("/api/liveclass")
public class LiveClassController {
	
	@Autowired
	private LiveClassService liveClassService;
	
	@PostMapping("/")
	public ResponseEntity<LiveClassDto> addLiveClass(@RequestBody LiveClassDto userDto){
		LiveClassDto createUserDto=this.liveClassService.addLiveClass(userDto);
		return new ResponseEntity<LiveClassDto>(createUserDto,HttpStatus.CREATED); 
	}
	
	//Update
	
		@PutMapping("/update/{userId}")
		public ResponseEntity<LiveClassDto> updateLiveClass(@RequestBody LiveClassDto userDto,@PathVariable Integer userId){
			LiveClassDto userDtoNew=this.liveClassService.updateLiveClass(userDto, userId);
			return ResponseEntity.ok(userDtoNew);
		}

		
		@GetMapping("/allLiveClass")
		public ResponseEntity<List<LiveClassDto>> getAllLiveClasses(){
			return ResponseEntity.ok(this.liveClassService.getLiveClasses());
		}
		
		@GetMapping("/getLiveClass/{userId}")
		public ResponseEntity<LiveClassDto> getSingleLiveClass(@PathVariable Integer userId){
			return ResponseEntity.ok(this.liveClassService.getLiveClassById(userId));
		}
}
