package com.ic.ems.controller;

import com.ic.ems.dto.UserDataDto;
import com.ic.ems.service.UserDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("api/user")
public class UserDataController {
    @Autowired
    UserDataService userDataService;

    // To add user data by REST API
    @PostMapping
    public ResponseEntity<UserDataDto> createUser(@RequestBody UserDataDto userDataDto) {
        UserDataDto savedUser = userDataService.createUser(userDataDto);
        return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
    }

    // Get user by ID REST API
    @GetMapping("{id}")
    public ResponseEntity<UserDataDto> getUserById(@PathVariable("id") Long userId) {
        UserDataDto userDataDto = userDataService.getUserById(userId);
        return ResponseEntity.ok(userDataDto);
    }

    // Get all users data by REST API
    @GetMapping
    public ResponseEntity<List<UserDataDto>> getAllUserData() {
        List<UserDataDto> userData = userDataService.getAllUserData();
        return ResponseEntity.ok(userData);
    }

    // Update User Details REST API
    @PutMapping("{id}")
    public ResponseEntity<UserDataDto> updateUser(@PathVariable("id") Long userId, @RequestBody UserDataDto updatedUser) {
        UserDataDto userDataDto = userDataService.updateUser(userId, updatedUser);
        return ResponseEntity.ok(userDataDto);
    }

    // Delete User Details by ID REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteUser (@PathVariable("id") Long userId) {
        userDataService.deleteUser(userId);
        return ResponseEntity.ok("User Deleted Successfully");
    }
}
