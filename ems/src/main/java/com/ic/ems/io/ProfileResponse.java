package com.ic.ems.io;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ProfileResponse {

    private String userId;
    private String firstName;
    private String emailId;
    private String phoneNumber;
    private Boolean isAccountVerified;

}
