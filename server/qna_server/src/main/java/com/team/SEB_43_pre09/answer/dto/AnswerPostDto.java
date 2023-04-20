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
    private long answer_id; // 답변의 고유번호

    @Positive
    private long question_id; // 답변이 달린 질문의 고유번호

    @Positive
    private long member_id; // 답변을 등록한 회원의 고유번호

    @NotEmpty(message = "제목은 비어있지 않아야 합니다.")
    private String answer_title; // 답변 제목

    @NotEmpty(message = "내용은 비어있지 않아야 합니다.")
    private String answer_content; // 답변 내용
    private LocalDateTime answer_created_at; // 답변 등록 시간

    public long getAnswer_id() {
        return answer_id;
    }

    public void setAnswer_id(long answer_id) {
        this.answer_id = answer_id;
    }

    public long getQuestion_id() {
        return question_id;
    }

    public void setQuestion_id(long question_id) {
        this.question_id = question_id;
    }

    public long getMember_id() {
        return member_id;
    }

    public void setMember_id(long member_id) {
        this.member_id = member_id;
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

    public LocalDateTime getAnswer_created_at() {
        return answer_created_at;
    }

    public void setAnswer_created_at(LocalDateTime answer_created_at) {
        this.answer_created_at = answer_created_at;
    }
}
