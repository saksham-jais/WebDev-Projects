package com.civicflow.backend.repository;

import com.civicflow.backend.entity.Ward;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface WardRepository extends JpaRepository<Ward, UUID> {
}
