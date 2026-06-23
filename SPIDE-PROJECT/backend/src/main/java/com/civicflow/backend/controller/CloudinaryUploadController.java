package com.civicflow.backend.controller;

import com.civicflow.backend.service.CloudinarySignatureService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api/v1/uploads/cloudinary")
@RequiredArgsConstructor
public class CloudinaryUploadController {

    private final CloudinarySignatureService cloudinarySignatureService;

    @PostMapping("/sign")
    public ResponseEntity<Map<String, Object>> signUpload(@RequestBody(required = false) Map<String, String> body) {
        String folder = body != null ? body.get("folder") : null;
        return ResponseEntity.ok(cloudinarySignatureService.createSignaturePayload(folder));
    }
}