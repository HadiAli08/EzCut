package org.hadiali.Ezcut.repositories;

import org.hadiali.Ezcut.models.NutritionalInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface NutritionalInfoRepo extends JpaRepository<NutritionalInfo,Integer> {
    @Query(value = "SELECT *\n" +
            "FROM nutritional_info\n" +
            "WHERE user_user_id = :user_Id ORDER BY date DESC LIMIT 1",nativeQuery = true)
    public NutritionalInfo getNutritionalInfoByUserId(@Param("user_Id") Integer user_Id);

}
