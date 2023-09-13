package com.onlineyoga.yoga.entity;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity

public class LiveClasses {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int liveClassId;
	private String yogaType;
	private String description;
	private String startTime;
	private String endTime;
	private String img;
	private float price;
	
	
	public LiveClasses() {
		// TODO Auto-generated constructor stub
	}


	public int getLiveClassId() {
		return liveClassId;
	}

	public String getImg() {
		return img;
	}

	public void setImg(String img) {
		this.img = img;
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
