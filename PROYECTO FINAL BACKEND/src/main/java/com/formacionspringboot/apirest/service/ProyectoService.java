package com.formacionspringboot.apirest.service;

import java.util.List;

import com.formacionspringboot.apirest.entity.Proyecto;

public interface ProyectoService {

public List<Proyecto> findAll();
	
	public Proyecto findById(Long id);
	
	public Proyecto save(Proyecto proyecto);
	
	public void delete(Long id);
}
