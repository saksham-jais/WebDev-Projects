package com.civicflow.backend.controller;

import com.civicflow.backend.entity.Surveyor;
import com.civicflow.backend.service.SurveyorService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/surveyors")
@RequiredArgsConstructor
public class SurveyorController {
    private final SurveyorService surveyorService;

    @GetMapping
    public ResponseEntity<List<Surveyor>> getAllSurveyors() {
        return ResponseEntity.ok(surveyorService.getAllSurveyors());
    }

    @PostMapping
    public ResponseEntity<Surveyor> createSurveyor(@RequestBody Surveyor surveyor) {
        return ResponseEntity.ok(surveyorService.createSurveyor(surveyor));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Surveyor> updateSurveyor(@PathVariable UUID id, @RequestBody Surveyor surveyor) {
        return ResponseEntity.ok(surveyorService.updateSurveyor(id, surveyor));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSurveyor(@PathVariable UUID id) {
        surveyorService.deleteSurveyor(id);
        return ResponseEntity.noContent().build();
    }
}
