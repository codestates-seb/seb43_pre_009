package com.team.SEB_43_pre09.answer.entity;

import com.team.SEB_43_pre09.member.entity.MemberEntity;
import com.team.SEB_43_pre09.question.entity.Question;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "ANSWERS") // TODO 테이블 이름 정하기 -> 임시로 정함.
public class Answer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // IDENTITY 전략으로 기본키 할당(데이터베이스에서 기본키 대신 생성)
    private long answer_id; // 답변 고유 번호

    @Column(nullable = false, length = 1000)
    private String answer_title; // 답변 제목

    @Column(nullable = false, length = 5000)
    private String answer_content; // 답변 내용

    @Column(nullable = false)
    private LocalDateTime answer_created_at; // 답변 등록 시간

    @Column(nullable = false, name = "LAST_ANSWER_MODIFIED_AT")
    private LocalDateTime answer_modified_at; // 답변 수정 시간

    @Enumerated(EnumType.STRING)
    private AnswerStatus answer_status = AnswerStatus.ANSWER_NOTADOPT; // 답변 채택여부

    public enum AnswerStatus {
        ANSWER_NOTADOPT(1, "채택되지 않음"),
        ANSWER_ADOPT(2, "채택 됨");

        @Getter
        private int stepNumber;

        @Getter
        private String stepDescription;

        AnswerStatus(int stepNumber, String stepDescription) {
            this.stepNumber = stepNumber;
            this.stepDescription = stepDescription;
        }
    }

    @ManyToOne
    @JoinColumn(name = "QUESTION_ID") // 여러 건의 답변은 하나의 질문에 달릴 수 있으므로, 다대일 관계로 맵핑
    private Question question;

    public void addQuestion(Question question) {
        this.question = question;
    }

    @ManyToOne
    @JoinColumn(name = "MEMBER_ID") // 여러 건의 답변은 하나의 멤버가 달 수 있으므로, 다대일 관계로 맵핑
    private MemberEntity member;

    public void addMember(MemberEntity member) {
        this.member = member;
    }
}

