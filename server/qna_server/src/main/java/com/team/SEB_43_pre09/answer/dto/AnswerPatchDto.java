package com.team.SEB_43_pre09.answer.dto;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Positive;

/**
 *
 *
 * 답변 수정에 사용되는 AnswerPatchDto 클래스
 *
 *
 **/
public class AnswerPatchDto {
    @Positive
    private long answerId; // 답변 고유 번호

    @NotEmpty(message = "제목은 비어있지 않아야 합니다.")
    private String title; // 답변 제목

    @NotEmpty(message = "내용은 비어있지 않아야 합니다.")
    private String content; // 답변 내용
    private String modifiedAt; // 답변 수정 시간

    public long getAnswerId() {
        return answerId;
    }

    public void setAnswerId(long answerId) {
        this.answerId = answerId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getModifiedAt() {
        return modifiedAt;
    }

    public void setModifiedAt(String modifiedAt) {
        this.modifiedAt = modifiedAt;
    }
}
