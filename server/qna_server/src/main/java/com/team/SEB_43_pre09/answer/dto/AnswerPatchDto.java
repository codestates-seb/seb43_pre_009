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
    private long answerId; // 답변 고유 번호

    @NotEmpty(message = "제목은 비어있지 않아야 합니다.")
    private String answerTitle; // 답변 제목

    @NotEmpty(message = "내용은 비어있지 않아야 합니다.")
    private String answerContent; // 답변 내용
    private LocalDateTime answerModifiedAt; // 답변 수정 시간


    public long getAnswerId() {
        return answerId;
    }

    public void setAnswerId(long answerId) {
        this.answerId = answerId;
    }

    public String getAnswerTitle() {
        return answerTitle;
    }

    public void setAnswerTitle(String answerTitle) {
        this.answerTitle = answerTitle;
    }

    public String getAnswerContent() {
        return answerContent;
    }

    public void setAnswerContent(String answerContent) {
        this.answerContent = answerContent;
    }

    public LocalDateTime getAnswerModifiedAt() {
        return answerModifiedAt;
    }

    public void setAnswerModifiedAt(LocalDateTime answerModifiedAt) {
        this.answerModifiedAt = answerModifiedAt;
    }
}
