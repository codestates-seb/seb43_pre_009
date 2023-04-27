package com.team.SEB_43_pre09.question.mapper;

import com.team.SEB_43_pre09.question.dto.QuestionDto;
import com.team.SEB_43_pre09.question.entity.Question;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

@Mapper(componentModel = "spring")
public interface QuestionMapper {

    // Question 엔티티 객체를 QuestionDto 객체로 매핑
    // @Mapping 어노테이션을 사용하여 Question 객체의 각 필드를 QuestionDto 객체의 해당 필드에 매핑
    @Mappings({
            @Mapping(target = "question_title", source = "question.question_title"), // Question 객체의 question_title 필드를 QuestionDto 객체의 question_title 필드에 매핑
            @Mapping(target = "content", source = "question.content"), // Question 객체의 content 필드를 QuestionDto 객체의 content 필드에 매핑
            @Mapping(target = "member_id", source = "question.member_id"), // Question 객체의 member_id 필드를 QuestionDto 객체의 member_id 필드에 매핑
//            @Mapping(target = "isAccepted", expression = "java(question.getAccepted_Answer() != null)"), // Question 객체의 accepted_Answer 필드가 null이 아닌 경우, isAccepted 필드를 true로 설정
            @Mapping(target = "accepted_Answer_Id", source = "question.accepted_Answer.answer_id") // Question 객체의 accepted_Answer 객체의 answer_id 필드를 QuestionDto 객체의 accepted_Answer_Id 필드에 매핑
    })
    QuestionDto toDto(Question question);

    // QuestionDto 객체를 Question 엔티티 객체로 매핑
    // toDto 메소드와 마찬가지로 @Mapping 어노테이션을 사용하여 QuestionDto 객체의 각 필드를 Question 객체의 해당 필드에 매핑
    @Mappings({
            @Mapping(target = "question_title", source = "dto.question_title"), // QuestionDto 객체의 question_title 필드를 Question 객체의 question_title 필드에 매핑
            @Mapping(target = "content", source = "dto.content"), // QuestionDto 객체의 content 필드를 Question 객체의 content 필드에 매핑
            @Mapping(target = "member_id", source = "dto.member_id") // QuestionDto 객체의 member_id 필드를 Question 객체의 member_id 필드에 매핑
    })
    Question toEntity(QuestionDto dto);
}