package com.formacionspringboot.apirest.service;

import java.util.List;

import com.formacionspringboot.apirest.entity.Departamento;
import com.formacionspringboot.apirest.entity.Empleado;
import com.formacionspringboot.apirest.entity.Proyecto;

public interface EmpleadoService {

public List<Empleado> findAll();
	
	public Empleado findById(Long id);
	
	public Empleado save(Empleado empleado);
	
	public void delete(Long id);
	
	public List<Departamento> findAllDepartamentos();
	
	public List<Proyecto> findAllProyectos();
	
}
