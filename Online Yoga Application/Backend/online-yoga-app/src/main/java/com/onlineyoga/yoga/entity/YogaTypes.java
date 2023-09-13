package com.onlineyoga.yoga.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class YogaTypes {
 
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int yogaId;
	@Column(name="yoga_type",nullable = false)
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

	public YogaTypes() {
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
