package org.hadiali.Ezcut.models;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
public class NutritionalInfo {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String name;
    private Integer serving_quantity;
    private String serving_unit;
    private Integer serving_weight;
    private Integer calories;
    private Integer total_fat;
    private Integer sodium;
    private Integer total_carbs;
    private Integer dietary_fiber;
    private Integer sugar;
    private Integer protein;
    private Integer potassium;
    Date date = new Date();
    @ManyToOne
    private User user;
}
