/**
 * 
 */
package com.ekart.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ekart.resource.Product;
import com.ekart.resource.Review;

/**
 * @author rajesh
 *
 */
public interface ReviewRepository extends JpaRepository<Review, Long> {

	List<Review> findByProduct(Product findOne);

}
