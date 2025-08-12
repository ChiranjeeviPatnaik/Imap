package com.ic.ems.service;

import com.ic.ems.dto.UserDataDto;

import java.util.List;

public interface UserDataService {
    UserDataDto createUser(UserDataDto userDataDto);
    UserDataDto getUserById(Long userId);
    List<UserDataDto> getAllUserData();
    UserDataDto updateUser(Long userId, UserDataDto updatedUser);
    void deleteUser(Long userId);
}
