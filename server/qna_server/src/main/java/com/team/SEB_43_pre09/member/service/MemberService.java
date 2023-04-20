package com.team.SEB_43_pre09.member.service;

import com.team.SEB_43_pre09.member.dto.MemberDTO;
import com.team.SEB_43_pre09.member.entity.MemberEntity;
import com.team.SEB_43_pre09.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class MemberService {
    private final MemberRepository memberRepository;
    public void save(MemberDTO memberDTO) {

        MemberEntity memberEntity = MemberEntity.toMemberEntity(memberDTO);
        memberRepository.save(memberEntity); // repository 에 저장

    }

    public MemberDTO login (MemberDTO memberDTO) {

        Optional<MemberEntity> byMemberEmail = memberRepository.findByMemberEmail(memberDTO.getMemberEmail());
        if(byMemberEmail.isPresent()) {
            // 이메일 정보 존재
            MemberEntity memberEntity = byMemberEmail.get();
            if (memberEntity.getMemberPassword().equals(memberDTO.getMemberPassword())){
                // 비밂번호 일치 -> dto 변환 후 리턴
                MemberDTO dto = MemberDTO.toMemberDTO(memberEntity);
                return dto;

            } else {
                // 비밀번호 불일치
                return null;
            }
        }
        else{
            // 이메일 정보 x
            return  null;
        }
    }
}
