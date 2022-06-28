package org.hadiali.Ezcut.servicesImpl;

import org.hadiali.Ezcut.models.NutritionalInfo;
import org.hadiali.Ezcut.repositories.NutritionalInfoRepo;
import org.hadiali.Ezcut.services.NutritionalInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NutritionalInfoServiceImpl implements NutritionalInfoService {

    @Autowired
    private NutritionalInfoRepo nutritionalInfoRepo;
    @Override
    public NutritionalInfo createNutritionalInfo(NutritionalInfo nutritionalInfo) throws Exception {
        return nutritionalInfoRepo.save(nutritionalInfo);
    }

    @Override
    public NutritionalInfo updateNutritionalInfo(NutritionalInfo nutritionalInfo) throws Exception {
        return nutritionalInfoRepo.save(nutritionalInfo);
    }

    @Override
    public List<NutritionalInfo> getAll() {
        return nutritionalInfoRepo.findAll();
    }

    @Override
    public NutritionalInfo getByUserId(Integer id) {
        return nutritionalInfoRepo.getNutritionalInfoByUserId(id);
    }

    @Override
    public void deleteNutritionalInfoById(Integer id) {
        nutritionalInfoRepo.deleteById(id);
    }
}
