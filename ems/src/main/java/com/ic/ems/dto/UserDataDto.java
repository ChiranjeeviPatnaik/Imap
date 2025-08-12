package com.ic.ems.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserDataDto {

    private Long id;
    private String firstName;
    private String lastName;
    private String emailId;
    private String role;
    private String phoneNumber;
}
