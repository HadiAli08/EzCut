package org.hadiali.Ezcut.controllers;

import org.hadiali.Ezcut.models.Role;
import org.hadiali.Ezcut.models.User;
import org.hadiali.Ezcut.repositories.RoleRepo;
import org.hadiali.Ezcut.repositories.UserRepo;
import org.hadiali.Ezcut.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.security.Principal;
import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/user")
@EnableGlobalMethodSecurity(jsr250Enabled = true)
public class UserController {
    @Autowired
    private UserService userService;
    @Autowired
    private UserRepo userRepo;
    @Autowired
    private RoleRepo roleRepo;
    @PostMapping("/register_user")
    public ResponseEntity<User> RegisterUser(@RequestBody User user) throws Exception {
        try {
            Role role = new Role();
            role.setRole_Id(2);
            role.setRole_Name("User");
            roleRepo.save(role);
            user.setRole(role);
            return new ResponseEntity<>(userService.createUser(user), HttpStatus.OK);

        } catch (Exception ex) {
                ex.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);

        }
    }

    @PostMapping("/register_admin")
    public ResponseEntity<User> RegisterAdmin(@RequestBody User user) throws Exception {
        try {
            Role role = new Role();
            role.setRole_Id(1);
            role.setRole_Name("Admin");
            roleRepo.save(role);
            user.setRole(role);
            return new ResponseEntity<>(userService.createUser(user), HttpStatus.OK);

        } catch (Exception ex) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);

        }
    }
    @PutMapping("/update_user")
    public ResponseEntity<User> updateUser(@RequestBody User user, Principal principal) throws Exception {

        String name = principal.getName();
        User user1 = userRepo.getUserByUserName(name);
        if(user1 != null && user1.getRole().getRole_Id() == 1){
            Role role = new Role();
            role.setRole_Id(1);
            role.setRole_Name("Admin");
            user.setRole(role);
            return new ResponseEntity<>(userService.updateUser(user), HttpStatus.OK);
        }else if(user1 != null && user1.getRole().getRole_Id() == 2){
            Role role = new Role();
            role.setRole_Id(2);
            role.setRole_Name("User");
            user.setRole(role);
            return new ResponseEntity<>(userService.updateUser(user), HttpStatus.OK);
        }else{

            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }
    @PostMapping("/logout" )
    public ResponseEntity<String> logout(HttpSession httpSession) {
        httpSession.invalidate();
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @GetMapping("/users")
    public ResponseEntity<User> getUsersByRole(){
        try{
            List<User> userList = this.userService.allUsersByRoll();
            if(userList == null)
                return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
            else
                return new ResponseEntity(userList,HttpStatus.OK);
        }catch(Exception exception){
            exception.printStackTrace();
        }

        return null;
    }
    @GetMapping("/{id}")
    public User ViewSingleUser(@PathVariable("id") Integer id){
        try {
            User user = this.userRepo.findById(id).get();
            return user;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") Integer id){
        userService.deleteUserByUserId(id);
        return ResponseEntity.status(HttpStatus.OK).build();
    }
}
