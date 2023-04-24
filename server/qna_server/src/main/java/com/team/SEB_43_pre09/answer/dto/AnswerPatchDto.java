package com.team.SEB_43_pre09.answer.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Positive;
import java.time.LocalDateTime;

/**
 *
 *
 * 답변 수정에 사용되는 AnswerPatchDto 클래스
 *
 *
 **/
@Getter
@Setter
public class AnswerPatchDto {
    @Positive
    private long answer_id; // 답변 고유 번호

    @NotEmpty(message = "제목은 비어있지 않아야 합니다.")
    private String answer_title; // 답변 제목

    @NotEmpty(message = "내용은 비어있지 않아야 합니다.")
    private String answer_content; // 답변 내용
    private LocalDateTime answer_modified_at; // 답변 수정 시간


}

