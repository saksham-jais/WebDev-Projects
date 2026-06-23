package com.civicflow.backend.service;

import com.civicflow.backend.entity.Surveyor;
import com.civicflow.backend.entity.User;
import com.civicflow.backend.entity.Role;
import com.civicflow.backend.repository.SurveyorRepository;
import com.civicflow.backend.repository.UserRepository;
import com.civicflow.backend.repository.RoleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class SurveyorService {
    private final SurveyorRepository surveyorRepository;
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;

    public List<Surveyor> getAllSurveyors() {
        return surveyorRepository.findAll();
    }

    @Transactional
    public Surveyor createSurveyor(Surveyor surveyor) {
        // 1. Create Login User for the Surveyor
        Role surveyorRole = roleRepository.findByName("STAFF")
                .orElseGet(() -> roleRepository.save(Role.builder().name("STAFF").build()));

        User user = User.builder()
                .username(surveyor.getUsername())
                .password(passwordEncoder.encode(surveyor.getDefaultPassword()))
                .email(surveyor.getEmail())
                .fullName(surveyor.getFullName())
                .role(surveyorRole)
                .build();
        
        userRepository.save(user);

        // 2. Save Surveyor record
        return surveyorRepository.save(surveyor);
    }

    @Transactional
    public Surveyor updateSurveyor(UUID id, Surveyor data) {
        System.out.println("Updating surveyor ID: " + id);
        System.out.println("Received Data - FullName: " + data.getFullName());
        System.out.println("Received Data - Email: " + data.getEmail());
        System.out.println("Received Data - AssignedWards: " + data.getAssignedWards());

        return surveyorRepository.findById(id).map(existing -> {
            String oldUsername = existing.getUsername();
            
            if (data.getFullName() != null && !data.getFullName().trim().isEmpty()) {
                existing.setFullName(data.getFullName());
            }
            if (data.getEmail() != null && !data.getEmail().trim().isEmpty()) {
                existing.setEmail(data.getEmail());
            }
            if (data.getMobile() != null && !data.getMobile().trim().isEmpty()) {
                existing.setMobile(data.getMobile());
            }
            if (data.getUsername() != null && !data.getUsername().trim().isEmpty()) {
                existing.setUsername(data.getUsername());
            }
            if (data.getDefaultPassword() != null && !data.getDefaultPassword().trim().isEmpty()) {
                existing.setDefaultPassword(data.getDefaultPassword());
            }
            if (data.getAssignedWards() != null && !data.getAssignedWards().trim().isEmpty()) {
                existing.setAssignedWards(data.getAssignedWards());
            }
            if (data.getActive() != null) {
                existing.setActive(data.getActive());
            }
            if (data.getAvatarUrl() != null && !data.getAvatarUrl().trim().isEmpty()) {
                existing.setAvatarUrl(data.getAvatarUrl());
            }

            System.out.println("State before saving - FullName: " + existing.getFullName());

            // Sync with User table
            userRepository.findByUsername(oldUsername).ifPresent(user -> {
                boolean userChanged = false;
                if (data.getUsername() != null && !data.getUsername().trim().isEmpty()) {
                    user.setUsername(existing.getUsername());
                    userChanged = true;
                }
                if (data.getEmail() != null && !data.getEmail().trim().isEmpty()) {
                    user.setEmail(existing.getEmail());
                    userChanged = true;
                }
                if (data.getFullName() != null && !data.getFullName().trim().isEmpty()) {
                    user.setFullName(existing.getFullName());
                    userChanged = true;
                }
                if (data.getDefaultPassword() != null && !data.getDefaultPassword().trim().isEmpty()) {
                    user.setPassword(passwordEncoder.encode(data.getDefaultPassword()));
                    userChanged = true;
                }
                
                if (userChanged) {
                    userRepository.save(user);
                }
            });

            return surveyorRepository.save(existing);
        }).orElseThrow(() -> new RuntimeException("Surveyor not found"));
    }

    @Transactional
    public void deleteSurveyor(UUID id) {
        surveyorRepository.findById(id).ifPresent(surveyor -> {
            userRepository.findByUsername(surveyor.getUsername()).ifPresent(userRepository::delete);
            surveyorRepository.delete(surveyor);
        });
    }
}
