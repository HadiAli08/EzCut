package org.hadiali.Ezcut.services;

import org.hadiali.Ezcut.models.FoodInfo;

import java.util.List;

public interface FoodInfoService {
    FoodInfo createFoodInfo(FoodInfo foodInfo) throws Exception;

    FoodInfo updateFoodInfo(FoodInfo foodInfo) throws Exception;

    List<FoodInfo> getAll();

    void deleteFoodInfoById(Integer id);
}
