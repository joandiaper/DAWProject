/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.joan.diaz.controller;

import com.joan.diaz.model.usuarios;
import com.joan.diaz.servicio.usuariosServicio;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author joandiaper
 */
@RestController
@RequiredArgsConstructor
public class usuariosController {
    private final usuariosServicio usuariosServicio;
    
    @RequestMapping("/")
    public String home(){
        return "Hello World!";
    }
    
    @GetMapping("/usuarios")
    public List<usuarios> listarUsuarios() {
        return usuariosServicio.listarUsuarios();
    }
    
    @GetMapping("/usuarios/{id}")
    public ResponseEntity<usuarios> obtenerUsuarios(@PathVariable Integer id) {
        try {
            usuarios usuario = usuariosServicio.obtenerProductoPorID(id);
            return ResponseEntity.ok(usuario);
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }
    
    @PostMapping("/usuarios/")
    public void nuevoUsuario(@RequestBody usuarios usuario){
        usuariosServicio.guardarUsuario(usuario);
    }
    
    @PutMapping("/usuarios/{id}")
    public ResponseEntity<?> editarUsuario (@RequestBody usuarios usuario, @PathVariable Integer id){
        try {
            usuarios usuarioExistente = usuariosServicio.obtenerProductoPorID(id);
            usuarioExistente.setName(usuario.getName());
            usuarioExistente.setSurname(usuario.getSurname());
            usuarioExistente.setEmail(usuario.getEmail());
            usuarioExistente.setPhone(usuario.getPhone());
            usuarioExistente.setBirthdate(usuario.getBirthdate());
            usuarioExistente.setCountry(usuario.getCountry());
            usuarioExistente.setReference(usuario.getReference());
            usuariosServicio.guardarUsuario(usuarioExistente);
            return new ResponseEntity<usuarios>(usuario, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<usuarios>(HttpStatus.NOT_FOUND);
        }
    }
    
    //DeleteMapping
    @DeleteMapping("/usuarios/{id}")
    public void borrarUsuario(@PathVariable Integer id) {
        usuariosServicio.eliminarUsuario(id);
    }
    
}
