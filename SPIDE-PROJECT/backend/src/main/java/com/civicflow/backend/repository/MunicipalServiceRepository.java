package com.civicflow.backend.repository;

import com.civicflow.backend.entity.MunicipalService;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface MunicipalServiceRepository extends JpaRepository<MunicipalService, UUID> {
}
