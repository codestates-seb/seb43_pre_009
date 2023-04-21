package com.team.SEB_43_pre09.answer.dto;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Positive;
import java.time.LocalDateTime;

/**
 *
 *
 * 답변 등록에 사용되는 AnswerPatchDto 클래스
 *
 *
 **/
public class AnswerPostDto {
    @Positive
    private long answerId; // 답변의 고유번호

    @Positive
    private long questionId; // 답변이 달린 질문의 고유번호

    @Positive
    private long memberId; // 답변을 등록한 회원의 고유번호

    @NotEmpty(message = "제목은 비어있지 않아야 합니다.")
    private String answerTitle; // 답변 제목

    @NotEmpty(message = "내용은 비어있지 않아야 합니다.")
    private String answerContent; // 답변 내용
    private LocalDateTime answerCreatedAt; // 답변 등록 시간

    public long getAnswerId() {
        return answerId;
    }

    public void setAnswerId(long answerId) {
        this.answerId = answerId;
    }

    public long getQuestionId() {
        return questionId;
    }

    public void setQuestionId(long questionId) {
        this.questionId = questionId;
    }

    public long getMemberId() {
        return memberId;
    }

    public void setMemberId(long memberId) {
        this.memberId = memberId;
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

    public LocalDateTime getAnswerCreatedAt() {
        return answerCreatedAt;
    }

    public void setAnswerCreatedAt(LocalDateTime answerCreatedAt) {
        this.answerCreatedAt = answerCreatedAt;
    }
}
