/**
 * 
 */
package com.ekart.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.ekart.repository.ManufacturerRepository;
import com.ekart.resource.Manufacturer;

/**
 * @author rajesh
 *
 */
public class ManufacturerController {
	@Autowired
	private ManufacturerRepository manufacturerRepository;
	
	@GetMapping(path="/products")
	public ResponseEntity<List<Manufacturer>> getProductsPaginated(){
		List<Manufacturer> manufacturers = manufacturerRepository.findAll();
		return new ResponseEntity<>(manufacturers, HttpStatus.OK);
	}
	
	@PostMapping(path="/products")
	public ResponseEntity<Manufacturer> createProduct(@RequestBody Manufacturer manufacturer){
		Manufacturer savedProduct = manufacturerRepository.save(manufacturer);
		return new ResponseEntity<>(savedProduct, HttpStatus.CREATED);
	}
}
