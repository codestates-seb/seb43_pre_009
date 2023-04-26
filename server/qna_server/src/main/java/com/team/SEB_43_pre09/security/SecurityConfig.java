package com.team.SEB_43_pre09.security;

import com.team.SEB_43_pre09.security.filter.JwtAuthenticationFilter;
import com.team.SEB_43_pre09.security.filter.JwtVerificationFilter;
import com.team.SEB_43_pre09.security.handler.MemberAccessDeniedHandler;
import com.team.SEB_43_pre09.security.handler.MemberAuthenticationEntryPoint;
import com.team.SEB_43_pre09.security.handler.MemberAuthenticationFailureHandler;
import com.team.SEB_43_pre09.security.handler.MemberAuthenticationSuccessHandler;
import com.team.SEB_43_pre09.security.jwt.JwtTokenizer;
import com.team.SEB_43_pre09.security.utils.CustomAuthorityUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    private final JwtTokenizer jwtTokenizer;
    private final CustomAuthorityUtils authorityUtils;

    public SecurityConfig(JwtTokenizer jwtTokenizer,
                                   CustomAuthorityUtils authorityUtils) {
        this.jwtTokenizer = jwtTokenizer;
        this.authorityUtils = authorityUtils;
    }

    @Autowired
    private UserDetailsService userDetailsService;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .headers().frameOptions().sameOrigin()
                .and()
                .csrf().disable()
                .cors(withDefaults())
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .formLogin().disable()
                .httpBasic().disable()
                .exceptionHandling()
                .authenticationEntryPoint(new MemberAuthenticationEntryPoint())  // 추가
                .accessDeniedHandler(new MemberAccessDeniedHandler())            // 추가
                .and()
                .apply(new CustomFilterConfigurer())
                .and()
                .authorizeHttpRequests(authorize -> authorize
                                .antMatchers(HttpMethod.POST, "/*/members").permitAll()
                                .antMatchers(HttpMethod.PATCH, "/*/members/**").hasRole("USER")
                                .antMatchers(HttpMethod.GET, "/*/members").hasRole("ADMIN")
//                    .mvcMatchers(HttpMethod.GET, "/*/member").hasRole("ADMIN")
                                .antMatchers(HttpMethod.GET, "/*/members/**").hasAnyRole("USER", "ADMIN")
                                .antMatchers(HttpMethod.DELETE, "/*/members/**").hasRole("USER")
                                .antMatchers(HttpMethod.POST, "/*/questions").hasRole("ADMIN")
                                .antMatchers(HttpMethod.PATCH, "/*/questions/**").hasRole("ADMIN")
                                .antMatchers(HttpMethod.GET, "/*/questions/**").hasAnyRole("USER", "ADMIN")
                                .antMatchers(HttpMethod.GET, "/*/questions").permitAll()
                                .antMatchers(HttpMethod.DELETE, "/*/questions").hasRole("ADMIN")
                                .antMatchers(HttpMethod.POST, "/*/answers").hasRole("USER")
                                .antMatchers(HttpMethod.PATCH, "/*/answers").hasAnyRole("USER", "ADMIN")
                                .antMatchers(HttpMethod.GET, "/*/answers/**").hasAnyRole("USER", "ADMIN")
                                .antMatchers(HttpMethod.DELETE, "/*/answers").hasRole("USER")
                                .anyRequest().permitAll()
                );
        return http.build();
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests()
                .antMatchers("/member/join", "/member/login").permitAll()
                .antMatchers("/member/patch").authenticated()
                .and()
                .formLogin()
                .loginPage("/member/login")
                .defaultSuccessUrl("/member/main")
                .permitAll()
                .and()
                .logout()
                .logoutUrl("/member/logout")
                .logoutSuccessUrl("/member/index")
                .invalidateHttpSession(true)
                .and()
                .csrf().disable();
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService).passwordEncoder(passwordEncoder());
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Arrays.asList("*"));
        configuration.setAllowedMethods(Arrays.asList("GET","POST", "PATCH", "DELETE"));
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }

    public class CustomFilterConfigurer extends AbstractHttpConfigurer<CustomFilterConfigurer, HttpSecurity> {
        @Override
        public void configure(HttpSecurity builder) throws Exception {
            AuthenticationManager authenticationManager = builder.getSharedObject(AuthenticationManager.class);

            JwtAuthenticationFilter jwtAuthenticationFilter = new JwtAuthenticationFilter(authenticationManager, jwtTokenizer);
            jwtAuthenticationFilter.setFilterProcessesUrl("/v11/auth/login");
            jwtAuthenticationFilter.setAuthenticationSuccessHandler(new MemberAuthenticationSuccessHandler());
            jwtAuthenticationFilter.setAuthenticationFailureHandler(new MemberAuthenticationFailureHandler());

            JwtVerificationFilter jwtVerificationFilter = new JwtVerificationFilter(jwtTokenizer, authorityUtils);


            builder
                    .addFilter(jwtAuthenticationFilter)
                    .addFilterAfter(jwtVerificationFilter, JwtAuthenticationFilter.class);
        }
    }
}

