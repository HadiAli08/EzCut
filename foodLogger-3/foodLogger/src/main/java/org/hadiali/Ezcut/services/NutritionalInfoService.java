package org.hadiali.Ezcut.services;

import org.hadiali.Ezcut.models.NutritionalInfo;

import java.util.List;

public interface NutritionalInfoService {
    NutritionalInfo createNutritionalInfo(NutritionalInfo nutritionalInfo) throws Exception;

    NutritionalInfo updateNutritionalInfo(NutritionalInfo nutritionalInfo) throws Exception;

    List<NutritionalInfo> getAll();
    NutritionalInfo getByUserId(Integer id);
    void deleteNutritionalInfoById(Integer id);
}
