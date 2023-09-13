package com.onlineyoga.yoga.services;

import java.util.List;

import com.onlineyoga.yoga.payloads.LiveClassDto;


public interface LiveClassService {
	LiveClassDto addLiveClass(LiveClassDto liveClassDto);
	LiveClassDto updateLiveClass(LiveClassDto liveClassDto,Integer liveClassId);
	LiveClassDto getLiveClassById(Integer liveClassId);
	List<LiveClassDto> getLiveClasses();
}
