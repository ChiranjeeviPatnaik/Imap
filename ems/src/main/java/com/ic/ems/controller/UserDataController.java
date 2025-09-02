package com.ic.ems.controller;

import com.ic.ems.io.ProfileRequest;
import com.ic.ems.io.ProfileResponse;
import com.ic.ems.service.UserDataService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
public class UserDataController {
    @Autowired
    UserDataService userDataService;

    // Method called when user got register
    @PostMapping("/register")
    @ResponseStatus(HttpStatus.CREATED)
    public ProfileResponse register(@Valid @RequestBody ProfileRequest request) {
        ProfileResponse response = userDataService.createProfile(request);
        return response;
    }

}
