package com.team.SEB_43_pre09.answer.entity;

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
@Table(name = "answer_table") // TODO 테이블 이름 정하기
public class Answer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // IDENTITY 전략으로 기본키 할당(데이터베이스에서 기본키 대신 생성)
    private long answer_id; // 답변 고유 번호

    @Column
    private long question_id; // 답변이 달린 질문의 고유번호

    @Column
    private long member_id; // 답변을 등록한 회원의 고유번호

    @Column(nullable = false, length = 1000)
    private String answer_title; // 답변 제목

    @Column(nullable = false, length = 5000)
    private String answer_content; // 답변 내용

    @Column
    private LocalDateTime answer_created_at; // 답변 등록 시간

    @Column
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
}
