package com.team.SEB_43_pre09.answer.controller;

import com.team.SEB_43_pre09.answer.dto.AnswerPatchDto;
import com.team.SEB_43_pre09.answer.dto.AnswerPostDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.HashMap;
import java.util.Map;

/**
 * DTO 유효성 검증 까지 기능 구현 완료 (1/7)
 *
 * AnswerController는 답변에 대한 두 개의 메서드(postCoffee(), patchCoffee())등을 포함하고 있습니다.
 * AnswerController는 의존하는 서비스 계층의 클래스는 존재하지 않으며, 따라서 구체적인 구현 로직을 포함하고 있지 않습니다.
 *
 * @author  유한별
 * @version 1.0.1
 */
@RestController // 컨트롤러 설정
@RequestMapping("/answers")
public class AnswerController {
    /**
     * 답변 등록을 위한 핸들러 메서드를 구현한 코드입니다.
     * <특징>
     * @RequestParam을 이용해 각각의 파라미터를 전달 받는 대신에 DTO 클래스를 이용해 한번에 전달 받습니다.
     * @param AnswerPostDto 커피 정보 등록을 위해 클라이언트 측으로부터 전달 받은 request body에 매핑되는 DTO 클래스
     * @return  클라이언트 측에 전송하는 response body용 커피 정보가 포함된 ResponseEntity
     *          <p>
     *          서비스 계층과의 연동이 없으므로 편의상 request body로 전달받은 AnswerPostDto를 그대로 되돌려 줍니다.
     */

    /** 답변을 등록하는 핸들러 메서드 **/
    @PostMapping // 클라이언트의 요청 데이터(request body)를 서버에 생성
    public ResponseEntity postAnswer(@Valid @RequestBody AnswerPostDto answerPostDto) { // @RequestBody : JSON 형식의 Request Body를 AnswerPostDto 클래스의 객체로 변환을 시켜주는 역할.
        return new ResponseEntity<>(answerPostDto, HttpStatus.CREATED); // ResponseEntity 객체를 생성하면서 생성자 파라미터로 answerPostDto와 HTTP 응답상태를 함께 전달함.
    }

    /** 답변을 수정하는 핸들러 메서드 **/
    @PatchMapping("/{answer_id}")
    public ResponseEntity patchAnswer(@PathVariable("answer_id") @Positive int answerId,
                                      @Valid @RequestBody AnswerPatchDto answerPatchDto) {
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
