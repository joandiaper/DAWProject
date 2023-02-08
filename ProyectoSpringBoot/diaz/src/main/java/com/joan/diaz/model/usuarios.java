/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.joan.diaz.model;

//import java.util.Date;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 *
 * @author joandiaper
 */
@Entity
@Data @NoArgsConstructor @AllArgsConstructor
public class usuarios {
    @Id @GeneratedValue
    private Integer id;
    private String name;
    private String surname;
    private String email;
    private String phone;
    private String birthdate;
    private String country;
    private String reference;
}
