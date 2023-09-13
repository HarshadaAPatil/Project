package com.onlineyoga.yoga.payloads;



public class YogaTypeDto {
	private int yogaId;
	private String yogaType;
	private String Description;
	private String path;
	
	private String img;
	
	public String getImg() {
		return img;
	}

	public void setImg(String img) {
		this.img = img;
	}
	public YogaTypeDto() {
		// TODO Auto-generated constructor stub
	}

	public int getYogaId() {
		return yogaId;
	}

	public void setYogaId(int yogaId) {
		this.yogaId = yogaId;
	}

	public String getYogaType() {
		return yogaType;
	}

	public void setYogaType(String yogaType) {
		this.yogaType = yogaType;
	}

	public String getDescription() {
		return Description;
	}

	public void setDescription(String description) {
		Description = description;
	}

	public String getPath() {
		return path;
	}

	public void setPath(String path) {
		this.path = path;
	}
	
	
}
