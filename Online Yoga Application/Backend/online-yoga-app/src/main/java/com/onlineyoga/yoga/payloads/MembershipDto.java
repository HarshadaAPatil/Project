package com.onlineyoga.yoga.payloads;

import java.time.LocalDate;

public class MembershipDto {
	private int id;

	private int userId;   
	
	private String yogaType;
	private String description;
	private String startTime;
	private String endTime;
	
	private String paymentStatus;
	
	public MembershipDto() {
		// TODO Auto-generated constructor stub
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
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

	public String getPaymentStatus() {
		return paymentStatus;
	}

	public void setPaymentStatus(String paymentStatus) {
		this.paymentStatus = paymentStatus;
	}
	
	
}
