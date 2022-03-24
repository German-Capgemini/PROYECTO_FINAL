package com.formacionspringboot.apirest.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.formacionspringboot.apirest.entity.Departamento;
import com.formacionspringboot.apirest.entity.Proyecto;

@Repository
public interface ProyectoDao extends CrudRepository<Proyecto,Long>{

}
