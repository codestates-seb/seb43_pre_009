package com.team.SEB_43_pre09.question.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class QuestionDto {
    private String question_title; // 질문 제목
    private String content; // 질문 내용
    private long member_id; // 질문을 게시한 회원의 ID
    private String created_at; // 작성 시간
    private String updated_at; // 수정 시간
    private int view_count; // 조회수
}





