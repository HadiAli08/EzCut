package org.hadiali.Ezcut.controllers;

import org.hadiali.Ezcut.models.NutritionalInfo;
import org.hadiali.Ezcut.models.User;
import org.hadiali.Ezcut.repositories.UserRepo;
import org.hadiali.Ezcut.services.NutritionalInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/nutritional_info")
public class NutritionalInfoController {
    @Autowired
    private NutritionalInfoService nutritionalInfoService;
    @Autowired
    private UserRepo userRepo;
    @PostMapping("/create_nutritional_info")
    public ResponseEntity<NutritionalInfo> CreateNutritionalInfo(@RequestBody NutritionalInfo nutritionalInfo, Principal principal) throws Exception {
        try {
            String name = principal.getName();
            User user = userRepo.getIdByName(name);
            nutritionalInfo.setUser(user);
            return new ResponseEntity<>(nutritionalInfoService.createNutritionalInfo(nutritionalInfo), HttpStatus.OK);
        } catch (Exception ex) {
            ex.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);

        }
    }
    @PutMapping("/update_nutritional_info")
    public ResponseEntity<NutritionalInfo> updateNutritionalInfo(@RequestBody NutritionalInfo nutritionalInfo) throws Exception {
        try{
            return new ResponseEntity<>(nutritionalInfoService.updateNutritionalInfo(nutritionalInfo), HttpStatus.OK);
        }catch(Exception exception){
            exception.printStackTrace();
        }
        return null;
    }

    @GetMapping("/")
    public ResponseEntity<NutritionalInfo> getNutritionalInfo(){
        try{
            List<NutritionalInfo> nutritionalInfoServiceAll = this.nutritionalInfoService.getAll();
            if(nutritionalInfoServiceAll == null)
                return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
            else
                return new ResponseEntity(nutritionalInfoServiceAll,HttpStatus.OK);
        }catch(Exception exception){
            exception.printStackTrace();
        }

        return null;
    }
    @GetMapping("/{id}")
    public ResponseEntity<NutritionalInfo> getNutritionalInfoByUserId(@PathVariable("id") int id){
        try{
            NutritionalInfo byUserId = this.nutritionalInfoService.getByUserId(id);
            if(byUserId == null)
                return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
            else
                return new ResponseEntity(byUserId,HttpStatus.OK);
        }catch(Exception exception){
            exception.printStackTrace();
        }

        return null;
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") Integer id){
        nutritionalInfoService.deleteNutritionalInfoById(id);
        return ResponseEntity.status(HttpStatus.OK).build();
    }
}
