package com.ic.ems.io;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Size;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.format.annotation.NumberFormat;

@Data
@AllArgsConstructor
public class ProfileRequest {

    @NotBlank(message = "First name should be not Empty")
    private String firstName;
    @NotBlank(message = "Last name should be not Empty")
    private String lastName;
    @Email(message = "Enter valid email Id")
    @NotNull(message = "Email should be not Empty")
    private String emailId;
    @NumberFormat
    private String phoneNumber;
    @Size(min = 6, message = "Password must be atleast 6 characters")
    private String password;

}
