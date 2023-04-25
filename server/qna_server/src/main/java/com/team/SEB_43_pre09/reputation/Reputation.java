package com.team.SEB_43_pre09.reputation;

import com.team.SEB_43_pre09.member.entity.MemberEntity;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Reputation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long reputation_id; // 평판고유번호

    @Column(nullable = false)
    private int reputation_count; // 평판

    /** Reputation과 Member 간에 1대1 연관 관계를 매핑하기 위한 코드입니다. */
    @OneToOne
    @JoinColumn(name = "MEMBER_ID")
    private MemberEntity member;

    /** Reputation과 Member 간에 양방향 연관 관계를 안전하게 매핑하기 위한 코드입니다. */
    public void setMember(MemberEntity member) {
        this.member = member;
        if (member.getReputation() != this) {
            member.setReputation(this);
        }
    }
}
