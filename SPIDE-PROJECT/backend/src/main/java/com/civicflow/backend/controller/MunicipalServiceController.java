package com.civicflow.backend.controller;

import com.civicflow.backend.entity.MunicipalService;
import com.civicflow.backend.service.MunicipalServiceService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/services")
@RequiredArgsConstructor
public class MunicipalServiceController {

    private final MunicipalServiceService service;

    @GetMapping
    public ResponseEntity<List<MunicipalService>> getAllServices() {
        return ResponseEntity.ok(service.getAllServices());
    }

    @PostMapping
    public ResponseEntity<MunicipalService> saveService(@RequestBody MunicipalService municipalService) {
        return ResponseEntity.ok(service.saveService(municipalService));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteService(@PathVariable UUID id) {
        service.deleteService(id);
        return ResponseEntity.noContent().build();
    }
}
