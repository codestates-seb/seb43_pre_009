package com.team.SEB_43_pre09.question.entity;

import com.team.SEB_43_pre09.answer.entity.Answer;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long question_id;  //질문 ID

    @Column(nullable = false, length = 1000)
    private String question_title;  //질문 제목

    @Column(nullable = false, length = 5000)
    private String content;  //질문 내용

    @Column(nullable = false)
    private LocalDateTime created_at;  //질문 작성일

    @Column(nullable = false)
    private LocalDateTime modified_at;  //질문 최종 수정일

    @Column(nullable = false)
    private long view_count;  //조회수

    @Column(nullable = false)
    private long member_id;  //질문 작성자의 회원 ID

    @OneToOne
    @JoinColumn(name = "accepted_answer_id")
    private Answer accepted_Answer;    //채택된 답변

    public Question(String title, String content, long memberId) {
        this.question_title = title;
        this.content = content;
        this.member_id = memberId;
        this.created_at = LocalDateTime.now();
        this.modified_at = LocalDateTime.now();
        this.view_count = 0;
    }
    //채택된 답변을 설정하는 메서드
    public void setAcceptedAnswer(Answer answer) {
        this.accepted_Answer = answer;
        answer.setAnswer_status (Answer.AnswerStatus.ANSWER_ADOPT);
    }
}


