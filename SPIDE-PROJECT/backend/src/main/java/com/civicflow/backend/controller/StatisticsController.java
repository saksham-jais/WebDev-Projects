package com.civicflow.backend.controller;

import com.civicflow.backend.dto.DashboardStats;
import com.civicflow.backend.repository.MunicipalServiceRepository;
import com.civicflow.backend.repository.OfficialRepository;
import com.civicflow.backend.repository.UpdateRepository;
import com.civicflow.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/stats")
@RequiredArgsConstructor
public class StatisticsController {

    private final UserRepository userRepository;
    private final MunicipalServiceRepository serviceRepository;
    private final OfficialRepository officialRepository;
    private final UpdateRepository updateRepository;

    @GetMapping("/dashboard")
    public ResponseEntity<DashboardStats> getDashboardStats() {
        return ResponseEntity.ok(DashboardStats.builder()
                .totalUsers(userRepository.count())
                .totalServices(serviceRepository.count())
                .totalOfficials(officialRepository.count())
                .totalUpdates(updateRepository.count())
                .build());
    }
}
