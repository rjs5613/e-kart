/**
 * 
 */
package com.ekart.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ekart.resource.Product;

/**
 * @author rajesh
 *
 */
public interface ProductRepository extends JpaRepository<Product, Long>{

}
