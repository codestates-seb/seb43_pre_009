package com.team.SEB_43_pre09.exception;

import lombok.Getter;
/**
 *
 *
 *  서비스 계층에서 사용할 Custom Exception 입니다.
 *
 *
 **/
public class BusinessLogicException extends RuntimeException { // RuntimeException을 상속합니다.

    @Getter
    private ExceptionCode exceptionCode;  /** exceptionCode 를 멤버 변수로 지정하여 생성자를 통해 조금 더 구체적인 예외 정보들을 제공합니다. */

    public BusinessLogicException(ExceptionCode exceptionCode) {
        super(exceptionCode.getMessage());
        this.exceptionCode = exceptionCode;
    } /** 상위 클래스인 RuntimeException 의 생성자(super)로 예외 메시지를 전달해 줍니다. */
}

