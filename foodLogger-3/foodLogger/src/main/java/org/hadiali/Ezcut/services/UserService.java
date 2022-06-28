package org.hadiali.Ezcut.services;

import org.hadiali.Ezcut.models.User;

import java.util.List;

public interface UserService {
    //create user
    User createUser(User user) throws Exception;

    //updateUser
    User updateUser(User user) throws Exception;

    //login
    User loginUser(String username, String password);

    // get all users By Role
    List<User> allUsersByRoll();
    void deleteUserByUserId(Integer userId);
}
