package com.civicflow.backend.controller;

import com.civicflow.backend.entity.Update;
import com.civicflow.backend.service.UpdateService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/updates")
@RequiredArgsConstructor
public class UpdateController {

    private final UpdateService service;

    @GetMapping
    public ResponseEntity<List<Update>> getAllUpdates() {
        return ResponseEntity.ok(service.getAllUpdates());
    }

    @PostMapping
    public ResponseEntity<Update> saveUpdate(@RequestBody Update update) {
        return ResponseEntity.ok(service.saveUpdate(update));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUpdate(@PathVariable UUID id) {
        service.deleteUpdate(id);
        return ResponseEntity.noContent().build();
    }
}
