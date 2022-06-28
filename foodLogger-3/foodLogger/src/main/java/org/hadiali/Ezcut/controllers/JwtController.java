package org.hadiali.Ezcut.controllers;

import org.hadiali.Ezcut.helper.JwtUtil;
import org.hadiali.Ezcut.models.JwtResponse;
import org.hadiali.Ezcut.models.User;
import org.hadiali.Ezcut.repositories.UserRepo;
import org.hadiali.Ezcut.services.UserService;
import org.hadiali.Ezcut.servicesImpl.CustomUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.security.Principal;

@RestController
@CrossOrigin("*")
public class JwtController {
    @Autowired
    private CustomUserDetailsService customUserDetailsService;
    @Autowired
    private UserRepo userRepository;
    @Autowired
    private JwtUtil jwtUtil;
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private PasswordEncoder bCryptPasswordEncoder;
    @Autowired
    private UserService userService;
    @PostMapping("/token")
    public ResponseEntity<?> generateToken(@RequestBody User jwtRequest, HttpSession httpSession) throws Exception {
        try {
            User user1 = this.userService.loginUser(jwtRequest.getUser_Name(), jwtRequest.getUser_Password());
            if(user1 == null) {
                httpSession.setAttribute("user", user1);
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }else
                this.authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(jwtRequest.getUser_Name(),bCryptPasswordEncoder.encode(jwtRequest.getUser_Password())));
        }catch(Exception e){
            throw new Exception("Bad Credentials");
        }
        UserDetails userDetails = this.customUserDetailsService.loadUserByUsername(jwtRequest.getUser_Name());

        String token = this.jwtUtil.generateToken(userDetails);
        System.out.println("JWT : " + token);
        return ResponseEntity.ok(new JwtResponse(token));
    }
    @GetMapping("/current-user")
    public User getCurrentUser(Principal principal){
        User user = null;
        try {
            user = this.userRepository.findByUsernameForJwt(principal.getName());
            System.out.println("**************** " + user.getUser_Name());
            return user;
        } catch (Exception exception) {
            exception.printStackTrace();
        }
        return user;
    }
}
