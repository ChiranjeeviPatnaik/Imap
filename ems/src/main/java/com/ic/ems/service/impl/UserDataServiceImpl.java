package com.ic.ems.service.impl;

import com.ic.ems.dto.UserDataDto;
import com.ic.ems.entity.UserData;
import com.ic.ems.exception.ResourceNotFoundException;
import com.ic.ems.mapper.UserDataMapper;
import com.ic.ems.repository.UserInfoRepository;
import com.ic.ems.service.UserDataService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class UserDataServiceImpl implements UserDataService {
    @Autowired
    UserInfoRepository userInfoRepository;

    // To create the User Information
    @Override
    public UserDataDto createUser(UserDataDto UserDataDto) {
        UserData userData = UserDataMapper.mapToUserData(UserDataDto);
        UserData savedUserData = userInfoRepository.save(userData);
        return UserDataMapper.mapToUserDataDto(savedUserData);
    }

    // To get User Information by ID
    @Override
    public UserDataDto getUserById(Long userId) {
        UserData userData = userInfoRepository.findById(userId)
                .orElseThrow(() ->
                        new ResourceNotFoundException("User is not exists with given ID : " +userId));
        return UserDataMapper.mapToUserDataDto(userData);
    }

    // To get all Users Information
    @Override
    public List<UserDataDto> getAllUserData() {
        List<UserData> userData = userInfoRepository.findAll();
        return userData.stream().map((user) -> UserDataMapper.mapToUserDataDto(user))
                .collect(Collectors.toList());
    }

    // To update the User Information by ID
    @Override
    public UserDataDto updateUser(Long userId, UserDataDto updatedUser) {
        UserData userData = userInfoRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User is not exists with given ID : "+userId));
        userData.setFirstName(updatedUser.getFirstName());
        userData.setLastName(updatedUser.getLastName());
        userData.setEmailId(updatedUser.getEmailId());
        if (updatedUser != null && updatedUser.getRole().equals(null)) {
            userData.setRole("Guest");
        } else {
            userData.setRole(updatedUser.getRole());
        }
        userData.setRole(updatedUser.getRole());
        userData.setPhoneNumber(updatedUser.getPhoneNumber());
        UserData updatedUserObj = userInfoRepository.save(userData);
        return UserDataMapper.mapToUserDataDto(updatedUserObj);
    }

    // To delete the User Information by ID
    @Override
    public void deleteUser(Long userId) {
        UserData userData = userInfoRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User is not exists with given ID : "+userId));
        userInfoRepository.deleteById(userId);
    }

}
