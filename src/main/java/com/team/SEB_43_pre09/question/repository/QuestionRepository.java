package com.team.SEB_43_pre09.question.repository;

import com.team.SEB_43_pre09.question.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QuestionRepository extends JpaRepository<Question, Long> {

}