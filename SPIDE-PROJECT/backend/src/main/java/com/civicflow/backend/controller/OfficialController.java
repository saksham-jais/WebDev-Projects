package com.civicflow.backend.controller;

import com.civicflow.backend.entity.Official;
import com.civicflow.backend.service.OfficialService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/officials")
@RequiredArgsConstructor
public class OfficialController {

    private final OfficialService service;

    @GetMapping
    public ResponseEntity<List<Official>> getAllOfficials() {
        return ResponseEntity.ok(service.getAllOfficials());
    }

    @PostMapping
    public ResponseEntity<Official> saveOfficial(@RequestBody Official official) {
        return ResponseEntity.ok(service.saveOfficial(official));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteOfficial(@PathVariable UUID id) {
        service.deleteOfficial(id);
        return ResponseEntity.noContent().build();
    }
}
