package com.civicflow.backend.service;

import com.civicflow.backend.entity.Official;
import com.civicflow.backend.repository.OfficialRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class OfficialService {

    private final OfficialRepository repository;

    public List<Official> getAllOfficials() {
        return repository.findAll();
    }

    public Official saveOfficial(Official official) {
        return repository.save(official);
    }

    public void deleteOfficial(UUID id) {
        repository.deleteById(id);
    }
}
