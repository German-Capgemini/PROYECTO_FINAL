package com.formacionspringboot.apirest.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.formacionspringboot.apirest.dao.ProyectoDao;
import com.formacionspringboot.apirest.entity.Proyecto;

@Service
public class ProyectoServiceImpl implements ProyectoService {

	
	@Autowired
	private ProyectoDao proyectoDao;
	
	@Override
	@Transactional(readOnly=true)
	public List<Proyecto> findAll() {
		return (List<Proyecto>) proyectoDao.findAll();
	}

	@Override
	@Transactional(readOnly=true)
	public Proyecto findById(Long id) {
		return  proyectoDao.findById(id).orElse(null);
	}

	@Override
	@Transactional
	public Proyecto save(Proyecto cliente) {
		return proyectoDao.save(cliente);
	}

	@Override
	@Transactional
	public void delete(Long id) {
		proyectoDao.deleteById(id);
	}

	

}
