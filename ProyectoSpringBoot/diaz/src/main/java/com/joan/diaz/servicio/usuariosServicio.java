/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.joan.diaz.servicio;

import com.joan.diaz.model.usuarios;
import com.joan.diaz.repositorio.usuariosRepositorio;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author joandiaper
 */
@Service
public class usuariosServicio {
    @Autowired
    private usuariosRepositorio repositorio;
    
    public List<usuarios>listarUsuarios(){
        return repositorio.findAll();
    }
    
    public void guardarUsuario(usuarios usuario){
        repositorio.save(usuario);
    }
    
    public usuarios obtenerProductoPorID(Integer id){
        return repositorio.findById(id).get();
    }
    
    public void eliminarUsuario(Integer id){
        repositorio.deleteById(id);
    }
}
