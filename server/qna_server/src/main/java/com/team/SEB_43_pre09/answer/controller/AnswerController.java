package com.team.SEB_43_pre09.answer.controller;

import com.team.SEB_43_pre09.answer.dto.AnswerPatchDto;
import com.team.SEB_43_pre09.answer.dto.AnswerPostDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController // 컨트롤러 설정
@RequestMapping("/answers")
public class AnswerController {

    /** 답변을 등록하는 핸들러 메서드 **/
    @PostMapping // 클라이언트의 요청 데이터(request body)를 서버에 생성
    public ResponseEntity postAnswer(@RequestBody AnswerPostDto answerPostDto) { // @RequestBody : JSON 형식의 Request Body를 AnswerPostDto 클래스의 객체로 변환을 시켜주는 역할.
        return new ResponseEntity<>(answerPostDto, HttpStatus.CREATED); // ResponseEntity 객체를 생성하면서 생성자 파라미터로 answerPostDto와 HTTP 응답상태를 함께 전달함.
    }

    /** 답변을 수정하는 핸들러 메서드 **/
    @PatchMapping("/{answer_id}")
    public ResponseEntity patchAnswer(@PathVariable("answer_id") int answerId,
                                      @RequestBody AnswerPatchDto answerPatchDto) {
        answerPatchDto.setAnswerId(answerId);
        answerPatchDto.setTitle("sample title");
        answerPatchDto.setContent("sample content");

        // No need Business logic

        return new ResponseEntity<>(answerPatchDto, HttpStatus.OK);
    }

    /** 답변을 조회하는 핸들러 메서드 **/
    @GetMapping("/{answer_id}") // 클라이언트가 서버에 리소스를 조회
    public ResponseEntity getAnswer(@PathVariable("answer_id") int answerId) { // @PathVariable의 괄호 안에 입력한 문자열 값은 @GetMapping의 중괄호({ }) 안의 문자열과 동일해야 합니다.
        System.out.println("# anwerId: " + answerId);

        // not implementation

        return new ResponseEntity<>(HttpStatus.OK);
    }

    /** 답변을 삭제하는 핸들러 메서드 **/
    @DeleteMapping("/{answer_id}")
    public ResponseEntity deleteAnswer(@PathVariable("answer-id") long answerId) { // @PathVariable의 괄호 안에 입력한 문자열 값은 @GetMapping의 중괄호({ }) 안의 문자열과 동일해야 합니다.
        // No need business logic

        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
