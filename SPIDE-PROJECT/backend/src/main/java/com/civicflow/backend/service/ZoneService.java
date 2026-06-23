package com.civicflow.backend.service;

import com.civicflow.backend.entity.Zone;
import com.civicflow.backend.repository.ZoneRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ZoneService {
    private final ZoneRepository zoneRepository;

    public List<Zone> getAllZones() {
        return zoneRepository.findAll();
    }

    public Zone createZone(Zone zone) {
        return zoneRepository.save(zone);
    }

    public void deleteZone(UUID id) {
        zoneRepository.deleteById(id);
    }
}
