package com.ic.ems.service;

import com.ic.ems.entity.UserData;
import com.ic.ems.repository.UserInfoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
@RequiredArgsConstructor
public class AppUserDetailsService implements UserDetailsService {

    @Autowired
    UserInfoRepository userInfoRepository;

    @Override
    public UserDetails loadUserByUsername(String emailId) throws UsernameNotFoundException {
        UserData existingUser = userInfoRepository.findByEmailId(emailId)
                .orElseThrow(() -> new UsernameNotFoundException("Email not found for the email: "+emailId));
        return new User(existingUser.getEmailId(), existingUser.getPassword(), new ArrayList<>());
    }
}
