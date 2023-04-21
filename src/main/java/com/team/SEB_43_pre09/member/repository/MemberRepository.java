package com.team.SEB_43_pre09.member.repository;

import com.team.SEB_43_pre09.member.entity.MemberEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MemberRepository extends JpaRepository<MemberEntity, String> {
    Optional<MemberEntity> findByMemberEmail(String memberEmail);
    // 이메일로 회원 정보 조회
}