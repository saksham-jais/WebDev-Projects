package com.civicflow.backend.service;

import com.civicflow.backend.entity.Ward;
import com.civicflow.backend.repository.WardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class WardService {
    private final WardRepository wardRepository;

    public List<Ward> getAllWards() {
        return wardRepository.findAll();
    }

    public Ward createWard(Ward ward) {
        return wardRepository.save(ward);
    }

    public void deleteWard(UUID id) {
        wardRepository.deleteById(id);
    }
}
