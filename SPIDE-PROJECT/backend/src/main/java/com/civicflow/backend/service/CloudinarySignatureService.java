package com.civicflow.backend.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.LinkedHashMap;
import java.util.Map;

@Service
public class CloudinarySignatureService {

    @Value("${cloudinary.cloud-name:}")
    private String cloudName;

    @Value("${cloudinary.api-key:}")
    private String apiKey;

    @Value("${cloudinary.api-secret:}")
    private String apiSecret;

    public Map<String, Object> createSignaturePayload(String folder) {
        if (cloudName == null || cloudName.isBlank() || apiKey == null || apiKey.isBlank() || apiSecret == null || apiSecret.isBlank()) {
            throw new IllegalStateException("Cloudinary configuration is missing.");
        }

        long timestamp = System.currentTimeMillis() / 1000;
        String safeFolder = (folder == null || folder.isBlank()) ? "civicflow/surveyors" : folder;
        String rawToSign = "folder=" + safeFolder + "&timestamp=" + timestamp + apiSecret;

        Map<String, Object> payload = new LinkedHashMap<>();
        payload.put("cloudName", cloudName);
        payload.put("apiKey", apiKey);
        payload.put("folder", safeFolder);
        payload.put("timestamp", timestamp);
        payload.put("signature", sha1(rawToSign));
        return payload;
    }

    private String sha1(String value) {
        try {
            MessageDigest md = MessageDigest.getInstance("SHA-1");
            byte[] digest = md.digest(value.getBytes(StandardCharsets.UTF_8));
            StringBuilder sb = new StringBuilder();
            for (byte b : digest) {
                sb.append(String.format("%02x", b));
            }
            return sb.toString();
        } catch (NoSuchAlgorithmException ex) {
            throw new IllegalStateException("Unable to generate Cloudinary signature.", ex);
        }
    }
}