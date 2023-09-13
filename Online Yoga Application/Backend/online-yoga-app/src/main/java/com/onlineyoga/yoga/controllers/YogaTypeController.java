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
import com.onlineyoga.yoga.payloads.UserDto;
import com.onlineyoga.yoga.payloads.YogaTypeDto;
import com.onlineyoga.yoga.services.YogaTypeService;

@RestController
@CrossOrigin
@RequestMapping("/api/yogaTypes")
public class YogaTypeController {
	
	@Autowired
	private YogaTypeService yogaService;
	
	@PostMapping("/addYogaType/")
	public ResponseEntity<YogaTypeDto> createYogaType(@RequestBody YogaTypeDto yogaTypeDto){
		System.out.println(yogaTypeDto.getDescription());
		YogaTypeDto createYogaTypeDto=this.yogaService.addYogaType(yogaTypeDto);
		return new ResponseEntity<YogaTypeDto>(createYogaTypeDto,HttpStatus.CREATED); 
	}
	
	//Update
	
		@PutMapping("/updateYogaType/{yogaTypeId}")
		public ResponseEntity<YogaTypeDto> updateUser(@RequestBody YogaTypeDto yogaTypeDto,@PathVariable Integer yogaTypeId){
			YogaTypeDto yogaTypeDtoNew=this.yogaService.updateYogaType(yogaTypeDto, yogaTypeId);
			return ResponseEntity.ok(yogaTypeDtoNew);
		}
		
		@DeleteMapping("/deleteYogaType/{yogaTypeId}")
		public ResponseEntity<ApiResponse> deleteUser(@PathVariable Integer yogaTypeId){
			this.yogaService.deleteYogaType(yogaTypeId);
			return new ResponseEntity<ApiResponse>(new ApiResponse("User Deleted Successfully ",true),HttpStatus.OK);
		}
		
		@GetMapping("/allYogaTypes/")
		public ResponseEntity<List<YogaTypeDto>> getAllUsers(){
			return ResponseEntity.ok(this.yogaService.getAllYogaType());
		}
		
		@GetMapping("/getYogaType/{yogaTypeId}")
		public ResponseEntity<YogaTypeDto> getSingleUser(@PathVariable Integer yogaTypeId){
			return ResponseEntity.ok(this.yogaService.getYogaTypeById(yogaTypeId));
		}
	

}
