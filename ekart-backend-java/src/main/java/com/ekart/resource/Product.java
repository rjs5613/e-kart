/**
 * 
 */
package com.ekart.resource;

import java.math.BigDecimal;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

/**
 * @author rajesh
 *
 */

@Entity(name = "products")
public class Product extends BaseEntity{
	
	private String name;
	
	@OneToOne
	private Manufacturer manufacturer;
	
	private BigDecimal price;
	
	@OneToMany(mappedBy = "product", cascade = CascadeType.ALL, fetch=FetchType.EAGER)
	private Set<Review> reviews;
	
	private BigDecimal ratings;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Manufacturer getManufacturer() {
		return manufacturer;
	}

	public void setManufacturer(Manufacturer manufacturer) {
		this.manufacturer = manufacturer;
	}

	public BigDecimal getPrice() {
		return price;
	}

	public void setPrice(BigDecimal price) {
		this.price = price;
	}

	public Set<Review> getReviews() {
		return reviews;
	}

	public void setReviews(Set<Review> reviews) {
		this.reviews = reviews;
	}

	public BigDecimal getRatings() {
		return ratings;
	}

	public void setRatings(BigDecimal ratings) {
		this.ratings = ratings;
	}

}
