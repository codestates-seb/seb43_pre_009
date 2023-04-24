package com.team.SEB_43_pre09.question.repository;

import com.team.SEB_43_pre09.answer.entity.Answer;
import com.team.SEB_43_pre09.question.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository // 해당 인터페이스가 Repository 역할을 하는 것을 Spring에 알림
public interface QuestionRepository extends JpaRepository<Question, Long> {

    // 'acceptedAnswer' 필드가 특정 'Answer' 객체와 매핑되는 'Question' 객체를 찾기 위한 메소드
    Optional<Question> findByAcceptedAnswer(Answer answer);
}