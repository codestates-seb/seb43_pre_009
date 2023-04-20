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
    private long answerId; // 답변 고유 번호
    private long questionId; // 답변이 달린 질문의 고유번호
    private long memberId; // 답변을 등록한 회원의 고유번호
    private String answerTitle; // 답변 제목
    private String answerContent; // 답변 내용
    private LocalDateTime answerCreatedAt; // 답변 등록 시간
    private LocalDateTime answerModifiedAt; // 답변 수정 시간
}
