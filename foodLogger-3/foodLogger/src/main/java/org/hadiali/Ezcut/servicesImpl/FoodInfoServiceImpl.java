package org.hadiali.Ezcut.servicesImpl;

import org.hadiali.Ezcut.models.FoodInfo;
import org.hadiali.Ezcut.repositories.FoodRepo;
import org.hadiali.Ezcut.services.FoodInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FoodInfoServiceImpl implements FoodInfoService {
    @Autowired
    private FoodRepo foodRepo;
    @Override
    public FoodInfo createFoodInfo(FoodInfo foodInfo) throws Exception {
        return foodRepo.save(foodInfo);
    }

    @Override
    public FoodInfo updateFoodInfo(FoodInfo foodInfo) throws Exception {
        return foodRepo.save(foodInfo);
    }

    @Override
    public List<FoodInfo> getAll() {
        return foodRepo.findAll();
    }

    @Override
    public void deleteFoodInfoById(Integer id) {
        foodRepo.deleteById(id);
    }
}
