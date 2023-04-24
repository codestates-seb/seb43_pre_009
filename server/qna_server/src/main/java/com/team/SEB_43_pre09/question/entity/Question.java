package com.team.SEB_43_pre09.question.entity;

import com.team.SEB_43_pre09.answer.entity.Answer;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter // Lombok을 사용하여 Getter 메소드 자동 생성
@Setter // Lombok을 사용하여 Setter 메소드 자동 생성
@NoArgsConstructor // Lombok을 사용하여 기본 생성자 자동 생성
@Entity // JPA 엔티티 클래스임을 나타냄
public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long question_id; // 질문 ID

    @Column(nullable = false, length = 1000)
    private String question_title; // 질문 제목

    @Column(nullable = false, length = 5000)
    private String content; // 질문 내용

    @Column(nullable = false)
    private LocalDateTime created_at; // 질문 작성일

    @Column(nullable = false)
    private LocalDateTime modified_at; // 질문 최종 수정일

    @Column(nullable = false)
    private long view_count; // 조회수

    @Column(nullable = false)
    private long member_id; // 질문 작성자의 회원 ID

    @OneToOne // 일대일 관계 설정
    @JoinColumn(name = "accepted_answer_id") // 조인 컬럼명 설정
    private Answer accepted_Answer; // 채택된 답변

    // Question 생성자
    public Question(String title, String content, long memberId) {
        this.question_title = title; // 질문 제목 초기화
        this.content = content; // 질문 내용 초기화
        this.member_id = memberId; // 질문 작성자의 회원 ID 초기화
        this.created_at = LocalDateTime.now(); // 질문 작성일 초기화
        this.modified_at = LocalDateTime.now(); // 질문 최종 수정일 초기화
        this.view_count = 0; // 조회수 초기화
    }

    // 채택된 답변을 설정하는 메서드
    public void setAcceptedAnswer(Answer answer) {
        this.accepted_Answer = answer; // 채택된 답변 초기화
        answer.setAnswer_status(Answer.AnswerStatus.ANSWER_ADOPT); // 답변의 상태를 채택 상태로 변경
    }
}


