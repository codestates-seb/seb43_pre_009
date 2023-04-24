package com.team.SEB_43_pre09.answer.service;

import com.team.SEB_43_pre09.answer.entity.Answer;
import com.team.SEB_43_pre09.answer.repository.AnswerRepository;
import com.team.SEB_43_pre09.exception.BusinessLogicException;
import com.team.SEB_43_pre09.exception.ExceptionCode;
import com.team.SEB_43_pre09.member.service.MemberService;
import com.team.SEB_43_pre09.question.service.QuestionService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AnswerService {
    private final MemberService memberService;
    private final QuestionService questionService;
    private final AnswerRepository answerRepository;

    public AnswerService(MemberService memberService,
                         QuestionService questionService,
                         AnswerRepository answerRepository) {
        this.memberService = memberService;
        this.questionService = questionService;
        this.answerRepository = answerRepository;
    }

    /** 답변을 등록하는 메서드 */
    public Answer createAnswer(Answer answer) {
        // 회원이 존재하는지 확인
//        memberService.findVerifiedMember(answer.getMember().getMemberId()); // TODO memberService에 맞춰 수정해야함.

        // 질문이 존재하는지 확인
        Answer savedAnswer = saveAnswer(answer);
        return savedAnswer;
    }

    /** 답변을 수정하는 메서드 */
    public Answer updateAnswer(Answer answer) {
        // 수정하려는 답변가 검증된 답변인지 확인(존재하는 답변인지 확인 등)
        Answer findAnswer = findVerifiedAnswer(answer.getAnswer_id());

        return answerRepository.save(findAnswer);
    }

    /** 답변을 조회하는 메서드 */
    public Answer findAnswer(long answer_id) {
        return findVerifiedAnswerByQuery(answer_id);
    }

    /** 답변을 삭제하는 메서드 */
    public void deleteAnswer(long answer_id) {
        Answer answer = findVerifiedAnswer(answer_id);
        answerRepository.delete(answer);
    }

    /** 답변이 존재하는지 검증하는 메서드 */
    public Answer findVerifiedAnswer(long answer_id) {
        Optional<Answer> optionalAnswer = answerRepository.findById(answer_id);
        Answer findAnswer =
                optionalAnswer.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));
        return findAnswer;
    }

    private Answer findVerifiedAnswerByQuery(long answer_id) {
        Optional<Answer> optionalAnswer = answerRepository.findByAnswer(answer_id);
        Answer findAnswer =
                optionalAnswer.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));

        return findAnswer;
    }

    private Answer saveAnswer(Answer answer) {
        return answerRepository.save(answer);
    }

    // 삭제해도 관계없으나, 혹시 몰라 남겨둔 미사용 메서드
    //    private void verifyExistAnswer(String answerCode) {
//        Optional<Answer> answer = answerRepository.findByAnswerCode(answerCode);
//        if(answer.isPresent())
//            throw new BusinessLogicException(ExceptionCode.ANSWER_CODE_EXISTS);
//    }

}

