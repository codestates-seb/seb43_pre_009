package com.team.SEB_43_pre09.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class PageInfo {
    // int 타입 변수 선언: 현재 페이지 번호를 저장
    private int page;
    // int 타입 변수 선언: 페이지당 보여줄 요소의 개수를 저장
    private int size;
    // int 타입 변수 선언: 전체 페이지의 개수를 저장
    private int totalPages;
    // long 타입 변수 선언: 전체 요소의 개수를 저장
    private long totalElements;
}
