/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.joan.diaz.repositorio;

import com.joan.diaz.model.usuarios;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author joandiaper
 */
public interface usuariosRepositorio extends JpaRepository<usuarios, Integer>{
    
}
