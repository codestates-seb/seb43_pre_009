package com.team.SEB_43_pre09.member.dto;

import com.team.SEB_43_pre09.member.entity.MemberEntity;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class MemberDTO {
    private int member_id;
    private String memberEmail;
    private String memberPassword;
    private String memberName;
    private String created_at;
    private String modified_at;
    private String last_login_at;
    private Boolean secession;

    public static MemberDTO toMemberDTO(MemberEntity memberEntity) {
        MemberDTO memberDTO = new MemberDTO();
        memberDTO.setMember_id(memberEntity.getMember_id());
        memberDTO.setMemberEmail(memberEntity.getMemberEmail());
        memberDTO.setMemberPassword(memberEntity.getMemberPassword());
        memberDTO.setMemberName(memberEntity.getMemberName());
        return memberDTO;
    }
}
