package com.team.SEB_43_pre09.security.userdetails;

import com.team.SEB_43_pre09.exception.BusinessLogicException;
import com.team.SEB_43_pre09.exception.ExceptionCode;
import com.team.SEB_43_pre09.member.entity.MemberEntity;
import com.team.SEB_43_pre09.member.repository.MemberRepository;
import com.team.SEB_43_pre09.security.utils.CustomAuthorityUtils;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.Optional;

import static org.apache.tomcat.jni.SSL.setPassword;

/**
 * - Custom UserDetails 사용
 * - User Role을 DB에서 조회한 후, HelloAuthorityUtils로 Spring Security에게 Role 정보 제공
 */
@Component
public class MemberDetailsService implements UserDetailsService {
    private final MemberRepository memberRepository;
    private final CustomAuthorityUtils authorityUtils;

    public MemberDetailsService(MemberRepository memberRepository, CustomAuthorityUtils authorityUtils) {
        this.memberRepository = memberRepository;
        this.authorityUtils = authorityUtils;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<MemberEntity> optionalMember = memberRepository.findByMemberEmail(username);
        MemberEntity findMember = optionalMember.orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));

        return new MemberDetails(findMember);
    }

    private final class MemberDetails extends MemberEntity implements UserDetails {
        MemberDetails(MemberEntity member) {
            setMember_id(member.getMember_id());
            setMemberEmail(member.getMemberEmail());
            setMemberPassword(member.getMemberPassword());
            setRoles(member.getRoles());
        }

        @Override
        public Collection<? extends GrantedAuthority> getAuthorities() {
            return authorityUtils.createAuthorities(this.getRoles());
        }

        @Override
        public String getPassword() {
            return null;
        }

        @Override
        public String getUsername() {
            return getMemberEmail();
        }

        @Override
        public boolean isAccountNonExpired() {
            return true;
        }

        @Override
        public boolean isAccountNonLocked() {
            return true;
        }

        @Override
        public boolean isCredentialsNonExpired() {
            return true;
        }

        @Override
        public boolean isEnabled() {
            return true;
        }
    }
}