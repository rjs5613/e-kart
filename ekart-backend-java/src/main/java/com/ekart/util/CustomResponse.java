package com.ekart.util;

import java.util.Collection;

import org.springframework.http.HttpStatus;

public class CustomResponse {
	
	private int size;
	
	private HttpStatus httpStatus;
	
	private boolean success;
	
	private Object data;

	private CustomResponse(Object data, HttpStatus status, int size, boolean isSuccess) {
		this.data = data;
		this.httpStatus=status;
		this.size=size;
		this.success=isSuccess;
	}

	public int getSize() {
		return size;
	}

	public HttpStatus getHttpStatus() {
		return httpStatus;
	}

	public boolean getSuccess() {
		return success;
	}

	public Object getData() {
		return data;
	}
	
	public static CustomResponse createResponse(Object data, boolean isSuccess, HttpStatus status){
		int size = 1;
		if(data instanceof Collection){
			size = ((Collection<?>)data).size();
		}
		CustomResponse response = new CustomResponse(data,status,size,isSuccess);

		return response;
	}
	
	

}
