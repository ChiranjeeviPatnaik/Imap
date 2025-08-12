package com.ic.ems.mapper;

import com.ic.ems.dto.UserDataDto;
import com.ic.ems.entity.UserData;

public class UserDataMapper {
    public static UserDataDto mapToUserDataDto(UserData userData) {
        return new UserDataDto(
                userData.getId(),
                userData.getFirstName(),
                userData.getLastName(),
                userData.getEmailId(),
                userData.getRole(),
                userData.getPhoneNumber()
        );
    }

    public static UserData mapToUserData(UserDataDto userDataDto) {
        return new UserData(
                userDataDto.getId(),
                userDataDto.getFirstName(),
                userDataDto.getLastName(),
                userDataDto.getEmailId(),
                userDataDto.getRole(),
                userDataDto.getPhoneNumber()
        );
    }
}
