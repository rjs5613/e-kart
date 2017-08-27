/**
 * 
 */
package com.ekart.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ekart.repository.ProductRepository;
import com.ekart.repository.ReviewRepository;
import com.ekart.resource.Product;
import com.ekart.resource.Review;

/**
 * @author rajesh
 *
 */

@RestController
public class ProductController {
	
	@Autowired
	private ProductRepository productRepository;
	
	@Autowired
	private ReviewRepository reviewRepository;
	
	@GetMapping(path="/products")
	public ResponseEntity<List<Product>> getProductsPaginated(){
		List<Product> products = productRepository.findAll();
		return new ResponseEntity<>(products, HttpStatus.OK);
	}
	
	@GetMapping(path="/products/{id}")
	public ResponseEntity<Product> getProductDetails(@PathVariable("id") Long id){
		Product products = productRepository.findOne(id);
		return new ResponseEntity<>(products, HttpStatus.OK);
	}
	
	@PostMapping(path="/products")
	public ResponseEntity<Product> createProduct(@RequestBody Product product){
		for(Review review:product.getReviews()){
			review.setProduct(product);
		}
		Product savedProduct = productRepository.save(product);
		return new ResponseEntity<>(savedProduct, HttpStatus.CREATED);
	}
	
	@GetMapping(path="/products/{id}/reviews")
	public ResponseEntity<List<Review>> getProductReviews(@PathVariable("id") String productId){
		
		Product product = productRepository.findOne(Long.parseLong(productId));
		List<Review> reviews = reviewRepository.findByProduct(product);
		return new ResponseEntity<>(reviews, HttpStatus.OK);
	}
	
	@PostMapping(path="/products/{id}/reviews")
	public ResponseEntity<Review> createProductReviews(@RequestBody Review review){
		
		Review reviews = reviewRepository.save(review);
		return new ResponseEntity<>(reviews, HttpStatus.OK);
	}

}
