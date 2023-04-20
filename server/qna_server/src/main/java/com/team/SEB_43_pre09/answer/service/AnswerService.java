package com.team.SEB_43_pre09.answer.service;

import com.team.SEB_43_pre09.answer.entity.Answer;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AnswerService {
    /** 답변을 등록하는 메서드 */
    public Answer createAnswer(Answer answer) {
        // TODO should business logic

        // TODO answer 객체는 나중에 DB에 저장 후, 되돌려 받는 것으로 변경 필요.
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
