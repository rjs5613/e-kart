package com.ekart.resource;

import javax.persistence.Entity;

@Entity(name="users")
public class User extends BaseEntity {
	
	private String userId;
	
	private String email;

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}
	
}
