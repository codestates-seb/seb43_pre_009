package com.team.SEB_43_pre09.answer.dto;

/**
 *
 *
 * 답변 수정에 사용되는 AnswerPatchDto 클래스
 *
 *
 **/
public class AnswerPatchDto {
    private long answerId; // 답변 고유 번호
    private String title; // 답변 제목
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
