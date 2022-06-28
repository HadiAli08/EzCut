package org.hadiali.Ezcut.models;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Data
public class User implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer user_Id;
    private String user_Email;
    private String user_Password;
    private String user_Name;
    private String first_Name;
    private String last_Name;
    private String gender;
    private String dob;
    private String heightInInches;
    private String currentWeight;
    private Integer bmi;
    private String dailyPoints;
    @ManyToOne
    @JoinColumn(name = "role_Id")
    private Role role;
}
