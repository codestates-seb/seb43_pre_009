package com.team.SEB_43_pre09.member.entity;

import com.team.SEB_43_pre09.member.dto.MemberDTO;
import com.team.SEB_43_pre09.reputation.Reputation;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.lang.reflect.Member;
import java.util.ArrayList;
import java.util.List;

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
    // 추가
    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> roles = new ArrayList<>();

    /** Member와 Reputation 간에 일대일 연관 관계를 매핑하기 위해 추가된 코드입니다. by 유한별*/
    @OneToOne(mappedBy = "member", cascade = {CascadeType.PERSIST, CascadeType.REMOVE})
    private Reputation reputation;

    /** Member와 Reputation 간에 양방향 연관 관계를 안전하게 매핑하기 위해 추가된 코드입니다. by 유한별*/
    public void setReputation(Reputation reputation) {
        this.reputation = reputation;
        if (reputation.getMember() != this) {
            reputation.setMember(this);
        }
    }

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