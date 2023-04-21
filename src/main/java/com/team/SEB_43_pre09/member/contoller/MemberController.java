package com.team.SEB_43_pre09.member.contoller;

import com.team.SEB_43_pre09.member.dto.MemberDTO;
import com.team.SEB_43_pre09.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.ui.Model;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.List;

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
        return "login"; // TODO : 로그인 페이지 api로 수정예정
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

    @GetMapping("/member/check/") // 회원 전체 조회 (요구사항 정의서에 없습니다. 이후에 추가되면 만들겠습니다.)
    public String findAll(Model model) {
        List<MemberDTO> memberDTOList = memberService.findAll();
        model.addAttribute("memberList", memberDTOList);
        return "list"; // 이후 회원 전체 조회 페이지 생성시 api 변경
    }

    @GetMapping("/member/{id}/") // 회원 상세 페이지
    public String findById(@PathVariable String id, Model model) {
        MemberDTO memberDTO = memberService.findById(id);
        model.addAttribute("member", memberDTO);
        return "detail"; // TODO : 이후 마이페이지 구현시 api 수정
    }

    @GetMapping("/member/patch") // 회원정보 수정 페이지
    public String updateForm(HttpSession session, Model model) {
        String myEmail = (String) session.getAttribute("loginEmail");
        MemberDTO memberDTO = memberService.updateForm(myEmail);
        model.addAttribute("updateMember", memberDTO);
        return "update"; // TODO : 회원 수정 페이지 api 추가
    }
    @PostMapping("/member/update")
    public String update(@ModelAttribute MemberDTO memberDTO) {
        memberService.update(memberDTO);
        return "redirect: /member/patch" + memberDTO.getId(); // TODO : 회원 마이페이지 페이지 api로 변경
    }

    @GetMapping("/member/delete/{id}")
    public String deleteById(@PathVariable String id) {
        memberService.deleteById(id);
        return "delete"; // TODO: 삭제 완료 api
    }
}
