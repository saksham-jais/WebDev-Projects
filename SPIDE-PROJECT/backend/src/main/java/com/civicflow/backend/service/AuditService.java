package com.civicflow.backend.service;

import com.civicflow.backend.entity.AuditLog;
import com.civicflow.backend.repository.AuditLogRepository;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class AuditService {

    private final AuditLogRepository repository;
    private final HttpServletRequest request;

    public void log(UUID userId, String action, String targetTable, UUID targetId, String details) {
        AuditLog log = AuditLog.builder()
                .userId(userId)
                .action(action)
                .targetTable(targetTable)
                .targetId(targetId)
                .details(details)
                .ipAddress(request.getRemoteAddr())
                .timestamp(LocalDateTime.now())
                .build();
        repository.save(log);
    }
}
