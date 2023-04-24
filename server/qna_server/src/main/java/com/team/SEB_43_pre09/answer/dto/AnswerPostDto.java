package com.team.SEB_43_pre09.answer.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
import java.time.LocalDateTime;

/**
 *
 *
 * 답변 등록에 사용되는 AnswerPatchDto 클래스
 *
 *
 **/
@Getter
@Setter
public class AnswerPostDto {

    @NotNull
    private long question_id; // 답변이 달린 질문의 고유번호

    @NotNull
    private int member_id; // 답변을 등록한 회원의 고유번호

    @NotEmpty(message = "제목은 비어있지 않아야 합니다.")
    private String answer_title; // 답변 제목

    @NotEmpty(message = "내용은 비어있지 않아야 합니다.")
    private String answer_content; // 답변 내용
    private LocalDateTime answer_created_at; // 답변 등록 시간

}

