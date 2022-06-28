package org.hadiali.Ezcut.controllers;

import org.hadiali.Ezcut.models.FoodInfo;
import org.hadiali.Ezcut.services.FoodInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/foods")
public class FoodController {
    @Autowired
    private FoodInfoService foodInfoService;
    @PostMapping("/create_food_info")
    public ResponseEntity<FoodInfo> CreateFoodInfo(@RequestBody FoodInfo foodInfo) throws Exception {
        try {
            return new ResponseEntity<>(foodInfoService.createFoodInfo(foodInfo), HttpStatus.OK);
        } catch (Exception ex) {
            ex.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);

        }
    }
    @PutMapping("/update_food_info")
    public ResponseEntity<FoodInfo> updateFoodInfo(@RequestBody FoodInfo foodInfo) throws Exception {
        try{
            return new ResponseEntity<>(foodInfoService.updateFoodInfo(foodInfo), HttpStatus.OK);
        }catch(Exception exception){
            exception.printStackTrace();
        }
        return null;
    }

    @GetMapping("/")
    public ResponseEntity<FoodInfo> getFoodInfo(){
        try{
            List<FoodInfo> foodInfos = this.foodInfoService.getAll();
            if(foodInfos == null)
                return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
            else
                return new ResponseEntity(foodInfos,HttpStatus.OK);
        }catch(Exception exception){
            exception.printStackTrace();
        }

        return null;
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") Integer id){
        foodInfoService.deleteFoodInfoById(id);
        return ResponseEntity.status(HttpStatus.OK).build();
    }
}
