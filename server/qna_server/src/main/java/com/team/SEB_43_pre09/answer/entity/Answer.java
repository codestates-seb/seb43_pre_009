package com.team.SEB_43_pre09.answer.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Answer {
    private long answer_id; // 답변 고유 번호
    private long question_id; // 답변이 달린 질문의 고유번호
    private long member_id; // 답변을 등록한 회원의 고유번호
    private String answer_title; // 답변 제목
    private String answer_content; // 답변 내용
    private LocalDateTime answer_created_at; // 답변 등록 시간
    private LocalDateTime answer_modified_at; // 답변 수정 시간
}
