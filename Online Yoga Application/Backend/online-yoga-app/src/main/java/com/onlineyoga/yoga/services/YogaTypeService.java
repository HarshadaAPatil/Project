package com.onlineyoga.yoga.services;

import java.util.List;

import com.onlineyoga.yoga.payloads.YogaTypeDto;

public interface YogaTypeService {

	YogaTypeDto addYogaType(YogaTypeDto yogaType);
	YogaTypeDto updateYogaType(YogaTypeDto yogaType,Integer yogaId);
	YogaTypeDto getYogaTypeById(Integer yogaId);
	List<YogaTypeDto> getAllYogaType();
	void deleteYogaType(Integer yogaId);
}
