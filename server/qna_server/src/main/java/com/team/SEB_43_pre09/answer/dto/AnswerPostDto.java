package com.team.SEB_43_pre09.answer.dto;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Positive;

/**
 *
 *
 * 답변 등록에 사용되는 AnswerPatchDto 클래스
 *
 *
 **/
public class AnswerPostDto {
    @Positive
    private long questionId; // 답변이 달린 질문의 고유번호

    @Positive
    private long memberId; // 답변을 등록한 회원의 고유번호

    @NotEmpty(message = "제목은 비어있지 않아야 합니다.")
    private String title; // 답변 제목

    @NotEmpty(message = "내용은 비어있지 않아야 합니다.")
    private String content; // 답변 내용
    private String createdAt; // 답변 등록 시간

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

    public String getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(String createdAt) {
        this.createdAt = createdAt;
    }
}
