package org.hadiali.Ezcut.servicesImpl;

import org.hadiali.Ezcut.models.CustomUserDetails;
import org.hadiali.Ezcut.models.User;
import org.hadiali.Ezcut.repositories.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

@Component
public class CustomUserDetailsService implements UserDetailsService {
    @Autowired
    private UserRepo userRepository;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = null;
        try {
            user = userRepository.findByUsernameForJwt(username);
            if (user == null) {
                throw new UsernameNotFoundException("User Not Found !!");
            } else {
                return new CustomUserDetails(user);
            }
        } catch (Exception exception) {
            exception.printStackTrace();
        }
    return null;
    }

}
