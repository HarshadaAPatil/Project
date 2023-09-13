package com.onlineyoga.yoga.payloads;

import java.time.LocalDate;

public class LiveClassDto {
	private int liveClassId;
	private String yogaType;
	private String description;
	private String startTime;
	private String endTime;
	private String img;
	private float price;
	
	public LiveClassDto() {
		// TODO Auto-generated constructor stub
	}

	public String getImg() {
		return img;
	}

	public void setImg(String img) {
		this.img = img;
	}

	public int getLiveClassId() {
		return liveClassId;
	}

	public void setLiveClassId(int liveClassId) {
		this.liveClassId = liveClassId;
	}

	public String getYogaType() {
		return yogaType;
	}

	public void setYogaType(String yogaType) {
		this.yogaType = yogaType;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getStartTime() {
		return startTime;
	}

	public void setStartTime(String startTime) {
		this.startTime = startTime;
	}

	public String getEndTime() {
		return endTime;
	}

	public void setEndTime(String endTime) {
		this.endTime = endTime;
	}

	public float getPrice() {
		return price;
	}

	public void setPrice(float price) {
		this.price = price;
	}
	
	
}
