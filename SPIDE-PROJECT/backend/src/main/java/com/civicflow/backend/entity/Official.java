package com.civicflow.backend.entity;

import com.civicflow.backend.security.EncryptionConverter;
import jakarta.persistence.*;

import lombok.*;

import java.util.UUID;

@Entity
@Table(name = "officials")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Official {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(nullable = false)
    private String name;

    private String designation;
    private String department;
    @Convert(converter = EncryptionConverter.class)
    private String email;

    @Convert(converter = EncryptionConverter.class)
    private String phone;
    private String imageUrl;
}
