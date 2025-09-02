package com.ic.ems.service.impl;

import com.ic.ems.entity.UserData;
import com.ic.ems.io.ProfileRequest;
import com.ic.ems.io.ProfileResponse;
import com.ic.ems.repository.UserInfoRepository;
import com.ic.ems.service.UserDataService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class UserDataServiceImpl implements UserDataService {
    @Autowired
    UserInfoRepository userInfoRepository;

    @Autowired
    PasswordEncoder passwordEncoder;

    // To create the User Information
    @Override
    public ProfileResponse createProfile(ProfileRequest request) {
        UserData newProfile = convertToUserData(request);
        if (!userInfoRepository.existsByEmailId(request.getEmailId())) {
            newProfile = userInfoRepository.save(newProfile);
            return convertToProfileResponse(newProfile);
        }
        throw new ResponseStatusException(HttpStatus.CONFLICT, "Email already exists");
    }

    private ProfileResponse convertToProfileResponse(UserData newProfile) {
        return ProfileResponse.builder()
                .emailId(newProfile.getEmailId())
                .firstName(newProfile.getFirstName())
                .phoneNumber(newProfile.getPhoneNumber())
                .userId(newProfile.getUserId())
                .isAccountVerified(newProfile.getIsAccountVerified())
                .build();
    }

    private UserData convertToUserData(ProfileRequest request) {
        return UserData.builder()
                .emailId(request.getEmailId())
                .userId(UUID.randomUUID().toString())
                .firstName(request.getFirstName())
                .lastName(request.getLastName())
                .phoneNumber(request.getPhoneNumber())
                .password(passwordEncoder.encode(request.getPassword()))
                .isAccountVerified(false)
                .restOtpExpireAt(0L)
                .verifyOtp(null)
                .verifyOtpExpireAt(0L)
                .resetOtp(null)
                .build();
    }

}
