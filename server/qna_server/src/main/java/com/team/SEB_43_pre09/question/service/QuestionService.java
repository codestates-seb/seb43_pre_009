package com.team.SEB_43_pre09.question.service;

import com.team.SEB_43_pre09.answer.entity.Answer;
import com.team.SEB_43_pre09.question.entity.Question;
import com.team.SEB_43_pre09.question.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class QuestionService {

    private final QuestionRepository questionRepository;

    // 생성자를 통해 QuestionRepository를 주입 받음
    @Autowired
    public QuestionService(QuestionRepository questionRepository) {
        this.questionRepository = questionRepository;
    }

    // 모든 Question 엔티티를 조회하는 메서드
    public List<Question> getAllQuestions() {
        return questionRepository.findAll();
    }

    // id를 통해 특정 Question 엔티티를 조회하는 메서드
    public Optional<Question> getQuestionById(long id) {
        return questionRepository.findById(id);
    }

    // 새로운 Question 엔티티를 생성하는 메서드
    public Question createQuestion(Question question) {
        return questionRepository.save(question);
    }

    // 기존 Question 엔티티를 수정하는 메서드
    public Question updateQuestion(Question question) {
        return questionRepository.save(question);
    }

    // id를 통해 특정 Question 엔티티를 삭제하는 메서드
    public void deleteQuestion(long id) {
        questionRepository.deleteById(id);
    }

    // 특정 Question 엔티티에 대해 채택된 답변을 설정하는 메서드
    public Question acceptAnswer(Question question, Answer answer) {
        question.setAcceptedAnswer(answer); // 특정 Question 엔티티에 대해 채택된 답변을 설정
        return questionRepository.save(question); // QuestionRepository를 통해 엔티티를 저장하고 업데이트된 Question 객체 반환
    }
}

