package com.team.SEB_43_pre09.question.dto;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Positive;

/**
 * 질문 수정에 사용되는 DTO 클래스
 */
public class QuestionPatchDto {
    @Positive
    private long question_id; // 수정할 질문의 고유번호

    @NotEmpty(message = "제목은 비어있지 않아야 합니다.")
    private String question_title; // 수정할 질문 제목

    @NotEmpty(message = "내용은 비어있지 않아야 합니다.")
    private String content; // 수정할 질문 내용

    /**
     * question_id 필드의 Getter 메소드
     * @return question_id 필드값 반환
     */
    public long getQuestion_id() {
        return question_id;
    }

    /**
     * question_id 필드의 Setter 메소드
     * @param question_id 수정할 질문의 고유번호
     */
    public void setQuestion_id(long question_id) {
        this.question_id = question_id;
    }

    /**
     * question_title 필드의 Getter 메소드
     * @return question_title 필드값 반환
     */
    public String getQuestion_title() {
        return question_title;
    }

    /**
     * question_title 필드의 Setter 메소드
     * @param question_title 수정할 질문 제목
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
     * @param content 수정할 질문 내용
     */
    public void setContent(String content) {
        this.content = content;
    }
}