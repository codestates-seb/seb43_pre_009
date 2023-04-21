package com.team.SEB_43_pre09.member.entity;

import com.team.SEB_43_pre09.member.dto.MemberDTO;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.lang.reflect.Member;

@Entity
@Setter
@Getter
@Table(name = "member_table")
public class MemberEntity {
    @Id // pk 지정
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int member_id; // 유저 고유식별 코드
    @Column(unique = true) // 이메일 중복 불가
    private String memberEmail;
    @Column
    private String memberPassword;
    @Column
    private String memberName;
    @Column
    private String created_at;
    @Column
    private String modified_at;
    @Column
    private String last_login_at;
    @Column
    private Boolean secession;

    public static MemberEntity toMemberEntity (MemberDTO memberDTO) { // DTO 가져와서 엔티티로 변환
        MemberEntity memberEntity = new MemberEntity();
        memberEntity.setMemberEmail(memberDTO.getMemberEmail());
        memberEntity.setMemberPassword(memberDTO.getMemberPassword());
        memberEntity.setMemberName(memberDTO.getMemberName());
        return memberEntity;
    }

    public static MemberEntity toUpdateMemberEntity(MemberDTO memberDTO) {
        MemberEntity memberEntity = new MemberEntity();
        memberEntity.setMember_id(memberDTO.getMember_id());
        memberEntity.setMemberEmail(memberDTO.getMemberEmail());
        memberEntity.setMemberPassword(memberDTO.getMemberPassword());
        memberEntity.setMemberName(memberDTO.getMemberName());
        return memberEntity;
    }
}