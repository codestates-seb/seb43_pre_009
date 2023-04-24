package com.team.SEB_43_pre09.question.controller;

import com.team.SEB_43_pre09.answer.entity.Answer;
import com.team.SEB_43_pre09.question.entity.Question;
import com.team.SEB_43_pre09.question.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/questions")
public class QuestionController {

    private final QuestionService questionService;

    @Autowired
    public QuestionController(QuestionService questionService) {
        this.questionService = questionService;
    }

    // 모든 Question 엔티티를 조회하는 API
    @GetMapping
    public ResponseEntity<List<Question>> getAllQuestions() {
        List<Question> questions = questionService.getAllQuestions();
        return ResponseEntity.ok(questions);
    }

    // id를 통해 특정 Question 엔티티를 조회하는 API
    @GetMapping("/{id}")
    public ResponseEntity<Question> getQuestionById(@PathVariable long id) {
        Optional<Question> question = questionService.getQuestionById(id);
        if (question.isPresent()) {
            return ResponseEntity.ok(question.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // 새로운 Question 엔티티를 생성하는 API
    @PostMapping
    public ResponseEntity<Question> createQuestion(@RequestBody Question question) {
        Question createdQuestion = questionService.createQuestion(question);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdQuestion);
    }

    // 기존 Question 엔티티를 수정하는 API
    @PutMapping("/{id}")
    public ResponseEntity<Question> updateQuestion(@PathVariable long id, @RequestBody Question question) {
        Optional<Question> existingQuestion = questionService.getQuestionById(id);
        if (existingQuestion.isPresent()) {
            question.setMember_id(id);
            Question updatedQuestion = questionService.updateQuestion(question);
            return ResponseEntity.ok(updatedQuestion);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // id를 통해 특정 Question 엔티티를 삭제하는 API
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteQuestion(@PathVariable long id) {
        Optional<Question> existingQuestion = questionService.getQuestionById(id);
        if (existingQuestion.isPresent()) {
            questionService.deleteQuestion(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    // id를 통해 특정 Question 엔티티의 채택된 답변을 설정하는 API
    @PatchMapping("/{id}/accept-answer")
    public ResponseEntity<Question> acceptAnswer(@PathVariable long id, @RequestBody Answer answer) {
        Optional<Question> existingQuestion = questionService.getQuestionById(id);
        if (existingQuestion.isPresent()) {
            Question updatedQuestion = questionService.acceptAnswer(existingQuestion.get(), answer);
            return ResponseEntity.ok(updatedQuestion);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}