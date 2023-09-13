package com.onlineyoga.yoga.services.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.onlineyoga.yoga.entity.YogaTypes;
import com.onlineyoga.yoga.exception.ResourceNotFound;
import com.onlineyoga.yoga.payloads.YogaTypeDto;
import com.onlineyoga.yoga.repositories.YogaTypeRepo;
import com.onlineyoga.yoga.services.YogaTypeService;

@Service
public class YogaTypeServiceImpl implements YogaTypeService{

	@Autowired
	private YogaTypeRepo yogaRepo;

	@Override
	public YogaTypeDto addYogaType(YogaTypeDto yogaTypeDto) {
		// TODO Auto-generated method stub
		YogaTypes yogaType= yogaRepo.save(this.dtoToYogaType(yogaTypeDto));
		return this.yogaTypeToDto(yogaType);
	}

	public YogaTypes dtoToYogaType(YogaTypeDto yogaTypeDto) {
		// TODO Auto-generated method stub
		YogaTypes yogaTypes=new YogaTypes();
		yogaTypes.setYogaId(yogaTypeDto.getYogaId());
		yogaTypes.setYogaType(yogaTypeDto.getYogaType());;
		yogaTypes.setDescription(yogaTypeDto.getDescription());
		yogaTypes.setPath(yogaTypeDto.getPath());
		yogaTypes.setImg(yogaTypeDto.getImg());
		return yogaTypes;
	}
	
	public YogaTypeDto yogaTypeToDto(YogaTypes yogaType) {
		// TODO Auto-generated method stub
		YogaTypeDto yogaTypeDto=new YogaTypeDto();
		yogaTypeDto.setYogaId(yogaType.getYogaId());
		yogaTypeDto.setYogaType(yogaType.getYogaType());;
		yogaTypeDto.setDescription(yogaType.getDescription());
		yogaTypeDto.setPath(yogaType.getPath());
		yogaTypeDto.setImg(yogaType.getImg());
		return yogaTypeDto;
	}

	@Override
	public YogaTypeDto updateYogaType(YogaTypeDto yogaTypeDto, Integer yogaId) {
		YogaTypes yogaType=this.yogaRepo.findById(yogaId).orElseThrow(()->new ResourceNotFound("Yoga Type ", " Id ",yogaId));
		yogaType.setYogaType(yogaTypeDto.getYogaType());;
		yogaType.setDescription(yogaTypeDto.getDescription());
		yogaType.setPath(yogaTypeDto.getPath());
		yogaType.setImg(yogaTypeDto.getImg());
		return this.yogaTypeToDto(this.yogaRepo.save(yogaType));
	}

	@Override
	public YogaTypeDto getYogaTypeById(Integer yogaId) {
		YogaTypes yogaType=this.yogaRepo.findById(yogaId).orElseThrow(()->new ResourceNotFound("Yoga Type ", " Id ",yogaId));
		
		return this.yogaTypeToDto(yogaType);
	}

	@Override
	public List<YogaTypeDto> getAllYogaType() {
		List<YogaTypes> yogaTypes=this.yogaRepo.findAll();
		List<YogaTypeDto> yogaTypesDto=yogaTypes.stream().map(yogaType->this.yogaTypeToDto(yogaType)).collect(Collectors.toList());
		
		return yogaTypesDto;
	}

	@Override
	public void deleteYogaType(Integer yogaId) {
		YogaTypes yogaType=this.yogaRepo.findById(yogaId).orElseThrow(()->new ResourceNotFound("Yoga Type", " Id ", yogaId)) ;
		this.yogaRepo.delete(yogaType);
		
	}
	
	
}
