package com.team.SEB_43_pre09.answer.dto;

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
public class AnswerPatchDto {
    @Positive
    private long answer_id; // 답변 고유 번호

    @NotEmpty(message = "제목은 비어있지 않아야 합니다.")
    private String answer_title; // 답변 제목

    @NotEmpty(message = "내용은 비어있지 않아야 합니다.")
    private String answer_content; // 답변 내용
    private LocalDateTime answer_modified_at; // 답변 수정 시간

    public long getAnswer_id() {
        return answer_id;
    }

    public void setAnswer_id(long answer_id) {
        this.answer_id = answer_id;
    }

    public String getAnswer_title() {
        return answer_title;
    }

    public void setAnswer_title(String answer_title) {
        this.answer_title = answer_title;
    }

    public String getAnswer_content() {
        return answer_content;
    }

    public void setAnswer_content(String answer_content) {
        this.answer_content = answer_content;
    }

    public LocalDateTime getAnswer_modified_at() {
        return answer_modified_at;
    }

    public void setAnswer_modified_at(LocalDateTime answer_modified_at) {
        this.answer_modified_at = answer_modified_at;
    }
}
