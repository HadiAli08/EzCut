package org.hadiali.Ezcut.repositories;

import org.hadiali.Ezcut.models.FoodInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FoodRepo extends JpaRepository<FoodInfo,Integer> {

}
