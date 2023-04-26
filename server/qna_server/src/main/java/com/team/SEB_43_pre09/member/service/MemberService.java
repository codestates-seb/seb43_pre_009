package com.team.SEB_43_pre09.member.service;

import com.team.SEB_43_pre09.member.dto.MemberDTO;
import com.team.SEB_43_pre09.member.entity.MemberEntity;
import com.team.SEB_43_pre09.member.repository.MemberRepository;
import com.team.SEB_43_pre09.reputation.Reputation;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.lang.reflect.Member;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class MemberService {
    private final MemberRepository memberRepository;
    public void save(MemberDTO memberDTO) {
        MemberEntity memberEntity = MemberEntity.toMemberEntity(memberDTO);
        memberRepository.save(memberEntity); // repository 에 저장
    }

    /** 추가된 코드 by 유한별 */
    public MemberEntity createMember(MemberEntity member) {
        // 신규 회원에 대한 reputation 제공
        initReputation(member);

        return memberRepository.save(member);
    }

    /** 추가된 코드 by 유한별 */
    private void initReputation(MemberEntity member) {
        member.setReputation(new Reputation());
    }

    public MemberDTO login (MemberDTO memberDTO) {

        Optional<MemberEntity> byMemberEmail = memberRepository.findByMemberEmail(memberDTO.getMemberEmail());
        if(byMemberEmail.isPresent()) {
            // 이메일 정보 존재
            MemberEntity memberEntity = byMemberEmail.get();
            if (memberEntity.getMemberPassword().equals(memberDTO.getMemberPassword())){
                // 비밀번호 일치 -> dto 변환 후 리턴
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
    public List<MemberDTO> findAll() {  // 회원 전체 조회
        List<MemberEntity> memberEntityList = memberRepository.findAll();
        List<MemberDTO> memberDTOList = new ArrayList<>();
        for(MemberEntity memberEntity : memberEntityList) {
            memberDTOList.add(MemberDTO.toMemberDTO(memberEntity));
        }
        return memberDTOList;
    }
    public MemberDTO findById(String id) { // 회원 정보 조회
        Optional<MemberEntity> optionalMemberEntity = memberRepository.findById(id);
        if(optionalMemberEntity.isPresent()) {
            return MemberDTO.toMemberDTO(optionalMemberEntity.get()); // 회원정보
        }else{
            return null; // 회원 정보 조회 없을시
        }
    }
    public MemberDTO updateForm(String myEmail) {
        Optional<MemberEntity> optionalMemberEntity = memberRepository.findByMemberEmail(myEmail);
        if(optionalMemberEntity.isPresent()) {
            return MemberDTO.toMemberDTO(optionalMemberEntity.get());
        }else return null;
    }
    public void update(MemberDTO memberDTO) {
        memberRepository.save(MemberEntity.toUpdateMemberEntity(memberDTO)); // db에 Id가 있으면 자동으로 update 쿼리를 반환함
    }
    public void deleteById(String id) {
        memberRepository.deleteById(id);
    }
}
