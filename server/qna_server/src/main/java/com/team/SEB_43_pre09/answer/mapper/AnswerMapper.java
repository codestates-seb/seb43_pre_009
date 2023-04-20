package com.team.SEB_43_pre09.answer.mapper;

import com.team.SEB_43_pre09.answer.dto.AnswerPatchDto;
import com.team.SEB_43_pre09.answer.dto.AnswerPostDto;
import com.team.SEB_43_pre09.answer.dto.AnswerResponseDto;
import com.team.SEB_43_pre09.answer.entity.Answer;
import org.mapstruct.Mapper;

/**
 *
 *
 * MapStruct가 아래 MemberMapper 인터페이스를 기반으로 매퍼(Mapper) 구현 클래스를 자동으로 생성해 줍니다.
 *
 *
 **/
@Mapper(componentModel = "spring") // MapStruct의 매퍼 인터페이스로 정의하여 Spring의 Bean으로 등록함.
public interface AnswerMapper {
    /** AnswerPostDto를 Answer로 변환 */
    Answer answerPostDtoToAnswer(AnswerPostDto answerPostDto);

    /** AnswerPatchDto를 Answer로 변환 */
    Answer answerPatchDtoToAnswer(AnswerPatchDto answerPatchDto);

    /** Answer를 AnswerResponseDto로 변환 */
    AnswerResponseDto answerToAnswerResponseDto(Answer answer);
}
