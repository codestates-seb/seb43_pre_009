package com.team.SEB_43_pre09.member.contoller;

import com.team.SEB_43_pre09.member.dto.MemberDTO;
import com.team.SEB_43_pre09.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;

@RestController
@RequestMapping("/members")
@Validated
@RequiredArgsConstructor
public class MemberController {
    // 생성자 주입
    private final MemberService memberService;
    // 회원가입 기능
    @GetMapping("/member/save")
    public String saveForm() {return "save";}

    @PostMapping("/member/save")
    public String save(@ModelAttribute MemberDTO memberDTO) {
        System.out.println("MemberController.save");
        System.out.println("memberDTO = " + memberDTO);
        memberService.save(memberDTO);
        return "login"; // TODO : 로그인 페이지 api 받아오기
    }

    @GetMapping("/member/login")
    public String longinForm() {
        return "login";
    }

    @PostMapping("/member/login")
    public String login(@ModelAttribute MemberDTO memberDTO, HttpSession session) {
        MemberDTO loginResult = memberService.login(memberDTO);
        if (loginResult != null) {
            // 로그인 성공
            session.setAttribute("loginEmail", loginResult.getMemberEmail());
            return "main"; // 로그인 성공시 main 페이지 출력
        } else {
            // 로그인 실패
            return "login";
        }
    }

}
