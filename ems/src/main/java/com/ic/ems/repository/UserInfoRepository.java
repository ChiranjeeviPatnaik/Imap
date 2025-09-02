package com.ic.ems.repository;

import com.ic.ems.entity.UserData;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface UserInfoRepository extends JpaRepository<UserData, Long> {

    Optional<UserData>findByEmailId(String emailId);

    Boolean existsByEmailId(String emailId);
}
