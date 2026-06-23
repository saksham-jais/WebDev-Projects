package com.civicflow.backend.repository;

import com.civicflow.backend.entity.Update;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface UpdateRepository extends JpaRepository<Update, UUID> {
}
