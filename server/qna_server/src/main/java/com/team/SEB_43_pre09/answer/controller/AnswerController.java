package com.team.SEB_43_pre09.answer.controller;

import com.team.SEB_43_pre09.answer.dto.AnswerPatchDto;
import com.team.SEB_43_pre09.answer.dto.AnswerPostDto;
import com.team.SEB_43_pre09.answer.entity.Answer;
import com.team.SEB_43_pre09.answer.service.AnswerService;
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
    private final AnswerService answerService;

    public AnswerController() {
        this.answerService = new AnswerService();
    }

    /** 답변을 등록하는 핸들러 메서드 **/
    @PostMapping // 클라이언트의 요청 데이터(request body)를 서버에 생성
    public ResponseEntity postAnswer(@Valid @RequestBody AnswerPostDto answerDto) { // @RequestBody : JSON 형식의 Request Body를 AnswerPostDto 클래스의 객체로 변환을 시켜주는 역할.
        Answer answer = new Answer();
        answer.setAnswer_id(answerDto.getAnswer_id());
        answer.setQuestion_id(answerDto.getQuestion_id());
        answer.setMember_id(answerDto.getMember_id());
        // 타이틀, 콘텐츠, 등록시간 추가해야함.

        Answer response = answerService.createAnswer(answer);

        return new ResponseEntity<>(response, HttpStatus.CREATED); // ResponseEntity 객체를 생성하면서 생성자 파라미터로 answerPostDto와 HTTP 응답상태를 함께 전달함.
    }

    /** 답변을 수정하는 핸들러 메서드 **/
    @PatchMapping("/{answer_id}")
    public ResponseEntity patchAnswer(@PathVariable("answer_id") @Positive long answer_id,
                                      @Valid @RequestBody AnswerPatchDto answerPatchDto) {
        answerPatchDto.setAnswer_id(answer_id);
        answerPatchDto.setAnswer_title("sample title");
        answerPatchDto.setAnswer_content("sample content");

        // No need Business logic

        return new ResponseEntity<>(answerPatchDto, HttpStatus.OK);
    }

    /** 답변을 조회하는 핸들러 메서드 **/
    @GetMapping("/{answer_id}") // 클라이언트가 서버에 리소스를 조회
    public ResponseEntity getAnswer(@PathVariable("answer_id") long answer_id) { // @PathVariable의 괄호 안에 입력한 문자열 값은 @GetMapping의 중괄호({ }) 안의 문자열과 동일해야 합니다.
        System.out.println("# answer_id: " + answer_id);

        // not implementation

        return new ResponseEntity<>(HttpStatus.OK);
    }

    /** 답변을 삭제하는 핸들러 메서드 **/
    @DeleteMapping("/{answer_id}")
    public ResponseEntity deleteAnswer(@PathVariable("answer_id") long answer_id) { // @PathVariable의 괄호 안에 입력한 문자열 값은 @GetMapping의 중괄호({ }) 안의 문자열과 동일해야 합니다.
        // No need business logic

        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
