package com.civicflow.backend.controller;

import com.civicflow.backend.entity.ContactMessage;
import com.civicflow.backend.service.ContactMessageService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/contact")
@RequiredArgsConstructor
@CrossOrigin(origins = "*") // Allow frontend to call the API
public class ContactController {

    private final ContactMessageService contactMessageService;

    @PostMapping
    public ResponseEntity<ContactMessage> submitMessage(@RequestBody ContactMessage message) {
        ContactMessage savedMessage = contactMessageService.saveMessage(message);
        return ResponseEntity.ok(savedMessage);
    }
}
