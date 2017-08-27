/**
 * 
 */
package com.ekart.resource;

import java.math.BigDecimal;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.OneToMany;

/**
 * @author rajesh
 *
 */

@Entity(name = "manufacturers")
public class Manufacturer extends BaseEntity{
	
	private String name;
	
	@OneToMany
	private Set<Review> reviews;
	
	private BigDecimal ratings;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
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
