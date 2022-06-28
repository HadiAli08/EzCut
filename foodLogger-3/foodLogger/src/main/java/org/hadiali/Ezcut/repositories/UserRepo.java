package org.hadiali.Ezcut.repositories;

import org.hadiali.Ezcut.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepo extends JpaRepository<User,Integer> {
    @Query(value = "select * from user where user_Name = :user_Name",nativeQuery = true)
    public User findByUsernameForJwt(@Param("user_Name") String user_Name) throws Exception;
    @Query(value = "select * from user where role_Id In (1,2)",nativeQuery = true)
    List<User> findAllUsersWithRole();

//    @Query(value = "select * from user where user_name = :user_name and role_Id = 2",nativeQuery = true)
//    public User findByUsername(@Param("user_name") String user_name) throws Exception;
    @Query("select u from User u where u.user_Name = :user_Name")
    public User getUserByUserName(@Param("user_Name") String user_Name);
    @Query(value = "select * from user where user_name = :user_name and user_password = :user_password and role_Id = 2",nativeQuery = true)
    public User findUserByUsernameAndPasswordUser(@Param("user_name") String user_name,@Param("user_password") String user_password);

    @Query(value = "select * from user where user_name = :user_name and user_password = :user_password and role_Id = 1",nativeQuery = true)
    public User findUserByUsernameAndPasswordAdmin(@Param("user_name") String user_name,@Param("user_password") String user_password);

    @Query(value = "select * from user where user_name = :user_name",nativeQuery = true)
    public User getIdByName(@Param("user_name") String user_name);
}
