package com.team.SEB_43_pre09.question.dto;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Positive;

/**
 * 질문 등록에 사용되는 DTO 클래스
 */
public class QuestionPostDto {
    @NotEmpty(message = "제목은 비어있지 않아야 합니다.")
    private String question_title; // 질문 제목

    @NotEmpty(message = "내용은 비어있지 않아야 합니다.")
    private String content; // 질문 내용

    @Positive
    private long member_id; // 질문을 등록한 회원의 고유번호

    /**
     * question_title 필드의 Getter 메소드
     * @return question_title 필드값 반환
     */
    public String getQuestion_title() {
        return question_title;
    }

    /**
     * question_title 필드의 Setter 메소드
     * @param question_title 질문 제목
     */
    public void setQuestion_title(String question_title) {
        this.question_title = question_title;
    }

    /**
     * content 필드의 Getter 메소드
     * @return content 필드값 반환
     */
    public String getContent() {
        return content;
    }

    /**
     * content 필드의 Setter 메소드
     * @param content 질문 내용
     */
    public void setContent(String content) {
        this.content = content;
    }

    /**
     * member_id 필드의 Getter 메소드
     * @return member_id 필드값 반환
     */
    public long getMember_id() {
        return member_id;
    }

    /**
     * member_id 필드의 Setter 메소드
     * @param member_id 질문을 등록한 회원의 고유번호
     */
    public void setMember_id(long member_id) {
        this.member_id = member_id;
    }
}