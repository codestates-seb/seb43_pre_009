package com.team.SEB_43_pre09.answer.mapper;

import com.team.SEB_43_pre09.answer.dto.AnswerPatchDto;
import com.team.SEB_43_pre09.answer.dto.AnswerPostDto;
import com.team.SEB_43_pre09.answer.dto.AnswerResponseDto;
import com.team.SEB_43_pre09.answer.entity.Answer;
import com.team.SEB_43_pre09.member.entity.MemberEntity;
import com.team.SEB_43_pre09.question.entity.Question;
import org.mapstruct.Mapper;

import java.util.List;

/**
 *
 *
 * MapStruct가 아래 MemberMapper 인터페이스를 기반으로 매퍼(Mapper) 구현 클래스를 자동으로 생성해 줍니다.
 *
 *
 **/
@Mapper(componentModel = "spring") // MapStruct의 매퍼 인터페이스로 정의하여 Spring의 Bean으로 등록함.
public interface AnswerMapper {
    default Answer answerPostDtoToAnswer(AnswerPostDto answerPostDto) {
        Answer answer = new Answer();

        MemberEntity member = new MemberEntity();
        member.setMember_id(answerPostDto.getMember_id());

        Question question = new Question();
        question.setQuestion_id(answerPostDto.getQuestion_id());

        answer.setAnswer_content(answerPostDto.getAnswer_content());

        answer.setMember(member);
        answer.setQuestion(question);

        answer.setAnswer_created_at(answerPostDto.getAnswer_created_at());

        return answer;
    }

    // DTO -> Entity
    Answer answerPatchDtoToAnswer(AnswerPatchDto answerPatchDto);
    // Entity -> DTO
    default AnswerResponseDto answerToAnswerResponseDto(Answer answer){
        AnswerResponseDto answerResponseDto = new AnswerResponseDto(
                answer.getAnswer_id(),
                answer.getQuestion().getQuestion_id(),
                answer.getMember().getMember_id(),
                answer.getAnswer_content(),
                answer.getAnswer_title(),
                answer.getAnswer_created_at(),
                answer.getAnswer_modified_at()
        );
        return answerResponseDto;
    };
}

