package com.team.SEB_43_pre09.answer.controller;

import com.team.SEB_43_pre09.answer.dto.AnswerPatchDto;
import com.team.SEB_43_pre09.answer.dto.AnswerPostDto;
import com.team.SEB_43_pre09.answer.entity.Answer;
import com.team.SEB_43_pre09.answer.mapper.AnswerMapper;
import com.team.SEB_43_pre09.answer.service.AnswerService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
//import com.team.SEB_43_pre09.answer.mapstruct.mapper.AnswerMapper;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;
import java.util.stream.Collectors;


/**
 * 서비스계층 까지 기능 구현 완료 (2/7)
 *
 * - DI 적용
 * - Mapstruct Mapper 적용
 *
 * @author  유한별
 * @version 1.0.2
 */
@RestController // 컨트롤러 설정
@RequestMapping("/answers")
@Validated
public class AnswerController {
    private final AnswerService answerService;
    private final AnswerMapper mapper;

    public AnswerController(AnswerService answerService, AnswerMapper mapper) {
        this.answerService = answerService;
        this.mapper = mapper;
    }

    /** 답변을 등록하는 핸들러 메서드 **/
    @PostMapping // 클라이언트의 요청 데이터(request body)를 서버에 생성
    public ResponseEntity postAnswer(@Valid @RequestBody AnswerPostDto answerPostDto) { // @RequestBody : JSON 형식의 Request Body를 AnswerPostDto 클래스의 객체로 변환을 시켜주는 역할.
        Answer answer = answerService.createAnswer(mapper.answerPostDtoToAnswer(answerPostDto));
        return new ResponseEntity<>(mapper.answerToAnswerResponseDto(answer), HttpStatus.CREATED); // ResponseEntity 객체를 생성하면서 생성자 파라미터로 answerPostDto와 HTTP 응답상태를 함께 전달함.
    }

    /** 답변을 수정하는 핸들러 메서드 **/
    // TODO 추후 수정되어야 하는 메서드
    @PatchMapping("/{answer_id}")
    public ResponseEntity patchAnswer(@PathVariable("answer_id") @Positive long answer_id,
                                      @Valid @RequestBody AnswerPatchDto answerPatchDto) {
        answerPatchDto.setAnswer_id(answer_id);

        Answer response =
                answerService.updateAnswer(mapper.answerPatchDtoToAnswer(answerPatchDto));

        return new ResponseEntity<>(mapper.answerToAnswerResponseDto(response), // TODO 추후 수정되어야 하는 메서드
                HttpStatus.OK);
    }

    /** 답변을 삭제하는 핸들러 메서드 **/
    @DeleteMapping("/{answer_id}")
    public ResponseEntity deleteAnswer(@PathVariable("answer_id") long answer_id) {
        System.out.println("# delete answer");
        answerService.deleteAnswer(answer_id);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    // 사용자 요구사항 정의서에 해당기능이 없어서 일단 주석처리 해두었음.
//    /** 답변을 조회하는 핸들러 메서드 **/
//    @GetMapping("/{answer_id}") // 클라이언트가 서버에 리소스를 조회
//    public ResponseEntity getAnswer(@PathVariable("answer_id") long answer_id) {
//        Answer response = answerService.findAnswer(answer_id);
//        return new ResponseEntity<>(mapper.answerToAnswerResponseDto(response), HttpStatus.OK);
//    }
}
