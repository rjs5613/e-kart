package com.ekart.resource;

import javax.persistence.Entity;
import javax.persistence.OneToOne;

@Entity(name="cart_items")
public class CartItem extends BaseEntity {
	
	@OneToOne
	private Product product;
	
	@OneToOne
	private User user;
	
	private Integer quantity;

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Integer getQuantity() {
		return quantity;
	}

	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}
	
	

}
