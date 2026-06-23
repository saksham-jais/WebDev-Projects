package com.civicflow.backend.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name = "audit_logs")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AuditLog {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    private UUID userId;
    private String action;
    private String targetTable;
    private UUID targetId;
    
    @Column(columnDefinition = "TEXT")
    private String details;
    
    private String ipAddress;
    private LocalDateTime timestamp;
}
