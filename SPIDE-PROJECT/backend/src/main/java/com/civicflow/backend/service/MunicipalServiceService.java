package com.civicflow.backend.service;

import com.civicflow.backend.entity.MunicipalService;
import com.civicflow.backend.repository.MunicipalServiceRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class MunicipalServiceService {

    private final MunicipalServiceRepository repository;

    public List<MunicipalService> getAllServices() {
        return repository.findAll();
    }

    public MunicipalService saveService(MunicipalService service) {
        return repository.save(service);
    }

    public void deleteService(UUID id) {
        repository.deleteById(id);
    }
}
