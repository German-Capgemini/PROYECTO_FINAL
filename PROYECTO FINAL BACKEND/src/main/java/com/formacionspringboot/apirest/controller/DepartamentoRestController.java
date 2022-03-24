
package com.formacionspringboot.apirest.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.dao.DataAccessException;

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
import com.formacionspringboot.apirest.entity.Departamento;
import com.formacionspringboot.apirest.service.DepartamentoService;




@RestController
@RequestMapping("/api")
public class DepartamentoRestController {
	
	@Autowired
	private DepartamentoService servicio;
	
	@GetMapping({"/departamento"})
	public List<Departamento> index(){
		return servicio.findAll();
	}
	
	
	@GetMapping("/departamento/{id}")
	public ResponseEntity<?>  findById(@PathVariable Long id) {
		Departamento Departamento = null;
		Map<String, Object> response = new HashMap<>();
		
		try {
			
			Departamento = servicio.findById(id);
			
		} catch (DataAccessException e) {
			response.put("mensaje", "Error al realizar consulta a base de datos");
			response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
			
			return new ResponseEntity<Map<String,Object>>(response,HttpStatus.INTERNAL_SERVER_ERROR);
			
		}
		
		if(Departamento == null) {
			response.put("mensaje", "El Departamento ID: " +id.toString()+" no existe en la base de datos");
			return new ResponseEntity<Map<String,Object>>(response,HttpStatus.NOT_FOUND);
		}
		
		return new ResponseEntity<Departamento>(Departamento,HttpStatus.OK);
		
	}
	

	
	@PostMapping("/departamentos")
	public ResponseEntity<?> saveDepartamento(@RequestBody Departamento Departamento) {
		 Departamento DepartamentoNew= null;
		 Map<String, Object> response = new HashMap<>();
		 
		 try {
			
			 DepartamentoNew = servicio.save(Departamento);
			
		} catch (DataAccessException e) {
			response.put("mensaje", "Error al realizar un insert a base de datos");
			response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
			
			return new ResponseEntity<Map<String,Object>>(response,HttpStatus.INTERNAL_SERVER_ERROR);
			
		}
		 
		 response.put("mensaje", "El Departamento ha sido creado con éxito!");
		 response.put("Departamento",DepartamentoNew);
		 
		 return new ResponseEntity<Map<String,Object>>(response,HttpStatus.CREATED);
		 
		 
	}
	
	
	
	

	
	@PutMapping("/departamentos/{id}")
	public ResponseEntity<?> updateDepartamento(@RequestBody Departamento Departamento, @PathVariable Long id) {
		Departamento DepartamentoActual = servicio.findById(id);
		
		Map<String, Object> response = new HashMap<>();
		
		if(DepartamentoActual == null) {
			response.put("mensaje","Error: no se pudo editar, el Departamento con ID: "+id.toString()+" no existe en la base de datos");
			return new ResponseEntity<Map<String,Object>>(response,HttpStatus.NOT_FOUND);
		}
		
		try {
			DepartamentoActual.setNombre(Departamento.getNombre());
			
		
				
			servicio.save(DepartamentoActual);
			
		}catch (DataAccessException e) {
			response.put("mensaje", "Error al realizar un update a base de datos");
			response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
			
			return new ResponseEntity<Map<String,Object>>(response,HttpStatus.INTERNAL_SERVER_ERROR);
			
		}
		
		 response.put("mensaje", "El Departamento ha sido actualizado con éxito!");
		 response.put("Departamento",DepartamentoActual);
		 
		 return new ResponseEntity<Map<String,Object>>(response,HttpStatus.CREATED);
	}
	
	
	
	@DeleteMapping("/departamentos/{id}")
	public ResponseEntity<?> deleteDepartamento(@PathVariable Long id) {
		
		Departamento DepartamentoActual = servicio.findById(id);
		
		Map<String, Object> response = new HashMap<>();
		
		if(DepartamentoActual == null) {
			response.put("mensaje","Error: no se pudo eliminar, el Departamento con ID: "+id.toString()+" no existe en la base de datos");
			return new ResponseEntity<Map<String,Object>>(response,HttpStatus.NOT_FOUND);
		}
		
		try {
			
			servicio.delete(id);
		
	
		}catch (DataAccessException e) {
			response.put("mensaje", "Error al realizar un delete a base de datos");
			response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
			
			return new ResponseEntity<Map<String,Object>>(response,HttpStatus.INTERNAL_SERVER_ERROR);
			
		}
		
		
		 response.put("mensaje", "El Departamento ha sido eliminado con éxito!");
		 response.put("Departamento",DepartamentoActual);
		 
		 return new ResponseEntity<Map<String,Object>>(response,HttpStatus.OK);
		
	}
	
	
	

}
