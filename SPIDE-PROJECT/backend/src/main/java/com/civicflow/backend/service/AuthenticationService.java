package com.civicflow.backend.service;

import com.civicflow.backend.dto.AuthenticationRequest;
import com.civicflow.backend.dto.AuthenticationResponse;
import com.civicflow.backend.security.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    @Value("${superadmin.username:admin@example.com}")
    private String superAdminUsername;

    @Value("${superadmin.password:adminspide}")
    private String superAdminPassword;

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        String loginId = request.getUsername() == null ? "" : request.getUsername().trim();
        String rawPassword = request.getPassword() == null ? "" : request.getPassword();

        if (superAdminUsername.trim().equalsIgnoreCase(loginId)
                && superAdminPassword.equals(rawPassword)) {
            UserDetails superAdmin = new User(
                    superAdminUsername.trim(),
                    "",
                    List.of(new SimpleGrantedAuthority("ROLE_ADMIN"))
            );

            return AuthenticationResponse.builder()
                    .token(jwtService.generateToken(superAdmin))
                    .build();
        }

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginId,
                        rawPassword
                )
        );
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        var jwtToken = jwtService.generateToken(userDetails);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }
}
