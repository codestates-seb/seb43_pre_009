package com.team.SEB_43_pre09.exception;

import lombok.Getter;

public enum ExceptionCode {
    MEMBER_NOT_FOUND(404, "회원을 찾을 수 없습니다."),
    MEMBER_EXISTS(409, "회원이 이미 존재합니다."),
    QUESTION_NOT_FOUND(404, "질문을 찾을 수 없습니다."),
    ANSWER_NOT_FOUND(404, "답변을 찾을 수 없습니다."),
    CANNOT_CHANGE_ANSWER(403, "답변이 변경될 수 없습니다."),
    NOT_IMPLEMENTATION(501, "Not Implementation"),
    INVALID_MEMBER_STATUS(400, "Invalid member status");
    //    ANSWER_CODE_EXISTS(409, "답변 코드가 존재합니다."); // 삭제해도 관계없으나, 혹시몰라 남겨둔 미사용코드

    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int code, String message) {
        this.status = code;
        this.message = message;
    }
}

