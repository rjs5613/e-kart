package com.ekart.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ekart.resource.Manufacturer;

public interface ManufacturerRepository extends JpaRepository<Manufacturer, Long> {

}
