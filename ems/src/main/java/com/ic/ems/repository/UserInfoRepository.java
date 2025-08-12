package com.ic.ems.repository;

import com.ic.ems.entity.UserData;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserInfoRepository extends JpaRepository<UserData, Long> {
}
