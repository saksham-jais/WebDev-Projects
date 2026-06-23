package com.civicflow.backend.service;

import com.civicflow.backend.entity.Update;
import com.civicflow.backend.repository.UpdateRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class UpdateService {

    private final UpdateRepository repository;

    public List<Update> getAllUpdates() {
        return repository.findAll();
    }

    public Update saveUpdate(Update update) {
        return repository.save(update);
    }

    public void deleteUpdate(UUID id) {
        repository.deleteById(id);
    }
}
