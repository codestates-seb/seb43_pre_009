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
            @Mapping(target = "question_title", source = "question.question_title"),
            @Mapping(target = "content", source = "question.content"),
            @Mapping(target = "member_id", source = "question.member_id")
    })
    QuestionDto toDto(Question question);

    // QuestionDto 객체를 Question 엔티티 객체로 매핑
    // toDto 메소드와 마찬가지로 @Mapping 어노테이션을 사용하여 QuestionDto 객체의 각 필드를 Question 객체의 해당 필드에 매핑
    @Mappings({
            @Mapping(target = "question_title", source = "dto.question_title"),
            @Mapping(target = "content", source = "dto.content"),
            @Mapping(target = "member_id", source = "dto.member_id")
    })
    Question toEntity(QuestionDto dto);
}