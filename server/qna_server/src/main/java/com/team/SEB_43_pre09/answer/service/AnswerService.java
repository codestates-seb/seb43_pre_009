package com.team.SEB_43_pre09.answer.service;

import com.team.SEB_43_pre09.answer.entity.Answer;
import com.team.SEB_43_pre09.answer.repository.AnswerRepository;
import com.team.SEB_43_pre09.member.service.MemberService;
import com.team.SEB_43_pre09.question.service.QuestionService;
import org.springframework.stereotype.Service;

import java.util.List;

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
        Answer createdAnswer = answer;
        return createdAnswer;
    }

    /** 답변을 수정하는 메서드 */
    public Answer updateAnswer(Answer answer) {
        // TODO should business logic

        // answer 객체는 나중에 DB에 업데이트 후, 되돌려 받는 것으로 변경 필요.
        Answer updatedAnswer = answer;
        return updatedAnswer;
    }

    /** 답변을 삭제하는 메서드 */

    public void deleteAnswer(long answer_id) {
        // TODO should business logic
    }




//    /** 답변을 찾는 메서드 (사용자 요구사항 정의서에 없음. 필요시 구현)*/
//    public Answer findAnswer(Answer answer) { // Dto 구현이 아직 안되어있음.
//        return null;
//    }
//
//    /** 답변목록을 찾는 메서드 (사용자 요구사항 정의서에 없음. 필요시 구현)*/
//public List<Answer> findAnswers() {
//    // TODO should business logic
//
//    // TODO answer 객체는 나중에 DB에서 조회하는 것으로 변경 필요.
//    List<Answer> answers = List.of(
//            new Answer(1, "hgd@gmail.com", "홍길동", "010-1234-5678"),
//            new Answer(2, "lml@gmail.com", "이몽룡", "010-1111-2222")
//    );
//    return answers;
//}
}
