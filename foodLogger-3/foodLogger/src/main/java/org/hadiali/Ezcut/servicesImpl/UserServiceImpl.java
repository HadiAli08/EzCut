package org.hadiali.Ezcut.servicesImpl;

import org.hadiali.Ezcut.models.User;
import org.hadiali.Ezcut.repositories.UserRepo;
import org.hadiali.Ezcut.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepo userRepo;
    @Override
    public User createUser(User user) throws Exception {
        User save = this.userRepo.save(user);
        return save;
    }

    @Override
    public User updateUser(User user) throws Exception {
        User save = this.userRepo.save(user);
        return save;
    }

    @Override
    public User loginUser(String username, String password) {
        User user = null;
        User admin = null;
        try{
            user = this.userRepo.findUserByUsernameAndPasswordUser(username, password);
            admin = this.userRepo.findUserByUsernameAndPasswordAdmin(username, password);

            if(user == null && admin.getRole().getRole_Id() == 1)
                return admin;
            else
                return user;
        }catch(Exception ex){
            ex.printStackTrace();
        }

        return null;
    }

    @Override
    public List<User> allUsersByRoll() {
        try{
            return this.userRepo.findAllUsersWithRole();
        }catch(Exception ex){
            ex.printStackTrace();
        }

        return null;
    }

    @Override
    public void deleteUserByUserId(Integer userId) {
        try {
            this.userRepo.deleteById(userId);
        }catch(Exception exception){
            exception.printStackTrace();
        }
    }


}
