package com.formacionspringboot.apirest.dao;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.formacionspringboot.apirest.entity.Departamento;
import com.formacionspringboot.apirest.entity.Empleado;
import com.formacionspringboot.apirest.entity.Proyecto;

@Repository
public interface EmpleadoDao extends CrudRepository<Empleado,Long> {

	
	@Query("from Departamento")
	public List<Departamento> findAllDepartamentos();
	
	@Query("from Proyecto")
	public List<Proyecto> findAllProyectos();
	
}
