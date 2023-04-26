package com.team.SEB_43_pre09.dto;

import lombok.Getter;

@Getter

public class MultiResponseDto <T, G> {
    // T 타입 변수 선언: 데이터를 저장
    T data;
    // G 타입 변수 선언: 페이지 정보를 저장
    G pageInfo;

    /**
     * 생성자: MultiResponseDto 객체를 생성하며, 데이터와 페이지 정보를 초기화한다
     *
     * @param data     데이터를 저장할 T 타입 변수
     * @param pageInfo 페이지 정보를 저장할 G 타입 변수
     */
    public MultiResponseDto(T data, G pageInfo) {
        // 데이터를 저장합니다.
        this.data = data;
        // 페이지 정보를 저장합니다.
        this.pageInfo = pageInfo;
    }
}