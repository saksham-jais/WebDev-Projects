package com.civicflow.backend.repository;

import com.civicflow.backend.entity.Official;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface OfficialRepository extends JpaRepository<Official, UUID> {
}
