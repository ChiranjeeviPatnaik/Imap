package com.ic.ems.service;

import com.ic.ems.io.ProfileRequest;
import com.ic.ems.io.ProfileResponse;

public interface UserDataService {

    ProfileResponse createProfile(ProfileRequest request);

}
