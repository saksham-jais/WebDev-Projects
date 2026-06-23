package com.civicflow.backend.config;

import com.civicflow.backend.entity.*;
import com.civicflow.backend.repository.*;

import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class DataInitializer implements CommandLineRunner {

    private final RoleRepository roleRepository;
    private final UserRepository userRepository;
    private final MunicipalServiceRepository serviceRepository;
    private final OfficialRepository officialRepository;
    private final UpdateRepository updateRepository;
    private final PasswordEncoder passwordEncoder;

        @Value("${superadmin.username:admin@example.com}")
        private String superAdminUsername;

        @Value("${superadmin.password:adminspide}")
        private String superAdminPassword;

        @Value("${superadmin.email:admin@example.com}")
        private String superAdminEmail;


    @Override
    public void run(String... args) {
        Role adminRole = roleRepository.findByName("ADMIN")
                .orElseGet(() -> roleRepository.save(Role.builder().name("ADMIN").build()));

        roleRepository.findByName("STAFF")
                .orElseGet(() -> roleRepository.save(Role.builder().name("STAFF").build()));

        roleRepository.findByName("CITIZEN")
                .orElseGet(() -> roleRepository.save(Role.builder().name("CITIZEN").build()));

        User superAdmin = userRepository.findByUsername(superAdminUsername)
                .orElse(User.builder().username(superAdminUsername).build());

        superAdmin.setPassword(passwordEncoder.encode(superAdminPassword));
        superAdmin.setEmail(superAdminEmail);
        superAdmin.setFullName("Super Administrator");
        superAdmin.setRole(adminRole);
        userRepository.save(superAdmin);

        if (serviceRepository.count() == 0) {

            serviceRepository.save(MunicipalService.builder()
                    .title("Water Connection")
                    .description("Apply for new water connections or manage existing ones.")
                    .category("Available")
                    .build());

            serviceRepository.save(MunicipalService.builder()
                    .title("Building Permission")
                    .description("Submit and track residential or commercial construction plans.")
                    .category("Available")
                    .build());

            serviceRepository.save(MunicipalService.builder()
                    .title("Grievance Portal")
                    .description("Report civic issues and track resolution in real-time.")
                    .category("Available")
                    .build());

            // Sample Updates
            updateRepository.save(Update.builder()
                    .title("City Launches New Green Energy Initiative")
                    .content("The city council has approved a comprehensive plan to transition urban neighborhoods to renewable energy sources, aiming for carbon neutrality by 2035.")
                    .category("Sustainability")
                    .publishedAt(java.time.LocalDateTime.now())
                    .build());

            updateRepository.save(Update.builder()
                    .title("Smart Traffic Management Deployment")
                    .content("New AI-powered traffic lights are being installed across the downtown area to reduce congestion and improve commute times.")
                    .category("Infrastructure")
                    .publishedAt(java.time.LocalDateTime.now().minusDays(2))
                    .build());

            updateRepository.save(Update.builder()
                    .title("Annual Community Arts Festival")
                    .content("Join us next weekend for the 10th anniversary of our City Arts Festival, featuring local artists, food vendors, and live performances.")
                    .category("Events")
                    .publishedAt(java.time.LocalDateTime.now().minusDays(5))
                    .build());

            // Sample Officials
            officialRepository.save(Official.builder()
                    .name("Dr. Elena Rodriguez")
                    .designation("City Administrator")
                    .department("Executive Branch")
                    .email("e.rodriguez@civicflow.gov")
                    .phone("(555) 234-5678")
                    .build());

            officialRepository.save(Official.builder()
                    .name("Marcus Thorne")
                    .designation("Chief of Public Works")
                    .department("Infrastructure")
                    .email("m.thorne@civicflow.gov")
                    .phone("(555) 345-6789")
                    .build());
        }

    }
}
